from app.models import db, User, follows
import datetime

def seed_followers():

  demo = User.query.filter_by(username='demouserrr').first()
  koda = User.query.filter_by(username='kodabop').first()
  netflix = User.query.filter_by(username='Netflix').first()
  google = User.query.filter_by(username='Google').first()
  apple = User.query.filter_by(username='Apple').first()
  disney = User.query.filter_by(username='Disney').first()
  chipotle = User.query.filter_by(username='ChipotleTweets').first()
  starbucks = User.query.filter_by(username='Starbucks').first()


  # from Follower model, 'follows' is a helper table
  # 'followed_users' and 'users_followers'
  # is the many-many association made from User model
  koda.followed_users.append(demo)
  koda.users_followers.append(demo)

  demo.followed_users.append(netflix)
  demo.users_followers.append(netflix)

  demo.followed_users.append(google)
  demo.users_followers.append(google)

  demo.followed_users.append(apple)
  demo.users_followers.append(apple)

  demo.followed_users.append(disney)
  demo.users_followers.append(disney)

  demo.followed_users.append(chipotle)
  demo.users_followers.append(chipotle)
  
  demo.followed_users.append(starbucks)
  demo.users_followers.append(starbucks)
  
  # # association below is equivialent to association above.
  # # demo follows eunice, eunice follows demo
  # eunice.follows.append(demo)
  # demo.follows.append(eunice)

  
  # demo_follower1 = Follower(
  #     user_id=1, 
  #     follows_id=2, 
  #     created_at=datetime.datetime.now(), 
  # )

  # demo_follower2 = Follower(
  #   user_id=2, 
  #   follows_id=1, 
  #   created_at=datetime.datetime.now(), 
  # )

  # db.session.add(demo_follower1)
  # db.session.add(demo_follower2)
  db.session.commit()

  
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_followers():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE;')
    db.session.commit()
