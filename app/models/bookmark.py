from .db import db
import datetime

now = datetime.datetime.now()

class Bookmark(db.Model):
  __tablename__= 'bookmarks'
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable = False)
  created_at = db.Column(db.DateTime, default=now)

  # user hasMany bookmarks
  user = db.relationship("User", back_populates="bookmarks")
  # tweet hasMany bookmarks
  tweet = db.relationship("Tweet", back_populates="bookmarks")

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "tweet_id": self.tweet_id,
      "created_at": self.created_at
    }