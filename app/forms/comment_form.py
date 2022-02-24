from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired, Length

class CommentForm(FlaskForm):
    author_id= IntegerField('User ID', validators=[DataRequired()])
    thread_id= IntegerField('Thread ID', validators=[DataRequired()])
    content= TextAreaField('Content', validators=[Length(max=255, message="Please limit comment to 255 characters"), DataRequired(message='thread must contain content')])
