from distutils.archive_util import make_archive
from flask import Blueprint, jsonify, make_response, request
from app.models import db, Category, Thread, Vote

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

# @category_routes.route("/", methods=["POST"])
# def add_cat_vote():
#     u_id = request.json["user_id"]
#     t_id = request.json["thread_id"]
#     the_vote = db.session.query(Vote).filter(Vote.user_id == u_id, Vote.thread_id == t_id).first()
#     if the_vote:
#         return {"errors": ["vote already exists"]}
#     else:
#         userVote = Vote(
#             user_id=u_id,
#             thread_id=t_id,
#             value=request.json["value"])

#         db.session.add(userVote)
#         db.session.commit()
#         # todo - what does synchronize_session = "fetch" do? 
#         return userVote.to_JSON()

# @category_routes.route("/", methods=["PUT"])
# def put_cat_vote():
#     u_id = request.json["user_id"]
#     t_id = request.json["thread_id"]
#     vote_id = request.json["id"]
#     updated_val = request.json["value"]
#     db.session.query(Vote).filter(Vote.user_id == u_id, Vote.thread_id == t_id).update({
#             "user_id": u_id,
#             "thread_id": t_id,
#             "value": updated_val
#         }, synchronize_session="fetch")
#     db.session.commit()
#     vote = Vote.query.get(vote_id)
#     if vote:
#         return vote.to_JSON()
#     else:
#         return make_response({"errors": ["Edit on non-existent vote"]})

