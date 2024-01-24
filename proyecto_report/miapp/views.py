from django.http.response import JsonResponse
from django.shortcuts import render
from .models import srv

# Create your views here.

def index(request):
    return render(request, 'index.html')

def l_servis (request):
    servis=list (srv.objects.values())
    data = {'servis':servis}
    return JsonResponse(data)