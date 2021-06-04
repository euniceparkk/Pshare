from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired

class TweetForm(FlaskForm):
  content = StringField('content', validators=[DataRequired()])
  image = TextAreaField('image')