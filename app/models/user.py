from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .follower import Follower

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(50), nullable = False)
  last_name = db.Column(db.String(50), nullable = False)
  email = db.Column(db.String(100), nullable = False, unique = True)
  phone = db.Column(db.Integer, nullable = False, unique = True)
  birthday = db.Column(db.Text, nullable = False)
  hashed_password = db.Column(db.String(255), nullable = False)
  profile_img = db.Column(db.Text, nullable = False)
  cover_img = db.Column(db.Text, nullable = False)
  bio = db.Column(db.Text, nullable = False)
  location = db.Column(db.String(50), nullable = False)
  created_at = db.Column(db.DateTime, nullable = False)
  updated_at = db.Column(db.DateTime, nullable = False)

  # booksmarks belongsTo user
  bookmarks = db.relationship("Bookmark", back_populates="user")
  # likes belongsTo user
  likes = db.relationship("Like", back_populates="user")
  # tweets belongTo user
  tweets = db.relationship("Tweet", back_populates="user")
  # replies belongsTo user
  replies = db.relationship("Reply", back_populates="user")

  # followers belongsTo user
  # followers = db.relationship("Follower", back_populates="follows", foreign_keys=[Follower.user_id])
  # followed belongsTo user
  # followed = db.relationship("Follower", back_populates="follows", foreign_keys=[Follower.follows_id])

  # many-to-many
  followed_users = db.relationship(
    "User", 
    secondary="Follower",
    primaryjoin=(Follower.follows_id == id),
    secondaryjoin=(Follower.user_id == id),
    backref=db.backref("users_followers", lazy="dynamic"),
    lazy="dynamic"
  ) 


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }
