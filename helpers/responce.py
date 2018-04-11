from django.http import HttpResponse


class HttpJson(HttpResponse):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, content_type="application/json", **kwargs)
