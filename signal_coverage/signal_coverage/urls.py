from django.conf.urls import include, url
from django.contrib import admin

from catalogue import views

urlpatterns = [
    # Examples:
    # url(r'^$', 'signal_coverage.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', views.index, name='index'),
    url(r'', include('catalogue.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
