from .db import db

class Follower(db.Model):
  __tablename__= 'followers'
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"),nullable = False)
  follows_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  created_at = db.Column(db.DateTime, nullable = False)

  # user hasMany followers
  follows = db.relationship("User", back_populates="followers", foreign_keys=[user_id])
  # followed hasMany followers
  user = db.relationship("User", back_populates="followed", foreign_keys=[follows_id])
  