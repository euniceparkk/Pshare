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
        profile_img="https://pshare-app.s3.amazonaws.com/1demo.png",
        cover_img="https://pshare-app.s3.amazonaws.com/1demo-cover.png",
        bio="Tweet tweet tweet!",
        location="Houston, TX",
        created_at=datetime.datetime.now()
    )

    koda = User(
        first_name='Koda',
        last_name="Bop",
        username="kodabop",
        email="koda@gmail.com",
        phone="1234567890",
        birthday="04181998",
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/2koda.png",
        cover_img="https://pshare-app.s3.amazonaws.com/2koda-cover.jpg",
        bio="Hello hoomans and fellow doggos",
        location="Philadelphia, PA",
        created_at=datetime.datetime.now()
    )

    netflix = User(
        first_name='Netflix',
        last_name="",
        username="Netflix",
        email="netflix@gmail.com",
        phone=fake.ean(length=8, prefixes=('10', '11', '12', '13', '14', '15', '16', '17', '18', '19')),
        birthday=fake.date_of_birth(),
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/3netflix.png",
        cover_img="https://pshare-app.s3.amazonaws.com/3netflix-cover.jpg",
        bio="Stream Netflix!",
        location="California, USA",
        created_at=datetime.datetime.now()
    )

    google = User(
        first_name='Google',
        last_name="",
        username="Google",
        email="google@gmail.com",
        phone=fake.ean(length=8, prefixes=('10', '11', '12', '13', '14', '15', '16', '17', '18', '19')),
        birthday=fake.date_of_birth(),
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/4google.png",
        cover_img="https://pshare-app.s3.amazonaws.com/4google-cover.png",
        bio="Hey. It's Google.",
        location="Mountain View, CA",
        created_at=datetime.datetime.now()
    )

    apple = User(
        first_name='Apple',
        last_name="",
        username="Apple",
        email="apple@gmail.com",
        phone=fake.ean(length=8, prefixes=('10', '11', '12', '13', '14', '15', '16', '17', '18', '19')),
        birthday=fake.date_of_birth(),
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/5apple.png",
        cover_img="https://pshare-app.s3.amazonaws.com/5apple-cover.png",
        bio="An apple a day keeps the doctor away",
        location="Cupertino, CA",
        created_at=datetime.datetime.now()
    )

    disney = User(
        first_name='Disney',
        last_name="",
        username="Disney",
        email="disney@gmail.com",
        phone=fake.ean(length=8, prefixes=('10', '11', '12', '13', '14', '15', '16', '17', '18', '19')),
        birthday=fake.date_of_birth(),
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/6disney.png",
        cover_img="https://pshare-app.s3.amazonaws.com/6disney-cover.png",
        bio="Disney magic right at your fingertips! Sparkles!",
        location="Walt Disney World",
        created_at=datetime.datetime.now()
    )

    chipotle = User(
        first_name='Chipotle',
        last_name="",
        username="ChipotleTweets",
        email="chipotle@gmail.com",
        phone=fake.ean(length=8, prefixes=('10', '11', '12', '13', '14', '15', '16', '17', '18', '19')),
        birthday=fake.date_of_birth(),
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/7chiptole.png",
        cover_img="https://pshare-app.s3.amazonaws.com/7chipotle-cover.png",
        bio="Cultivate a better world.",
        location="",
        created_at=datetime.datetime.now()
    )

    starbucks = User(
        first_name='Starbucks',
        last_name="Co",
        username="Starbucks",
        email="starbucks@gmail.com",
        phone=fake.ean(length=8, prefixes=('10', '11', '12', '13', '14', '15', '16', '17', '18', '19')),
        birthday=fake.date_of_birth(),
        password="password",
        profile_img="https://pshare-app.s3.amazonaws.com/8starbucks.png",
        cover_img="https://pshare-app.s3.amazonaws.com/8starbucks-cover.png",
        bio="To inspire and nurture the human spirit — one person, one cup and one neighborhood at a time.",
        location="Seattle, WA",
        created_at=datetime.datetime.now()
    ) 

    db.session.add(demo)
    db.session.add(koda)
    db.session.add(netflix)
    db.session.add(google)
    db.session.add(apple)
    db.session.add(disney)
    db.session.add(chipotle)
    db.session.add(starbucks)

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
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
