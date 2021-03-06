from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.forms.edit_business_form import EditBusinessForm
from app.models import db, Business
from app.forms.business_form import BusinessForm

business_routes = Blueprint('businesses', __name__)

@business_routes.route('/', methods=['GET', 'POST'])
@login_required
def businesses():
    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        business = Business(**request.json)
        db.session.add(business)
        db.session.commit()
        return business.to_card_dict()
    return {business.id: business.to_card_dict() for business in Business.query.all()}



@business_routes.route('/<int:id>')
def business(id):
    business = Business.query.get(id)
    return business.to_dict()


@business_routes.route('/<int:id>', methods=['PUT'])
@login_required
def updateBusiness(id):
    form = EditBusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        business = Business.query.get(id)
        business.name = form.data['name']
        business.street = form.data['street']
        business.city = form.data['city']
        business.state = form.data['state']
        business.image = form.data['image']
        db.session.commit()
        return business.to_dict()
    else:
        return form.errors


@business_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_business(id):
    business = Business.query.get(id)
    db.session.delete(business)
    db.session.commit()
    return business.to_dict()


@business_routes.route('/search', methods=["PUT"])
def search():
    data = request.json['input']
    businesses = Business.query.filter(Business.name.ilike(f'%{data}%')).all()
    return {'businesses': [business.to_dict() for business in businesses]}
