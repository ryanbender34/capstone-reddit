from datetime import datetime
from flask import Blueprint, jsonify, make_response, request
from app.models import db, Thread

thread_routes = Blueprint("threads", __name__)

@thread_routes.route("/", methods=["GET"])
def get_threads():
    return jsonify([thread.to_JSON() for thread in Thread.query.all()])