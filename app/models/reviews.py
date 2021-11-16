from .db import db
import datetime


class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id", ondelete="CASCADE"), nullable=False)
    rating= db.Column(db.Integer)
    business_id = db.Column(db.Integer, db.ForeignKey(
        "businesses.id", ondelete="CASCADE"), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.datetime.now())

    # user = db.relationship("User", back_populates="reviews")
    business = db.relationship("Business", back_populates="review")


    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'rating': self.rating,
            'user_id': self.user_id,
            'business_id': self.business_id,
        }
