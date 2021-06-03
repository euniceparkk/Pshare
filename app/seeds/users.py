from werkzeug.security import generate_password_hash
from app.models import db, User
from faker import Faker
fake = Faker()
import datetime

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        first_name="Demo",
        last_name="User",
        username="demouserrr",
        email="demo@user.io",
        phone="1112223333",
        birthday="07151994",
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/demo.jpg",
        cover_img="https://pshare-app.s3.amazonaws.com/demo-cover.jpg",
        bio="Demo User tweets below",
        location="Houston",
        created_at=datetime.datetime.now()
    )

    eunice = User(
        first_name='Eunice',
        last_name="Park",
        username="euniceparkkk",
        email="eunice@gmail.com",
        phone="1234567890",
        birthday="04181998",
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/koda4.jpg",
        cover_img="https://pshare-app.s3.amazonaws.com/eunice-cover.jpg",
        bio="Hello and welcome Pshare community :)",
        location="Philadelphia",
        created_at=datetime.datetime.now()
    )

    db.session.add(demo)
    db.session.add(eunice)
    db.session.commit()

    for i in range(20):
        fake_user = User(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            username=fake.user_name(),
            email=fake.free_email(),
            phone=fake.ean(length=8, prefixes=('10', '11', '12', '13', '14', '15', '16', '17', '18', '19')),
            birthday=fake.date_of_birth(),
            password="password",
            profile_img=fake.image_url(),
            cover_img=fake.image_url(),
            bio=fake.sentence(nb_words=9),
            location=fake.city(),
            created_at=datetime.datetime.now()
        )

        db.session.add(fake_user)
        db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
