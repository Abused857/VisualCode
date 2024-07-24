from sqlalchemy import create_engine

DATABASE_URL = "mysql://root@localhost:3306/pecerapy"

engine = create_engine(DATABASE_URL)