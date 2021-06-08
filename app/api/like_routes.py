from flask import Blueprint, jsonify, request
from app.models import db, Like
from flask_login import login_required

like_routes = Blueprint('likes', __name__)


# GET all likes
@like_routes.route('/')
@login_required
def load_likes():
  likes = Like.query.all()
  return jsonify([like.to_dict() for like in likes])