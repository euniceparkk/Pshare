from flask import Blueprint, jsonify, request
from app.models import db, Reply
from flask_login import login_required, current_user
from app.forms import ReplyForm

reply_routes = Blueprint('replies', __name__)


# GET all replies
@reply_routes.route('/get/<int:tweet_id>')
@login_required
def load_replies(tweet_id):
  replies = Reply.query.filter(Reply.tweet_id == tweet_id).all()
  return jsonify([reply.to_dict() for reply in replies])


# POST one reply
@reply_routes.route('/add', methods=["POST"])
@login_required
def add_reply():
  form = ReplyForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    reply = Reply(
      user_id=current_user.id,
      tweet_id=form.data['tweet_id'],
      content=form.data['content'],
    )
    db.session.add(reply)
    db.session.commit()
    return reply.to_dict()


# DELETE one reply
@reply_routes.route('/<int:reply_id>', methods=["DELETE"])
@login_required
def remove_reply(reply_id):
  reply = Reply.query.get(reply_id)

  db.session.delete(reply)
  db.session.commit()
  return reply.to_dict()