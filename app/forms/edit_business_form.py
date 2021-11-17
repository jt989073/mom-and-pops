from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Business


class EditBusinessForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired()])
    street = StringField('street', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    image = StringField('image', validators=[DataRequired()])
