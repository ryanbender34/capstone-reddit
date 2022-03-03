from flask import Blueprint, jsonify, make_response, request
from flask_login import login_required
from app.models import db, Vote

vote_routes = Blueprint('/votes', __name__)

@vote_routes.route('/', methods=["POST"])
@login_required
def add_vote():
    userVote = Vote(
        user_id=request.json["user_id"],
        thread_id=request.json["thread_id"],
        value=request.json["value"])

    db.session.add(userVote)
    db.session.commit()
    # todo - what does synchronize_session = "fetch" do? 
    return userVote.to_JSON()

@vote_routes.route('/', methods=["PUT"])
@login_required
def put_vote():
    u_id = request.json["user_id"]
    t_id = request.json["thread_id"]
    vote_id = request.json["id"]
    updated_val = request.json["value"]
    # todo - filter by voteId
    db.session.query(Vote).filter(Vote.user_id == u_id, Vote.thread_id == t_id).update({
        "user_id": u_id,
        "thread_id": t_id,
        "value": updated_val
    }, synchronize_session="fetch")
    db.session.commit()
    vote = Vote.query.get(vote_id)
    if vote:
        return vote.to_JSON()
    else: 
        return make_response({"errors": ["Edit on non-existent vote"]})
