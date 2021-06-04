from app.models import db, User, follows
import datetime

def seed_followers():

  demo = User.query.filter_by(username='demouserrr').first()
  eunice = User.query.filter_by(username='euniceparkkk').first()

  # from Follower model, 'follows' is a helper table
  # 'followed_users' and 'users_followers'
  # is the many-many association made from User model
  eunice.followed_users.append(demo)
  eunice.users_followers.append(demo)
  
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
