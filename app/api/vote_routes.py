from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Vote

vote_routes = Blueprint('/votes', __name__)

@vote_routes.route('/', methods=["POST"])
@login_required
def add_vote():
    userVote = Vote(
        user_id = request.json["user_id"],
        thread_id = request.json["thread_id"],
        vote = request.json['vote'])

    db.session.add(userVote)
    db.session.commit()
    # todo - what does synchronize_session = "fetch" do? 
    return userVote.to_JSON()

@vote_routes.route('/', methods=["PUT"])
@login_required
def put_vote():
    existing_vote = db.session.query(Vote).filter(Vote.id == id)
    existing_vote.update({
            'user_id':request.json["user_id"],
            'thread_id':request.json["thread_id"],
            'vote':request.json['vote']
        }, synchronize_session="fetch")
    db.session.commit()
    updatedVote = Vote.query.get(existing_vote.id)
    if updatedVote:
        return updatedVote.to_JSON()
