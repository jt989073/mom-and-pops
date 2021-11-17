from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, Business
from app.forms.business_form import BusinessForm

business_routes = Blueprint('businesses', __name__)

@business_routes.route('', methods=['GET', 'POST'])
# @login_required
def businesses():
    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        business = Business(**request.json)
        db.session.add(business)
        db.session.commit()
    return {business.id: business.to_card_dict() for business in Business.query.all()}


@business_routes.route('/<int:id>', methods=['GET', 'PUT'])
def updateBusiness():
    form
