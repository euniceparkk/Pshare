from app.models import db, Reply
import datetime

def seed_replies():

  demo_reply1 = Reply(
      user_id=1, 
      tweet_id=1, 
      content="Hello! My first reply",
      created_at=datetime.datetime.now(), 
  )

  demo_reply2 = Reply(
    user_id=1, 
    tweet_id=2, 
    content="Second reply",
    created_at=datetime.datetime.now(), 
  )

  demo_reply3 = Reply(
    user_id=1, 
    tweet_id=3, 
    content="Nice third works too!",
    created_at=datetime.datetime.now(), 
  )

  db.session.add(demo_reply1)
  db.session.add(demo_reply2)
  db.session.add(demo_reply3)

  db.session.commit()

  
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_replies():
    db.session.execute('TRUNCATE Replies RESTART IDENTITY CASCADE;')
    db.session.commit()
