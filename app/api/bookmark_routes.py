from flask import Blueprint, jsonify, request
from app.models import db, Bookmark
from flask_login import login_required

bookmark_routes = Blueprint('bookmarks', __name__)


# GET all bookmarks
@bookmark_routes.route('/')
@login_required
def load_bookmarks():
  bookmarks = Bookmark.query.all()
  return jsonify([bookmark.to_dict() for bookmark in bookmarks])
