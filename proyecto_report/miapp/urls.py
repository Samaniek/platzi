from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index.html'),
    path('l_servis/', views.l_servis, name='l_servis')
]