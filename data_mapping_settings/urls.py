from django.urls import path

from data_mapping_settings import views

urlpatterns = [
    path('map_data_settings/<int:pk>/', views.DataMappingDetailSettings.as_view()),
    path('map_data_settings/', views.DataMappingSettings.as_view()),


]
