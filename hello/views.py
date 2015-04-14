from django.contrib import messages
from django.views.generic.base import TemplateView

# Create your views here.
class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        messages.info(self.request, 'This is \'hello.\', a javascript rdio player written in Django.')
        return context