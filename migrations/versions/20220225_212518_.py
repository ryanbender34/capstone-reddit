"""empty message

Revision ID: 6ff4757584f4
Revises: b5117afe7530
Create Date: 2022-02-25 21:25:18.405751

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6ff4757584f4'
down_revision = 'b5117afe7530'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('votes', sa.Column('value', sa.Integer(), nullable=False))
    op.drop_column('votes', 'vote')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('votes', sa.Column('vote', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_column('votes', 'value')
    # ### end Alembic commands ###
