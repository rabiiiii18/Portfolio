from django.contrib import admin
from django.urls import path
# from . import views
from .views import home
from django.conf import settings
from django.conf.urls.static import static
app_name="crud"

urlpatterns = [
    # path("",contact,name="contact"),
    path("",home,name="home")
    
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)