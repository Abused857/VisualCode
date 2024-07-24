from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from app.models import Base, session

class Language(Base):
    __tablename__ = 'db_languages'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=True)
    abbreviation = Column(String(10), nullable=True)
    flag = Column(String(255), nullable=True)
    order = Column(Integer, nullable=True)
    created_at = Column(DateTime, default=func.now(), nullable=False)
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
    deleted_at = Column(DateTime, nullable=True)  # Columna para Soft Delete

    def soft_delete(self):
        """Marca el registro como eliminado."""
        self.deleted_at = func.now()
        session.commit()

    def restore(self):
        """Restaura el registro eliminado."""
        self.deleted_at = None
        session.commit()

    @classmethod
    def query_active(cls):
        """Retorna solo los registros que no han sido eliminados."""
        return session.query(cls).filter(cls.deleted_at.is_(None))
