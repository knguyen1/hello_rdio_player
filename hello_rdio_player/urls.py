from django.conf.urls import include, url
from django.contrib import admin
from hello.views import IndexView
from hello_rdio_player import  settings

urlpatterns = [
    # Examples:
    # url(r'^$', 'hello_rdio_player.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # statics and media
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve',{'document_root': settings.MEDIA_ROOT}),
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve',{'document_root': settings.STATIC_ROOT}),

    url(r'^admin/', include(admin.site.urls)),

    #ex: /index/
    url(r'^$', IndexView.as_view(), name='index'),

    #ex: /about/
    #url(r'^about/', )
]
