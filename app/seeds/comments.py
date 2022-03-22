from app.models import db, Comment

def seed_comments():
    a = Comment(author_id=3, thread_id=1, content='As of right now has to be Chet')
    b = Comment(author_id=3, thread_id=2, content='you are CRAZY for rating Drake London that high')
    c = Comment(author_id=2, thread_id=3, content='First!')
    d = Comment(author_id=2, thread_id=4, content='First!')
    e = Comment(author_id=2, thread_id=1, content='I would take Jabari Smith')
    f = Comment(author_id=3, thread_id=6, content='I disagree. Johnny Davis is a STUD')

    db.session.add(a)
    db.session.add(b)
    db.session.add(c)
    db.session.add(d)
    db.session.add(e)
    db.session.add(f)

    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()