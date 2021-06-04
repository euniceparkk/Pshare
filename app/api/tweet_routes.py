from flask import Blueprint, jsonify
from app.models import db, Tweet
from flask_login import login_required

tweet_routes = Blueprint('tweets', __name__)

@tweet_routes.route('/')
# @login_required
def load_tweets():
  tweets = Tweet.query.all()
  return jsonify([tweet.to_dict() for tweet in tweets])
