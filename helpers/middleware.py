import ujson

from django.http.multipartparser import MultiPartParser


class JsonBodyToPostMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if hasattr(request, 'POST') and not request.POST:
            try:
                request.POST = ujson.loads(request.body)
            except Exception:
                pass
        if request.method == 'PUT':
            try:
                body_tuple = MultiPartParser(request.META, request, request.upload_handlers).parse()
                request.PUT = body_tuple[0]
                request.FILES.update(body_tuple[1])
            except Exception:
                pass
        response = self.get_response(request)

        return response
