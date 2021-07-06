from flask import Blueprint, jsonify, request
from app.models import db, Tweet
from flask_login import login_required, current_user
from app.forms import TweetForm
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)

tweet_routes = Blueprint('tweets', __name__)


# GET all tweets 
@tweet_routes.route('/')
@login_required
def load_tweets():
  tweets = Tweet.query.all()
  # print("TWEEEET", tweets)
  return jsonify([tweet.to_dict() for tweet in tweets])


# GET one tweet
@tweet_routes.route('/<int:id>')
@login_required
def tweet(id):
  tweet = Tweet.query.get(id)
  return tweet.to_dict()


# POST one tweet
@tweet_routes.route('/add', methods=["POST"])
@login_required
def add_tweet():
  # if tweet has no image, POST content without image
  if not request.files:
    form = TweetForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
      tweet = Tweet(
        user_id=current_user.id,
        content=form.data['content'],
        image=None,
      )
      db.session.add(tweet)
      db.session.commit()
      return tweet.to_dict()

  image = request.files["image"]
  
  # UUID: unique file names
  if not allowed_file(image.filename):
    return {"errors": "file type not permitted"}, 400
  
  image.filename = get_unique_filename(image.filename)

  upload = upload_file_to_s3(image)

  if "url" not in upload:
    # if the dictionary doesn't have a url key
    # it means that there was an error when we tried to upload
    # so we send back that error message
    return upload, 400

  url = upload["url"]
  
  form = TweetForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    tweet = Tweet(
      user_id=current_user.id,
      content=form.data['content'],
      image=url,
    )
    db.session.add(tweet)
    db.session.commit()
    return tweet.to_dict()


# DELETE one tweet
@tweet_routes.route('/<int:tweet_id>', methods=["DELETE"])
@login_required
def remove_tweet(tweet_id):
  tweet = Tweet.query.get(tweet_id)
  # tweet = Tweet.query.filter(Tweet.user_id == "current_user").get(tweet_id)

  db.session.delete(tweet)
  db.session.commit()
  return tweet.to_dict()


