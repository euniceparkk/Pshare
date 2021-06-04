from flask import Blueprint, jsonify, request
from app.models import db, Tweet
from flask_login import login_required, current_user
from app.forms import TweetForm

tweet_routes = Blueprint('tweets', __name__)

# GET all tweets 
@tweet_routes.route('/')
@login_required
def load_tweets():
  tweets = Tweet.query.all()
  # print("TWEEEET", tweets)
  return jsonify([tweet.to_dict() for tweet in tweets])

# POST one tweet
@tweet_routes.route('/add', methods=["POST"])
@login_required
def add_tweet():

  """
    Creates a new tweet
  """

  form = TweetForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    tweet = Tweet(
      user_id=current_user.id,
      content=form.data['content'],
      image=form.data['image'],
    )
    db.session.add(tweet)
    db.session.commit()
    return tweet.to_dict()

  # tweet = Tweet(**request.json)
  # print("TWEEEET", tweet)

  # db.session.add(tweet)
  # db.session.commit()
  # return tweet.to_dict()