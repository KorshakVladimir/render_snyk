from django.urls import path

from . import views

urlpatterns = [
    path('all_data_sets/', views.MLDataView.as_view()),
    path('data_set/<int:pk>/', views.MLDataSetView.as_view()),
    path('data_set_row/<int:pk>/', views.MLDataSetRowView.as_view()),
    path('map_new_data_set/<int:pk>/', views.MLDataMapping.as_view()),
]
