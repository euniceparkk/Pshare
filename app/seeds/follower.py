from app.models import db, Follower
import datetime

def seed_followers():

  demo_follower1 = Follower(
      user_id=1, 
      follows_id=2, 
      created_at=datetime.datetime.now(), 
  )

  demo_follower2 = Follower(
    user_id=2, 
    follows_id=1, 
    created_at=datetime.datetime.now(), 
  )

  db.session.add(demo_follower1)
  db.session.add(demo_follower2)
  db.session.commit()

  
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_followers():
    db.session.execute('TRUNCATE Followers RESTART IDENTITY CASCADE;')
    db.session.commit()
