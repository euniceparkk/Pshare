from .db import db
import datetime

now = datetime.datetime.now()

class Like(db.Model):
  __tablename__ = 'likes'
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable = False)
  created_at = db.Column(db.DateTime, default=now)

  # user hasMany likes
  user = db.relationship("User", back_populates="likes")
  # tweet hasMany likes
  tweet = db.relationship("Tweet", back_populates="likes")

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "tweet_id": self.tweet_id,
      "created_at": self.created_at,

      "tweet": self.tweet.users_tweet_to_dict(),
      "user": self.user.tweets_user_dict(),
    }