from app.models import db, Tweet
import datetime

def seed_tweets():

  demo_tweet1 = Tweet(
      user_id=1, 
      content="First tweet, hello world!",
      created_at=datetime.datetime.now(), 
  )
  
  demo_tweet2 = Tweet(
    user_id=1, 
    content="Second tweet, hello world!",
    created_at=datetime.datetime.now(), 
  )

  demo_tweet3 = Tweet(
    user_id=1, 
    content="Third tweet, hello world!",
    created_at=datetime.datetime.now(), 
  )

  db.session.add(demo_tweet1)
  db.session.add(demo_tweet2)
  db.session.add(demo_tweet3)

  db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_tweets():
    db.session.execute('TRUNCATE Tweets RESTART IDENTITY CASCADE;')
    db.session.commit()
