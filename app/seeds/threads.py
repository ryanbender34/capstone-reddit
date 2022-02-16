from app.models import db, Thread


# Adds a demo thread, you can add other threads here if you want
def seed_threads():
    athread = Thread(user_id=1, title="seed thread", description="blah", category_id=1, content="paragraph here")
    anotherthread = Thread(user_id=2, title="seed thread", description="blah", category_id=2, content="paragraph here")

    # Thread.__table__.create(db.session.bind)

    db.session.add(athread)
    db.session.add(anotherthread)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the threads table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_threads():
    db.session.execute('TRUNCATE threads RESTART IDENTITY CASCADE;')
    db.session.commit()