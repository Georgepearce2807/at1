from django.core import serializers
from django.shortcuts import render
from .models import Question

def index(request):
    return render(request, 'eduprod/index.html')

def ratel(request):
    return render(request, 'eduprod/ratel.html') 

def quiz(request):
    questions = Question.objects.all()
    questions_json = serializers.serialize('json', questions)
    return render(request, 'eduprod/quiz.html', {'questions_json': questions_json}) 