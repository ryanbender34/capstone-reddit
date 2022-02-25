from flask import Blueprint, jsonify, request
from app.models import db, Category, Thread

category_routes = Blueprint("categories", __name__)

@category_routes.route("/", methods=["GET"])
def get_categories():
    categories = [category.to_dict() for category in Category.query.all()]
    return jsonify(categories)

@category_routes.route("/<int:category_id>", methods=["GET"])
def get_category(category_id):
    category = [x.to_JSON() for x in Category.query.filter(Category.id == category_id)]

    c_threads = [thread.to_JSON() for thread in Thread.query.filter(category_id == Thread.category_id)]
   
    category[0]['threads'] = c_threads

    return category[0]



