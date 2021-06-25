from app.models import db, Bookmark
import datetime

def seed_bookmarks():

  demo_bookmark1 = Bookmark(
      user_id=1, 
      tweet_id=1, 
      created_at=datetime.datetime.now(), 
  )

  demo_bookmark2 = Bookmark(
    user_id=1, 
    tweet_id=2, 
    created_at=datetime.datetime.now(), 
  )

  demo_bookmark3 = Bookmark(
    user_id=1, 
    tweet_id=3, 
    created_at=datetime.datetime.now(), 
  )

  db.session.add(demo_bookmark1)
  db.session.add(demo_bookmark2)
  db.session.add(demo_bookmark3)
  db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_bookmarks():
    db.session.execute('TRUNCATE bookmarks RESTART IDENTITY CASCADE;')
    db.session.commit()
