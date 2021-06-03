from .db import db

follows = db.Table(
    "follows", 
    db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("follows_id", db.Integer, db.ForeignKey("users.id"))
)

# class Follower(db.Model):
#   __tablename__= "followers"
#   id = db.Column(db.Integer, primary_key = True)
#   user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
#   follows_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
#   created_at = db.Column(db.DateTime, nullable = False)

#   def to_dict(self):
#     return {
#       "id": self.id,
#       "user_id": self.user_id,
#       "follows_id": self.follows_id,
#       "created_at": self.created_at
#     }