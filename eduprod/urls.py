from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('ratel', views.ratel, name='ratel'),
    path('quiz', views.quiz, name='quiz'),
]