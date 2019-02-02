from django.urls import path,include 
from .api import Register 
from knox import views as know_views 

urlpatterns=[
    path('api/auth',include('knox.urls')),
    path('api/auth/register',Register.as_view())
]