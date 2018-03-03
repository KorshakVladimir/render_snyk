from django.urls import path

from . import views

urlpatterns = [
    path('create/', views.CompanyView.as_view()),
    path('company_names/', views.CompanyNamesView.as_view()),
]
