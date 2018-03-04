import ujson


class JsonBodyToPostMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if hasattr(request, 'POST') and not request.POST:
            try:
                request.POST = ujson.loads(request.body)
            except Exception:
                pass

        response = self.get_response(request)

        return response
