from django.urls import path
from myapp.views import MyLoginView

urlpatterns = [
    # Otras URLs pueden ir aquí
    path('login/', MyLoginView.as_view(), name='login'),  # URL para el formulario de login
]
