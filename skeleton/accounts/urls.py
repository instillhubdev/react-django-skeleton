from django.urls import path,include 
from .api import Register,Login,User
from knox import views as know_views 

urlpatterns=[
    path('api/auth',include('knox.urls')),
    path('api/auth/register',Register.as_view()),
    path('api/auth/login',Login.as_view()),
    path('api/auth/user',User.as_view()),
    path('api/auth/logout',know_views.LogoutView.as_view(),name='knox_logout')
]