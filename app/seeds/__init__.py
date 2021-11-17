from flask.cli import AppGroup

from app.seeds.businesses import seed_businesses, undo_businesses
from app.seeds.reviews import seed_reviews, undo_reviews
from .users import seed_users, undo_users


seed_commands = AppGroup('seed')



@seed_commands.command('all')
def seed():
    seed_users()
    seed_businesses()
    seed_reviews()



@seed_commands.command('undo')
def undo():
    undo_users()
    undo_businesses()
    undo_reviews()
