from app.models import db, Category


# Adds a demo category, you can add other categories here if you want
def seed_categories():
    basketball = Category(name="basketball", description="basketball prospect discussions", image="https://thumbs.dreamstime.com/z/silhouette-basketball-ball-basketball-sport-logo-template-ve-vector-based-basketball-logo-can-be-scale-to-any-size-108584228.jpg")
    football = Category(name="football", description="NFL prospect discussion", image="https://images-platform.99static.com/OGsM2KDoBSwwqgu1gsEUZ0p3YIo=/204x204:1836x1836/500x500/top/smart/99designs-contests-attachments/110/110933/attachment_110933316")
    baseball = Category(name="baseball", description="MLB prospect discussion", image="https://thecutestblogontheblock.com/wp-content/uploads/2012/06/baseball-close-up-fre-facebook-timeline-cover-for-guys.jpg")

    # Category.__table__.create(db.session.bind)

    db.session.add(basketball)
    db.session.add(football)
    db.session.add(baseball)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
