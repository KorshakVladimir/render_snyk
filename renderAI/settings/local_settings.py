from .base_settings import BASE_DIR
DEBUG = True

STATICFILES_DIRS = [
    BASE_DIR + '/frontend/render-ai-app/dist/static/',
    BASE_DIR + '/frontend/render-ai-app/dist/',
]
