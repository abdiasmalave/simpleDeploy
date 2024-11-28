from django.urls import path
from .views import vistaLogin

urlpatterns = [
    path('', vistaLogin)
]