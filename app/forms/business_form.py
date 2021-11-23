from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Business



def business_exists(form, field):
    # Checking if username is already in use
    name = field.data
    user = Business.query.filter(Business.name == name).first()
    if user:
        raise ValidationError('Name is already in use.')


class BusinessForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired()])
    street = StringField('street', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    image = StringField('image', validators=[DataRequired()])
