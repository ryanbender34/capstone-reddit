from datetime import datetime
from flask import Blueprint, jsonify, make_response, request
from flask_login import login_required
from app.models import db, Comment, User
from app.forms import CommentForm

comment_routes = Blueprint('comments', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@comment_routes.route("/<int:thread_id>", methods=["GET"])
def get_comments(thread_id):
    comments = [comment for comment in Comment.query.filter(
        Comment.thread_id == thread_id).all()]

    results = db.session.query(Comment, User).select_from(Comment).join(User).all()

    for comment in comments:
        for c, u in results:
            if (u.id == comment.author_id):
                comment.username = u.username

    comments = [comment.to_JSON() for comment in comments]
    
        
    return jsonify(comments)


@comment_routes.route("/", methods=["POST"])
@login_required
def post_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(
            author_id=request.json["author_id"],
            thread_id=request.json["thread_id"],
            reply=request.json["reply"],
            content=request.json["content"],
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow())

        db.session.add(comment)
        db.session.commit()

        result = db.session.query(Comment, User).select_from(Comment).join(User).filter(Comment.id == comment.id).all()

        comment.username = result[0][1].username

        return comment.to_JSON()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@comment_routes.route('/', methods=["PUT"])
@login_required
def put_comment():
    id = request.json["id"]
    db.session.query(Comment).filter(Comment.id == id).update({
        "author_id": request.json["author_id"],
        "thread_id": request.json["thread_id"],
        "reply": request.json["reply"],
        "content": request.json["content"],
        "vote": request.json["vote"],
        "updated_at": datetime.utcnow()
    }, synchronize_session="fetch")
    db.session.commit()
    comment = Comment.query.get(id)
    result = db.session.query(Comment, User).select_from(Comment).join(User).filter(Comment.id == id).all()
    comment.username = result[0][1].username
    if comment:
        return comment.to_JSON()
    else:
        return make_response({"errors": ["Edit on non-existent comment"]})


@comment_routes.route('/', methods=["DELETE"])
@login_required
def delete_comment():
    comment_id = request.json["id"]
    comment = Comment.query.get(comment_id)
    if comment:
        db.session.query(Comment).filter(Comment.id == comment_id).delete(
            synchronize_session="fetch")
        db.session.commit()
        return {"errors": False}
    else:
        return make_response({"errors": ["Delete on non-existent comment"]})
