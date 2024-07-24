from alembic import op
import sqlalchemy as sa

# Revisar las versiones
revision = 'd58379ba2679'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    # Comando para crear la tabla
    op.create_table(
        'db_languages',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=255), nullable=True),
        sa.Column('abbreviation', sa.String(length=10), nullable=True),
        sa.Column('flag', sa.String(length=255), nullable=True),
        sa.Column('order', sa.Integer(), nullable=True),
        sa.Column('created_at', sa.DateTime(), nullable=False, server_default=sa.text('CURRENT_TIMESTAMP')),
        sa.Column('updated_at', sa.DateTime(), nullable=False, server_default=sa.text('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')),
        sa.Column('deleted_at', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )

    # Insertar datos iniciales
    op.execute("""
        INSERT INTO db_languages (id, name, abbreviation, flag, `order`)
        VALUES (1, 'spanish', 'ES', 'spanish.gif', 100),
               (2, 'english', 'EN', 'english.gif', 99);
    """)

def downgrade():
    # Comando para eliminar la tabla
    op.drop_table('db_languages')
