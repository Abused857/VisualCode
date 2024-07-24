import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.models.language import Language
from app.models import Base

# Configura el motor y la sesión
DATABASE_URL = "mysql://root@localhost/pecerapy"  # Base de datos real

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope='function')
def db_session():
    """Configura la base de datos para las pruebas usando transacciones."""
    connection = engine.connect()
    transaction = connection.begin()
    session = SessionLocal(bind=connection)
    yield session
    session.close()
    transaction.rollback()  # Deshaz todos los cambios realizados durante la prueba
    connection.close()

def test_create_language(db_session):
    """Prueba la creación de un nuevo idioma."""
    new_language = Language(
        name="spanish",
        abbreviation="ES",
        flag="spanish.gif",
        order=100
    )
    db_session.add(new_language)
    db_session.commit()

    # Verifica que el registro existe en la base de datos
    result = db_session.query(Language).filter_by(name="spanish").first()
    assert result is not None
    assert result.abbreviation == "ES"
    assert result.flag == "spanish.gif"
    assert result.order == 100

def test_soft_delete_language(db_session):
    """Prueba la eliminación suave de un idioma."""
    new_language = Language(
        name="english",
        abbreviation="EN",
        flag="english.gif",
        order=99
    )
    db_session.add(new_language)
    db_session.commit()

    # Verifica que el registro existe antes de la eliminación
    result = db_session.query(Language).filter_by(name="english").first()
    assert result is not None

    # Realiza la eliminación suave
    result.soft_delete()  # Usar el resultado en lugar del objeto original
    db_session.commit()

    # Recarga el objeto desde la base de datos
    result = db_session.query(Language).filter_by(name="english").first()

    # Verifica que el registro está marcado como eliminado
    assert result is not None
    assert result.deleted_at is not None
