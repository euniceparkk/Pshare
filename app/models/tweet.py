from .db import db

class Tweet(db.Model):
  __tablename__ = 'tweets'
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  content = db.Column(db.String(280), nullable = False)
  image = db.Column(db.Text)
  created_at = db.Column(db.DateTime, nullable = False)

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
      "likes": self.likes.to_dict(),
      "replies": self.replies.to_dict()
    }
