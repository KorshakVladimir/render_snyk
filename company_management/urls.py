from django.urls import path

from . import views

urlpatterns = [
    path('company_names/', views.CompanyNamesView.as_view()),
    path('company/<int:pk>/', views.CompanyView.as_view()),
]
