from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.home, name='home'),
    path('ratel', views.ratel, name='ratel'),
    path('quiz', views.quiz, name='quiz'),
    path('fieldcraft', views.fieldcraft, name='fieldcraft'),
    path('navigation', views.navigation, name='navigation'),
]