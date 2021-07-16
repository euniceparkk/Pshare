from app.models import db, Bookmark
import datetime

def seed_bookmarks():

  demo_bookmark1 = Bookmark(
    user_id=1, 
    tweet_id=2, 
    created_at=datetime.datetime.now(), 
  )
  demo_bookmark2 = Bookmark(
    user_id=1, 
    tweet_id=6,
    created_at=datetime.datetime.now(), 
  )
  demo_bookmark3 = Bookmark(
    user_id=1, 
    tweet_id=7,
    created_at=datetime.datetime.now(), 
  )
  demo_bookmark4 = Bookmark(
    user_id=1, 
    tweet_id=11, 
    created_at=datetime.datetime.now(), 
  )
  demo_bookmark5 = Bookmark(
    user_id=1, 
    tweet_id=13, 
    created_at=datetime.datetime.now(), 
  )


  koda_bookmark1 = Bookmark(
    user_id=2, 
    tweet_id=1, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark2 = Bookmark(
    user_id=2, 
    tweet_id=3, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark3 = Bookmark(
    user_id=2, 
    tweet_id=4, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark4 = Bookmark(
    user_id=2, 
    tweet_id=5, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark5 = Bookmark(
    user_id=2, 
    tweet_id=6, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark6 = Bookmark(
    user_id=2, 
    tweet_id=7, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark7 = Bookmark(
    user_id=2, 
    tweet_id=8, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark8 = Bookmark(
    user_id=2, 
    tweet_id=9, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark9 = Bookmark(
    user_id=2, 
    tweet_id=11, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark10 = Bookmark(
    user_id=2, 
    tweet_id=13, 
    created_at=datetime.datetime.now(), 
  )
  koda_bookmark11 = Bookmark(
    user_id=2, 
    tweet_id=14, 
    created_at=datetime.datetime.now(), 
  )


  netflix_bookmark1 = Bookmark(
    user_id=3, 
    tweet_id=1, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark2 = Bookmark(
    user_id=3, 
    tweet_id=2, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark3 = Bookmark(
    user_id=3, 
    tweet_id=4, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark4 = Bookmark(
    user_id=3, 
    tweet_id=5, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark5 = Bookmark(
    user_id=3, 
    tweet_id=6, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark6 = Bookmark(
    user_id=3, 
    tweet_id=7, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark7 = Bookmark(
    user_id=3, 
    tweet_id=8, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark8 = Bookmark(
    user_id=3, 
    tweet_id=9, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark9 = Bookmark(
    user_id=3, 
    tweet_id=10, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark10 = Bookmark(
    user_id=3, 
    tweet_id=11, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark11 = Bookmark(
    user_id=3, 
    tweet_id=12, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark12 = Bookmark(
    user_id=3, 
    tweet_id=13, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark13 = Bookmark(
    user_id=3, 
    tweet_id=14, 
    created_at=datetime.datetime.now(), 
  )
  netflix_bookmark14 = Bookmark(
    user_id=3, 
    tweet_id=15, 
    created_at=datetime.datetime.now(), 
  )


  google_bookmark1 = Bookmark(
    user_id=4,
    tweet_id=1,
    created_at=datetime.datetime.now(), 
  )
  google_bookmark2 = Bookmark(
    user_id=4,
    tweet_id=5,
    created_at=datetime.datetime.now(), 
  )
  google_bookmark3 = Bookmark(
    user_id=4,
    tweet_id=6,
    created_at=datetime.datetime.now(), 
  )
  google_bookmark4 = Bookmark(
    user_id=4,
    tweet_id=7,
    created_at=datetime.datetime.now(), 
  )
  google_bookmark5 = Bookmark(
    user_id=4,
    tweet_id=9,
    created_at=datetime.datetime.now(), 
  )
  google_bookmark6 = Bookmark(
    user_id=4,
    tweet_id=11,
    created_at=datetime.datetime.now(), 
  )
  google_bookmark7 = Bookmark(
    user_id=4,
    tweet_id=14,
    created_at=datetime.datetime.now(), 
  )
  google_bookmark8 = Bookmark(
    user_id=4,
    tweet_id=15,
    created_at=datetime.datetime.now(), 
  )


  apple_bookmark1 = Bookmark(
    user_id=5,
    tweet_id=1,
    created_at=datetime.datetime.now(), 
  )
  apple_bookmark2 = Bookmark(
    user_id=5,
    tweet_id=7,
    created_at=datetime.datetime.now(), 
  )
  apple_bookmark3 = Bookmark(
    user_id=5,
    tweet_id=9,
    created_at=datetime.datetime.now(), 
  )
  apple_bookmark4 = Bookmark(
    user_id=5,
    tweet_id=11,
    created_at=datetime.datetime.now(), 
  )
  apple_bookmark5 = Bookmark(
    user_id=5,
    tweet_id=14,
    created_at=datetime.datetime.now(), 
  )
  apple_bookmark6 = Bookmark(
    user_id=5,
    tweet_id=15,
    created_at=datetime.datetime.now(), 
  )


  disney_bookmark1 = Bookmark(
    user_id=6,
    tweet_id=1,
    created_at=datetime.datetime.now(), 
  )
  disney_bookmark2 = Bookmark(
    user_id=6,
    tweet_id=7,
    created_at=datetime.datetime.now(), 
  )
  disney_bookmark3 = Bookmark(
    user_id=6,
    tweet_id=9,
    created_at=datetime.datetime.now(), 
  )
  disney_bookmark4 = Bookmark(
    user_id=6,
    tweet_id=11,
    created_at=datetime.datetime.now(), 
  )
  disney_bookmark5 = Bookmark(
    user_id=6,
    tweet_id=14,
    created_at=datetime.datetime.now(), 
  )


  chipotle_bookmark1 = Bookmark(
    user_id=7,
    tweet_id=1,
    created_at=datetime.datetime.now(), 
  )
  chipotle_bookmark2 = Bookmark(
    user_id=7,
    tweet_id=11,
    created_at=datetime.datetime.now(), 
  )
  chipotle_bookmark3 = Bookmark(
    user_id=7,
    tweet_id=14,
    created_at=datetime.datetime.now(), 
  )

  
  starbucks_bookmark1 = Bookmark(
    user_id=8,
    tweet_id=1,
    created_at=datetime.datetime.now(), 
  )
  starbucks_bookmark2 = Bookmark(
    user_id=8,
    tweet_id=7,
    created_at=datetime.datetime.now(), 
  )
  starbucks_bookmark3 = Bookmark(
    user_id=8,
    tweet_id=9,
    created_at=datetime.datetime.now(), 
  )
  starbucks_bookmark4 = Bookmark(
    user_id=8,
    tweet_id=11,
    created_at=datetime.datetime.now(), 
  )
  starbucks_bookmark5 = Bookmark(
    user_id=8,
    tweet_id=14,
    created_at=datetime.datetime.now(), 
  )


  db.session.add(demo_bookmark1)
  db.session.add(demo_bookmark2)
  db.session.add(demo_bookmark3)
  db.session.add(demo_bookmark4)
  db.session.add(demo_bookmark5)


  db.session.add(koda_bookmark1)
  db.session.add(koda_bookmark2)
  db.session.add(koda_bookmark3)
  db.session.add(koda_bookmark4)
  db.session.add(koda_bookmark5)
  db.session.add(koda_bookmark6)
  db.session.add(koda_bookmark7)
  db.session.add(koda_bookmark8)
  db.session.add(koda_bookmark9)
  db.session.add(koda_bookmark10)
  db.session.add(koda_bookmark11)


  db.session.add(netflix_bookmark1)
  db.session.add(netflix_bookmark2)
  db.session.add(netflix_bookmark3)
  db.session.add(netflix_bookmark4)
  db.session.add(netflix_bookmark5)
  db.session.add(netflix_bookmark6)
  db.session.add(netflix_bookmark7)
  db.session.add(netflix_bookmark8)
  db.session.add(netflix_bookmark9)
  db.session.add(netflix_bookmark10)
  db.session.add(netflix_bookmark11)
  db.session.add(netflix_bookmark12)
  db.session.add(netflix_bookmark13)
  db.session.add(netflix_bookmark14)


  db.session.add(google_bookmark1)
  db.session.add(google_bookmark2)
  db.session.add(google_bookmark3)
  db.session.add(google_bookmark4)
  db.session.add(google_bookmark5)
  db.session.add(google_bookmark6)
  db.session.add(google_bookmark7)
  db.session.add(google_bookmark8)


  db.session.add(apple_bookmark1)
  db.session.add(apple_bookmark2)
  db.session.add(apple_bookmark3)
  db.session.add(apple_bookmark4)
  db.session.add(apple_bookmark5)
  db.session.add(apple_bookmark6)


  db.session.add(disney_bookmark1)
  db.session.add(disney_bookmark2)
  db.session.add(disney_bookmark3)
  db.session.add(disney_bookmark4)
  db.session.add(disney_bookmark5)


  db.session.add(chipotle_bookmark1)
  db.session.add(chipotle_bookmark2)
  db.session.add(chipotle_bookmark3)


  db.session.add(starbucks_bookmark1)
  db.session.add(starbucks_bookmark2)
  db.session.add(starbucks_bookmark3)
  db.session.add(starbucks_bookmark4)
  db.session.add(starbucks_bookmark5)


  db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_bookmarks():
    db.session.execute('TRUNCATE bookmarks RESTART IDENTITY CASCADE;')
    db.session.commit()
