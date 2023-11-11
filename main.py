from flask import Flask, render_template, request, redirect, url_for
from models import db, User


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///memory_game.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route('/', methods=['GET', 'POST'])
def user_create():
    if request.method == 'POST':
        login = request.form['login']
        password = request.form['password']
        newuser = User(login=login, password_hash=password)
        db.session.add(newuser)
        db.session.commit()
        print(login, password)
        return redirect('/show_users')

    return render_template('index.html')


@app.route('/show_users')
def show_users():
    users = db.session.query(User).all()
    return render_template('test.html', users=users)