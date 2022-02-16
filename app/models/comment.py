from .db import db
from datetime import datetime


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    thread_id = db.Column(db.Integer, db.ForeignKey( "threads.id"), nullable=False)
    reply = db.Column(db.Integer)
    content = db.Column(db.Text, nullable=False)
    vote = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    author = db.relationship("User", backref="comment")
    thread = db.relationship("Thread", back_populates="comments")

    def to_dict(self):
        return {
            "id": self.id,
            "author_id": self.author_id,
            "thread_id": self.thread_id,
            "reply": self.reply,
            "content": self.content,
            "vote": self.vote,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }

    def to_JSON(self):
        return {
            "id": self.id,
            "author_id": self.author_id,
            "thread_id": self.thread_id,
            "reply": self.reply,
            "content": self.content,
            "vote": self.vote,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
