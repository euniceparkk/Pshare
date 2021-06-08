from flask.cli import AppGroup
from .users import seed_users, undo_users
from .tweet import seed_tweets, undo_tweets
from .bookmark import seed_bookmarks, undo_bookmarks
from .follower import seed_followers, undo_followers
from .like import seed_likes, undo_likes
from .reply import seed_replies, undo_replies

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    # seed_users()
    # seed_tweets()

    seed_followers()
    seed_bookmarks()
    seed_likes()
    seed_replies()
    

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_tweets()
    
    # undo_bookmarks()
    # undo_followers()
    # undo_likes()
    # undo_replies()
