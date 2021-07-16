from app.models import db, Reply
import datetime

def seed_replies():
  demo_reply1 = Reply(
    user_id=1, 
    tweet_id=4, 
    content="huh Backrub????",
    created_at=datetime.datetime(2021, 6, 2), 
  )

  demo_reply2 = Reply(
    user_id=1, 
    tweet_id=7, 
    content="well, it's really just the Quesarito, but it'll change your life",
    created_at=datetime.datetime(2021, 6, 11), 
  )

  demo_reply3 = Reply(
    user_id=1, 
    tweet_id=8, 
    content="lol!! they wrote 'demolition' on my cup once",
    created_at=datetime.datetime(2021, 6, 12), 
  )

  demo_reply4 = Reply(
    user_id=1, 
    tweet_id=15, 
    content="i can see why! this is very cute.",
    created_at=datetime.datetime(2021, 7, 6), 
  )

  db.session.add(demo_reply1)
  db.session.add(demo_reply2)
  db.session.add(demo_reply3)
  db.session.add(demo_reply4)


  db.session.commit()

  
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_replies():
    db.session.execute('TRUNCATE Replies RESTART IDENTITY CASCADE;')
    db.session.commit()
