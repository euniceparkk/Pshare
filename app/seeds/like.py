from app.models import db, Like
import datetime

def seed_likes():

  demo_like1 = Like(
      user_id=1, 
      tweet_id=4, 
      created_at=datetime.datetime.now(), 
  )
  demo_like2 = Like(
    user_id=1, 
    tweet_id=5, 
    created_at=datetime.datetime.now(), 
  )
  demo_like3 = Like(
    user_id=1, 
    tweet_id=8, 
    created_at=datetime.datetime.now(), 
  )
  demo_like4 = Like(
    user_id=1, 
    tweet_id=15, 
    created_at=datetime.datetime.now(), 
  )


  koda_like1 = Like(
    user_id=2,
    tweet_id=1,
    created_at=datetime.datetime.now(), 
  )
  koda_like2 = Like(
    user_id=2,
    tweet_id=3,
    created_at=datetime.datetime.now(), 
  )
  koda_like3 = Like(
    user_id=2,
    tweet_id=4,
    created_at=datetime.datetime.now(), 
  )
  koda_like4 = Like(
    user_id=2,
    tweet_id=5,
    created_at=datetime.datetime.now(), 
  )
  koda_like5 = Like(
    user_id=2,
    tweet_id=6,
    created_at=datetime.datetime.now(), 
  )
  koda_like6 = Like(
    user_id=2,
    tweet_id=7,
    created_at=datetime.datetime.now(), 
  )
  koda_like7 = Like(
    user_id=2,
    tweet_id=8,
    created_at=datetime.datetime.now(), 
  )
  koda_like8 = Like(
    user_id=2,
    tweet_id=9,
    created_at=datetime.datetime.now(), 
  )
  koda_like9 = Like(
    user_id=2,
    tweet_id=11,
    created_at=datetime.datetime.now(), 
  )
  koda_like10 = Like(
    user_id=2,
    tweet_id=13,
    created_at=datetime.datetime.now(), 
  )
  koda_like11 = Like(
    user_id=2,
    tweet_id=14,
    created_at=datetime.datetime.now(), 
  )
  koda_like12 = Like(
    user_id=2,
    tweet_id=15,
    created_at=datetime.datetime.now(), 
  )


  netflix_like1 = Like(
    user_id=3,
    tweet_id=1,
    created_at=datetime.datetime.now(), 
  )
  netflix_like2 = Like(
    user_id=3,
    tweet_id=2,
    created_at=datetime.datetime.now(), 
  )
  netflix_like3 = Like(
    user_id=3,
    tweet_id=4,
    created_at=datetime.datetime.now(), 
  )
  netflix_like4 = Like(
    user_id=3,
    tweet_id=5,
    created_at=datetime.datetime.now(), 
  )
  netflix_like5 = Like(
    user_id=3,
    tweet_id=6,
    created_at=datetime.datetime.now(), 
  )
  netflix_like6 = Like(
    user_id=3,
    tweet_id=7,
    created_at=datetime.datetime.now(), 
  )
  netflix_like7 = Like(
    user_id=3,
    tweet_id=8,
    created_at=datetime.datetime.now(), 
  )
  netflix_like8 = Like(
    user_id=3,
    tweet_id=9,
    created_at=datetime.datetime.now(), 
  )
  netflix_like9 = Like(
    user_id=3,
    tweet_id=10,
    created_at=datetime.datetime.now(), 
  )
  netflix_like10 = Like(
    user_id=3,
    tweet_id=11,
    created_at=datetime.datetime.now(), 
  )
  netflix_like11 = Like(
    user_id=3,
    tweet_id=12,
    created_at=datetime.datetime.now(), 
  )
  netflix_like12 = Like(
    user_id=3,
    tweet_id=13,
    created_at=datetime.datetime.now(), 
  )
  netflix_like13 = Like(
    user_id=3,
    tweet_id=14,
    created_at=datetime.datetime.now(), 
  )
  netflix_like14 = Like(
    user_id=3,
    tweet_id=15,
    created_at=datetime.datetime.now(), 
  )


  google_like1 = Like(
    user_id=4,
    tweet_id=1,
    created_at=datetime.datetime.now(), 
  )
  google_like2 = Like(
    user_id=4,
    tweet_id=2,
    created_at=datetime.datetime.now(), 
  )
  google_like3 = Like(
    user_id=4,
    tweet_id=3,
    created_at=datetime.datetime.now(), 
  )
  google_like4 = Like(
    user_id=4,
    tweet_id=5,
    created_at=datetime.datetime.now(), 
  )
  google_like5 = Like(
    user_id=4,
    tweet_id=6,
    created_at=datetime.datetime.now(), 
  )
  google_like6 = Like(
    user_id=7,
    tweet_id=1,
    created_at=datetime.datetime.now(), 
  )
  google_like7 = Like(
    user_id=4,
    tweet_id=8,
    created_at=datetime.datetime.now(), 
  )
  google_like8 = Like(
    user_id=4,
    tweet_id=9,
    created_at=datetime.datetime.now(), 
  )
  google_like9 = Like(
    user_id=4,
    tweet_id=10,
    created_at=datetime.datetime.now(), 
  )
  google_like10 = Like(
    user_id=4,
    tweet_id=11,
    created_at=datetime.datetime.now(), 
  )
  google_like11 = Like(
    user_id=4,
    tweet_id=12,
    created_at=datetime.datetime.now(), 
  )
  google_like12 = Like(
    user_id=4,
    tweet_id=14,
    created_at=datetime.datetime.now(), 
  )
  google_like13 = Like(
    user_id=4,
    tweet_id=15,
    created_at=datetime.datetime.now(), 
  )

  db.session.add(demo_like1)
  db.session.add(demo_like2)
  db.session.add(demo_like3)
  db.session.add(demo_like4)


  db.session.add(koda_like1)
  db.session.add(koda_like2)
  db.session.add(koda_like3)
  db.session.add(koda_like4)
  db.session.add(koda_like5)
  db.session.add(koda_like6)
  db.session.add(koda_like7)
  db.session.add(koda_like8)
  db.session.add(koda_like9)
  db.session.add(koda_like10)
  db.session.add(koda_like11)
  db.session.add(koda_like12)


  db.session.add(netflix_like1)
  db.session.add(netflix_like2)
  db.session.add(netflix_like3)
  db.session.add(netflix_like4)
  db.session.add(netflix_like5)
  db.session.add(netflix_like6)
  db.session.add(netflix_like7)
  db.session.add(netflix_like8)
  db.session.add(netflix_like9)
  db.session.add(netflix_like10)
  db.session.add(netflix_like11)
  db.session.add(netflix_like12)
  db.session.add(netflix_like13)
  db.session.add(netflix_like14)


  db.session.add(google_like1)
  db.session.add(google_like2)
  db.session.add(google_like3)
  db.session.add(google_like4)
  db.session.add(google_like5)
  db.session.add(google_like6)
  db.session.add(google_like7)
  db.session.add(google_like8)
  db.session.add(google_like9)
  db.session.add(google_like10)
  db.session.add(google_like11)
  db.session.add(google_like12)
  db.session.add(google_like13)


  db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_likes():
    db.session.execute('TRUNCATE Likes RESTART IDENTITY CASCADE;')
    db.session.commit()
