from .db import db

class Bookmark(db.Model):
  __tablename__= 'bookmarks'
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable = False)
  created_at = db.Column(db.DateTime, nullable = False)

  # user hasMany bookmarks
  user = db.relationship("User", back_populates="bookmarks")
  # tweet hasMany bookmarks
  tweet = db.relationship("Tweet", back_populates="bookmarks")