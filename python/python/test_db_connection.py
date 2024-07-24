from sqlalchemy import create_engine, text

DATABASE_URL = "mysql://root@localhost/pecerapy"
engine = create_engine(DATABASE_URL)

with engine.connect() as connection:
    result = connection.execute(text("SELECT 1"))
    print(result.fetchone())
