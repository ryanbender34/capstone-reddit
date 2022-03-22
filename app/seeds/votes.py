from app.models import db, Vote

def seed_votes():
    a = Vote(user_id=4, thread_id=1, value=10)
    b = Vote(user_id=4, thread_id=2, value=3)
    c = Vote(user_id=4, thread_id=3, value=1)
    d = Vote(user_id=4, thread_id=4, value=7)
    e = Vote(user_id=4, thread_id=6, value=-4)
    f = Vote(user_id=1, thread_id=1, value=1)

    db.session.add(a)
    db.session.add(b)
    db.session.add(c)
    db.session.add(d)
    db.session.add(e)
    db.session.add(f)

    db.session.commit()

def undo_votes():
    db.session.execute('TRUNCATE votes RESTART IDENTITY CASCADE;')
    db.session.commit()