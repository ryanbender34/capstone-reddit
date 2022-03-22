from flask import Blueprint, jsonify
from app.models import Thread

search_routes = Blueprint("search", __name__)

@search_routes.route("/<string:query>")
def search_threads(query):
    search_results = Thread.query.filter(Thread.title.ilike(f'%{query}%')).all()
    return jsonify([thread.to_JSON() for thread in search_results])