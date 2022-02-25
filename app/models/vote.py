from sqlalchemy import ForeignKey
from .db import db


class Vote(db.Model):
    __tablename__ = 'votes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    thread_id = db.Column(db.Integer, db.ForeignKey("threads.id"), nullable=False)
    vote = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", backref="vote")
    thread = db.relationship("Thread", backref="vote")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'thread_id': self.thread_id,
            'vote': self.vote
        }
    
    def to_JSON(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'threadId': self.thread_id,
            'vote': self.vote
        }
