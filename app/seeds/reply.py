from app.models import db, Reply
import datetime

def seed_replies():
  tweet1_google = Reply(
    user_id=4, 
    tweet_id=1, 
    content="Oh you're tellin' me!",
    created_at=datetime.datetime(2021, 5, 18), 
  )
  tweet2_google = Reply(
    user_id=4, 
    tweet_id=2, 
    content="That's right! Everyone get your vaccinations!",
    created_at=datetime.datetime(2021, 5, 19), 
  )
  tweet4_demo = Reply(
    user_id=1, 
    tweet_id=4, 
    content="Huh, Backrub?! Who would have thought!",
    created_at=datetime.datetime(2021, 6, 2), 
  )
  tweet7_google = Reply(
    user_id=4, 
    tweet_id=7, 
    content="Now I am curious...",
    created_at=datetime.datetime(2021, 6, 11), 
  )
  tweet7_demo = Reply(
    user_id=1, 
    tweet_id=7, 
    content="well, it's really just the Quesarito, but it'll change your life",
    created_at=datetime.datetime(2021, 6, 12), 
  )
  tweet7_koda = Reply(
    user_id=2, 
    tweet_id=7, 
    content="are any of the items pup-friendly? :P",
    created_at=datetime.datetime(2021, 6, 12), 
  )
  tweet8_demo = Reply(
    user_id=1, 
    tweet_id=8, 
    content="lol!! they wrote 'demolition' on my cup once",
    created_at=datetime.datetime(2021, 6, 12), 
  )
  tweet9_apple = Reply(
    user_id=5, 
    tweet_id=9, 
    content="Haha! This is too relatable...",
    created_at=datetime.datetime(2021, 6, 12), 
  )
  tweet11_starbucks = Reply(
    user_id=8, 
    tweet_id=11, 
    content="TRUTH.",
    created_at=datetime.datetime(2021, 6, 13), 
  )
  tweet11_google = Reply(
    user_id=4, 
    tweet_id=11, 
    content="Oh I've had my fair share.",
    created_at=datetime.datetime(2021, 6, 13), 
  )
  tweet11_apple = Reply(
    user_id=5, 
    tweet_id=11, 
    content="it's a love hate relationship",
    created_at=datetime.datetime(2021, 6, 14), 
  )
  tweet13_apple = Reply(
    user_id=5, 
    tweet_id=13, 
    content="How interesting, I'll have to pass this along!",
    created_at=datetime.datetime(2021, 7, 1), 
  )
  tweet14_apple = Reply(
    user_id=5, 
    tweet_id=14, 
    content="I have also tried this. 11/10.",
    created_at=datetime.datetime(2021, 7, 3), 
  )
  tweet14_starbucks = Reply(
    user_id=8, 
    tweet_id=14, 
    content="But have you seen the Starbucks Secret Menu?",
    created_at=datetime.datetime(2021, 7, 4), 
  )
  tweet15_demo = Reply(
    user_id=1, 
    tweet_id=15, 
    content="i can see why! this is very cute.",
    created_at=datetime.datetime(2021, 7, 6), 
  )
  tweet15_starbucks = Reply(
    user_id=8, 
    tweet_id=15, 
    content="Stop by Starbucks and treat yourself to a puppuccino! :)",
    created_at=datetime.datetime(2021, 7, 6), 
  )
  tweet15_netflix = Reply(
    user_id=3, 
    tweet_id=15, 
    content="^^^^ I would take advantage of that x)",
    created_at=datetime.datetime(2021, 7, 7), 
  )
  tweet15_disney = Reply(
    user_id=6, 
    tweet_id=15, 
    content="I concur x3 to the replies above...",
    created_at=datetime.datetime(2021, 7, 7), 
  )


  db.session.add(tweet1_google)
  db.session.add(tweet2_google)
  db.session.add(tweet4_demo)
  db.session.add(tweet7_google)
  db.session.add(tweet7_demo)
  db.session.add(tweet8_demo)
  db.session.add(tweet9_apple)
  db.session.add(tweet11_starbucks)
  db.session.add(tweet11_google)
  db.session.add(tweet11_apple)
  db.session.add(tweet13_apple)
  db.session.add(tweet14_apple)
  db.session.add(tweet14_starbucks)
  db.session.add(tweet15_demo)
  db.session.add(tweet15_starbucks)
  db.session.add(tweet15_netflix)
  db.session.add(tweet15_disney)


  db.session.commit()

  
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_replies():
    db.session.execute('TRUNCATE Replies RESTART IDENTITY CASCADE;')
    db.session.commit()
