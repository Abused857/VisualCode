from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.models.language import Language
from app.models import Base

# Configuración de la base de datos
DATABASE_URL = "mysql://root@localhost/pecerapy"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def seed_languages():
    session = SessionLocal()
    try:
        # Crear los datos a insertar
        new_language = Language(
            id=3,  # Asegúrate de que el ID no esté en uso
            name="french",
            abbreviation="FR",
            flag="french.gif",
            order=98
        )

        # Añadir el registro a la base de datos
        session.add(new_language)
        session.commit()
        print("Inserted French language successfully.")
    
    except Exception as e:
        print(f"An error occurred: {e}")
        session.rollback()
    
    finally:
        session.close()

if __name__ == "__main__":
    seed_languages()
