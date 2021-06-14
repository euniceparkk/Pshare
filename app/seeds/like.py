from app.models import db, Like
import datetime

def seed_likes():

  demo_like1 = Like(
      user_id=80, 
      tweet_id=1, 
      created_at=datetime.datetime.now(), 
  )

  demo_like2 = Like(
    user_id=80, 
    tweet_id=2, 
    created_at=datetime.datetime.now(), 
  )

  demo_like3 = Like(
    user_id=80, 
    tweet_id=3, 
    created_at=datetime.datetime.now(), 
  )

  db.session.add(demo_like1)
  db.session.add(demo_like2)
  db.session.add(demo_like3)
  db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_likes():
    db.session.execute('TRUNCATE Likes RESTART IDENTITY CASCADE;')
    db.session.commit()
