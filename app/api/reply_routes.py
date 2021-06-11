from flask import Blueprint, jsonify, request
from app.models import db, Reply
from flask_login import login_required, current_user

reply_routes = Blueprint('replies', __name__)


# GET all comments
@reply_routes.route('/')
@login_required
def load_replies():
  replies = Reply.query.all()
  return jsonify([reply.to_dict() for reply in replies])