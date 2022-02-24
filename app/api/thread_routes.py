from datetime import datetime
from flask import Blueprint, jsonify, make_response, request
from flask_login import login_required
from app.models import db, Thread
from app.forms import ThreadForm

thread_routes = Blueprint("threads", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@thread_routes.route("/", methods=["GET"])
def get_threads():
    return jsonify([thread.to_JSON() for thread in Thread.query.all()])


@thread_routes.route('/', methods=["POST"])
@login_required
def post_thread():
    form = ThreadForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        thread = Thread(
            user_id=request.json["user_id"],
            title=request.json["title"],
            description=request.json["description"],
            category_id=request.json["category_id"],
            views=0,
            likes=0,
            content=request.json["content"],
            created_at=datetime.now(),
            updated_at=datetime.now())
        db.session.add(thread)
        db.session.commit()
        return thread.to_JSON()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@thread_routes.route('/', methods=["PUT"])
@login_required
def put_thread():
    id = request.json["id"]
    db.session.query(Thread).filter(Thread.id == id).update({
        "title":request.json["title"],
        "description":request.json["description"],
        "content":request.json["content"],
        "updated_at":datetime.now()
    }, synchronize_session="fetch")
    db.session.commit()
    thread = Thread.query.get(id)
    if thread:
        return thread.to_JSON()
    else:
        return make_response({"errors": ["Error during edit"]})

@thread_routes.route('/', methods=["DELETE"])
@login_required
def delete_thread():
    id = request.json["id"]
    thread = Thread.query.get(id)
    if thread:
        db.session.delete(thread)
        # todo - delete all comments associated with a thread here
        db.session.commit()
        return {'errors': False}
    else:
        return make_response({"errors": ["there was an error deleting thread"]})