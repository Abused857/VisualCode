from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

# Configuración del motor de la base de datos
DATABASE_URL = "mysql://root@localhost/pecerapy"
engine = create_engine(DATABASE_URL)

# Crear una base para los modelos
Base = declarative_base()

# Crear una sesión
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Crear una sesión global para el uso de los modelos
session = SessionLocal()
