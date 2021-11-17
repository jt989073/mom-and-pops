from flask import Blueprint, request, redirect
from flask_login import login_required, current_user
from app.forms.review_form import ReviewForm
from app.models import db, Review

from app.config import Config
from sqlalchemy import desc

review_routes = Blueprint("reviews", __name__)

@review_routes.route("")
# @login_required
def home():
    return {review.id: review.to_dict() for review in Review.query.all()}

@review_routes.route("/<int:id>")
# @login_required
def one_review(id):
    review = Review.query.get(id)
    return review.to_dict()


@review_routes.route("", methods=["POST"])
# @login_required
def review():
    form = ReviewForm()
    userid = current_user.get_id()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        data = form.data
        new_review = Review(**request.json)
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    else:
        return form.errors

@review_routes.route("/<int:id>", methods=["PATCH"])
# @login_required
def review_edit(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_review= Review.query.get(id)
        edit_review.review = form.data["review"]
        edit_review.rating = form.data["rating"]
        db.session.commit()
        return edit_review.to_dict()
    else:
        return form.errors


@review_routes.route('/<int:id>', methods=["DELETE"])
# @login_required
def review_delete(id):
    Review.query.filter(Review.id == id).delete()
    db.session.commit()
    return "True", 201
