from django.core import serializers
from django.shortcuts import render
from .models import Question
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    return render(request, 'eduprod/index.html')

@login_required
def ratel(request):
    return render(request, 'eduprod/ratel.html') 

@login_required
def quiz(request):
    questions = Question.objects.all()
    questions_json = serializers.serialize('json', questions)
    return render(request, 'eduprod/quiz.html', {'questions_json': questions_json})
 
@login_required
def home(request):
    return render(request, 'eduprod/home.html')

@login_required
def fieldcraft(request):
    return render(request, 'eduprod/fieldcraft.html')

@login_required
def navigation(request):
    return render(request, 'eduprod/navigation.html')




