from .base_settings import *
from . import base_settings

base_settings.LOGGING["loggers"]['django']['handlers'] = ['console']
