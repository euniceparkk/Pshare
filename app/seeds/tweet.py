from app.models import db, Tweet
import datetime

def seed_tweets():

  tweet1 = Tweet(
    user_id=80, 
    content="true happiness comes from closing 100 chrome tabs after solving an obscure programming bug, not from someone else",
    created_at=datetime.datetime(2021, 5, 18),
  )
  
  tweet2 = Tweet(
    user_id=81, 
    content="when i was much younger. the human came with me to get my shots. they held my paw. and everything was alright. today. i’m riding along as they get theirs. i don’t think they will need to hold my paw. but i will be here just in case",
    created_at=datetime.datetime(2021, 5, 19),
  )

  tweet3 = Tweet(
    user_id=82, 
    content="The Netflix e-commerce store will sell limited-edition apparel, collectables and more",
    created_at=datetime.datetime(2021, 6, 1),
  )

  tweet4 = Tweet(
    user_id=83,
    content="Did you know the original name of Google was Backrub?",
    created_at=datetime.datetime(2021, 6, 2),
  )

  tweet5 = Tweet(
    user_id=84,
    content="Apple trees take 4-5 years to produce their first fruit. A standard size apple tree starts bearing fruit 8-10 years after it is planted. A dwarf tree starts bearing fruit in 3-5 years.",
    created_at=datetime.datetime(2021, 6, 5),
  )

  tweet6 = Tweet(
    user_id=85,
    content="Mickey was originally named Mortimer Mouse by Walt Disney. It was actually his wife, Lillian who suggest Mickey. She claimed Mortimer sounded too stuffy, and we have to admit that we agree! The “Mortimer Mouse Club” just doesn’t have the same ring to it.",
    created_at=datetime.datetime(2021, 6, 9),
  )

  tweet7 = Tweet(
    user_id=86,
    content="We have a secret menu.............",
    created_at=datetime.datetime(2021, 6, 11),
  )

  tweet8 = Tweet(
    user_id=87,
    content="how bout i spell YOUR name wrong, Stahrbux. hm? how bout i pronounce it wrong, too, huh? you like that? how's that feel, Stlerbecks?",
    created_at=datetime.datetime(2021, 6, 12),
  )

  tweet11 = Tweet(
    user_id=80, 
    content="Debugging is like an onion. There are multiple layers to it, and the more you peel them back, the more likely you're going to start crying at inappropriate times.",
    created_at=datetime.datetime(2021, 6, 12),
  )

  tweet12 = Tweet(
    user_id=2, 
    content="when ur human says 'who's a good boy' and you already know it's you",
    created_at=datetime.datetime(2021, 6, 13),
  )

  tweet13 = Tweet(
    user_id=1, 
    content="I tell computers to do things. Sometimes they listen.",
    created_at=datetime.datetime(2021, 6, 13),
  )

  tweet14 = Tweet(
    user_id=2, 
    content="anything is paw-sible when you're a dog :D",
    created_at=datetime.datetime(2021, 6, 13),
  )

  db.session.add(tweet1)
  db.session.add(tweet2)
  db.session.add(tweet3)
  db.session.add(tweet4)
  db.session.add(tweet5)
  db.session.add(tweet6)
  db.session.add(tweet7)
  db.session.add(tweet8)

  db.session.add(tweet11)
  db.session.add(tweet12)
  db.session.add(tweet13)
  db.session.add(tweet14)


  db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_tweets():
    db.session.execute('TRUNCATE Tweets RESTART IDENTITY CASCADE;')
    db.session.commit()
