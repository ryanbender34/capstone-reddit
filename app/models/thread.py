from .db import db
from datetime import datetime


class Thread(db.Model):
    __tablename__ = "threads"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey( "categories.id"), nullable=False)
    views = db.Column(db.Integer, nullable=False, default=0)
    likes = db.Column(db.Integer, nullable=False, default=0)
    content= db.Column(db.Text)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship("User", backref="thread")
    category = db.relationship("Category", back_populates="thread")
    comments = db.relationship("Comment", back_populates="thread", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "description": self.description,
            "category_id": self.category_id,
            "views": self.views,
            "likes": self.likes,
            "content": self.content,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }

    def to_JSON(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "description": self.description,
            "category_id": self.category_id,
            "views": self.views,
            "likes": self.likes,
            "content": self.content,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }