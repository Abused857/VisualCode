from sqlalchemy import *
from sqlalchemy.sql import func
from app.models import Base, session

class Gende(Base):
    __tablename__ = 'db_genders'
    
    id = Column(Integer,primary_key=True)
    
    created_at = Column(DateTime, default=func.now(), nullable=False)
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
    deleted_at = Column(DateTime, nullable=True)
    
    def soft_delete(self):
        """ Marca el registro como eliminado."""
        self.deleted_at = func.now()
        session.commit()

    def restore(self):
        """Restaura el registro eliminado"""
        self.deleted_at= None

    @classmethod
    def query_active(cls):
        """Retorna solo los registros que no han sido eliminados"""
        return session.query(cls).filter(cls.deleted_at.is_(None))    