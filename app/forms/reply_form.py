from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ReplyForm(FlaskForm):
  tweet_id = IntegerField('tweet_id', validators=[DataRequired()])
  content = StringField('content', validators=[DataRequired()])