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


# POST one bookmark
@bookmark_routes.route('/add', methods=["POST"])
@login_required
def add_bookmark():
  bookmark = Bookmark(**request.json)
  db.session.add(bookmark)
  db.session.commit()
  return bookmark.to_dict()


# DELETE one bookmark
@bookmark_routes.route('/<int:bookmark_id>', methods=["DELETE"])
@login_required
def remove_bookmark(bookmark_id):
  bookmark = Bookmark.query.get(bookmark_id)

  db.session.delete(bookmark)
  db.session.commit()
  return bookmark.to_dict()