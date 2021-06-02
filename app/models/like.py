from .db import db

class Like(db.Model):
  __tablename__ = 'likes'
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable = False)
  created_at = db.Column(db.DateTime, nullable = False)

  # user hasMany likes
  user = db.relationship("User", back_populates="likes")
  # tweet hasMany likes
  tweet = db.relationship("Tweet", back_populates="likes")