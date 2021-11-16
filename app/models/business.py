from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin




class Business(db.Model, UserMixin):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    street = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    latitude = db.Column(db.String)
    longitude = db.Column(db.String)
    image = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'))


    user = db.relationship('User', back_populates="businesses", cascade="all")
    review = db.relationship(
        "Review", back_populates="business", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'street': self.street,
            'city': self.city,
            'state': self.state,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'image': self.image,
            'owner_id': self.owner.id,
            'review_ids': [review.id for review in self.review],
        }

    def to_card_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'street': self.street,
            'logo': self.logo,
            'user_id': self.user.id
        }
