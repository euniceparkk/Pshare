from .db import db

class Reply(db.Model):
  __tablename__= 'replies'
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable = False)
  content = db.Column(db.String(280), nullable = False)
  created_at = db.Column(db.DateTime, nullable = False)

  # user hasMany replies
  user = db.relationship("User", back_populates="replies")
  # tweet hasMany replies
  tweet = db.relationship("Tweet", back_populates="replies")

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "tweet_id": self.tweet_id,
      "content": self.content,
      "created_at": self.created_at
    }