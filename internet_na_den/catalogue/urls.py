from django.conf.urls import url

from catalogue import views

urlpatterns = [
    url(r'^post/new/$', views.post_new, name='post_new'),
]
