from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length
from random import choices

class ThreadForm(FlaskForm):
    user_id= IntegerField('User ID')
    title= StringField('Title', validators=[Length(max=50, message="Please limit title to 50 characters")])
    description= StringField('Description', validators=[Length(max=255, message="Please limit description to 255 characters")])
    category_id= SelectField("Category", choices=[(1, 'basketball'), (2, 'football')])
    content= TextAreaField('Content', validators=[DataRequired(message='thread must contain content')])
