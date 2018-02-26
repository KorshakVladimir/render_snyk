from django.http import HttpResponse


class HttpJson(HttpResponse):
    def __init__(self, *args, content_type="text/json", **kwargs):
        super().__init__(*args, **kwargs)
