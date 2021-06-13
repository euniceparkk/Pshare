from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)

# GET all users
@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


# GET one user
@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# patch = update portion. put = update entire record
# UPDATE user info
@user_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_user(id):
    user = User.query.get(id)

    user.first_name = request.json['first_name']
    user.last_name = request.json['last_name']
    user.bio = request.json['bio']
    user.location = request.json['location']

    db.session.add(user)
    db.session.commit()
    return user.to_dict()