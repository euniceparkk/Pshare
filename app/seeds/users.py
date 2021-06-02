from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        first_name="Demo",
        last_name="User",
        email="demo@.com",
        phone="1112223333",
        birthday="07151994",
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/demo.jpg",
        cover_img="https://pshare-app.s3.amazonaws.com/demo-cover.jpg",
        bio="Demo User tweets below",
        location="Houston, Texas"
    )

    eunice = User(
        first_name='Eunice',
        last_name="Park",
        email="eunice.com",
        phone="1234567890",
        birthday="04181998",
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/koda4.jpg",
        cover_img="https://pshare-app.s3.amazonaws.com/eunice-cover.jpg",
        bio="Hello and welcome Pshare community :)",
        location="Philadelphia, Pennsylvania"
    
    )
    db.session.add(demo)
    db.session.add(eunice)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
