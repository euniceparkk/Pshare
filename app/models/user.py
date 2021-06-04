from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .follower import follows

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(50), nullable = False)
  last_name = db.Column(db.String(50), nullable = False)
  username = db.Column(db.String(50), nullable = False, unique = True)
  email = db.Column(db.String(100), nullable = False, unique = True)
  phone = db.Column(db.Integer, nullable = False, unique = True)
  birthday = db.Column(db.Text, nullable = False)
  hashed_password = db.Column(db.String(255), nullable = False)
  profile_img = db.Column(db.Text, nullable = False)
  cover_img = db.Column(db.Text, nullable = False)
  bio = db.Column(db.Text, nullable = False)
  location = db.Column(db.String(50), nullable = False)
  created_at = db.Column(db.DateTime, nullable = False)

  # booksmarks belongsTo user
  bookmarks = db.relationship("Bookmark", back_populates="user")
  # likes belongsTo user
  likes = db.relationship("Like", back_populates="user")
  # tweets belongTo user
  tweets = db.relationship("Tweet", back_populates="user")
  # replies belongsTo user
  replies = db.relationship("Reply", back_populates="user")


  # this relationship allows you to access both the collection of users 
  # that follow a given user (with user.followers), and the collection
  # of users that a user follows (with user.follows)
  followed_users = db.relationship(
    "User", 
    secondary=follows,
    primaryjoin=(follows.c.user_id == id),
    secondaryjoin=(follows.c.follows_id == id),
    backref=db.backref("users_followers", lazy="dynamic"),
    lazy="dynamic"
  )

  # # many-to-many relationship without having a physical joins table
  # followed_users = db.relationship(
  #   "User", 
  #   secondary=Follower,
  #   primaryjoin=(Follower.follows_id == id),
  #   secondaryjoin=(Follower.user_id == id),
  #   backref=db.backref("users_followers", lazy="dynamic"),
  #   lazy="dynamic"
  # ) 

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
      "first_name": self.first_name,
      "last_name": self.last_name,
      "username": self.username,
      "email": self.email,
      "phone": self.phone,
      "birthday": self.birthday,
      "profile_img": self.profile_img,
      "cover_img": self.cover_img,
      "bio": self.bio,
      "location": self.location,
      "created_at": self.created_at,

      # nesting bookmark dictionary inside user dictionary 
      "bookmarks": [bookmark.to_dict() for bookmark in self.bookmarks],
      "likes": [like.to_dict() for like in self.likes],
      "tweets": [tweet.to_dict() for tweet in self.tweets],
      "replies": [reply.to_dict() for reply in self.replies],
      "followed_users": [user.id for user in self.followed_users],
      # "users_followers": self.users_followers.to_dict()
    }
  
  def tweets_user_dict(self):
    return {
      "id": self.id,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "username": self.username,
      "email": self.email,
      "phone": self.phone,
      "birthday": self.birthday,
      "profile_img": self.profile_img,
      "cover_img": self.cover_img,
      "bio": self.bio,
      "location": self.location,
      "created_at": self.created_at,
    }

