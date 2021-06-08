from .db import db
import datetime

now = datetime.datetime.now()

class Tweet(db.Model):
  __tablename__ = 'tweets'
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  content = db.Column(db.String(280), nullable = False)
  image = db.Column(db.Text)
  created_at = db.Column(db.DateTime, default=now)

  # bookmarks belongsTo tweet
  bookmarks = db.relationship("Bookmark", back_populates="tweet")
  # likes belongsTo tweet
  likes = db.relationship("Like", back_populates="tweet")

  # user hasMany tweets
  user = db.relationship("User", back_populates="tweets")

  # replies belongsTo tweet
  replies = db.relationship("Reply", back_populates="tweet")

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "content": self.content,
      "image": self.image,
      "created_at": self.created_at,

      # nesting bookmark dictionary inside user dictionary
      "likes": [like.to_dict() for like in self.likes],
      "replies": [reply.to_dict() for reply in self.replies],
      "bookmarks": [bookmark.to_dict() for bookmark in self.bookmarks],
      "user": self.user.tweets_user_dict()
    }

  def users_tweet_to_dict(self):
    return {
      # nesting bookmark dictionary inside user dictionary
      "likes": [like.id for like in self.likes],
      "replies": [reply.id for reply in self.replies],
      "bookmarks": [bookmark.id for bookmark in self.bookmarks],
      "user": self.user.tweets_user_dict()
    }
