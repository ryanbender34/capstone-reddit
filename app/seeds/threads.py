from app.models import db, Thread


# Adds a demo thread, you can add other threads here if you want
def seed_threads():
    a = Thread(user_id=1, title="Which stat is the most correlated to nba upside?", description="Examining which standardized statistics are helpful overall to determine future potential", category_id=1, content="This is a paragraph, where we are doing things to display on paper. I would like it ot be long in order to display on the page and start to figure out what the end result of a threa d page will olook laike evenetually .")
    b = Thread(user_id=2, title="Dynasty fantasy football mock draft", description="blah", category_id=2, content="paragraph here")
    c = Thread(user_id=1, title="Which stat is the most correlated to nba upside?", description="Examining which standardized statistics are helpful overall to determine future potential", category_id=1, content="This is a paragraph, where we are doing things to display on paper. I would like it ot be long in order to display on the page and start to figure out what the end result of a threa d page will olook laike evenetually .")


    # Thread.__table__.create(db.session.bind)

    db.session.add(a)
    db.session.add(b)
    db.session.add(c)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the threads table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_threads():
    db.session.execute('TRUNCATE threads RESTART IDENTITY CASCADE;')
    db.session.commit()