from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import declarative_base,mapped_column
from flask_login import UserMixin
from sqlalchemy import Integer, String


Base = declarative_base()
db = SQLAlchemy(model_class=Base)


class User(UserMixin, db.Model):
    __tablename__ = 'users'

    id = mapped_column(Integer, primary_key=True, autoincrement=True)
    login = mapped_column(String(50), nullable=False)
    password_hash = mapped_column(String(50), nullable=False)


