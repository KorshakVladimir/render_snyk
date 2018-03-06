from django.urls import path

from . import views

urlpatterns = [
    path('main_data/', views.CreateDataSet.as_view()),
    path('all_data_sets/', views.MLDataView.as_view()),
    path('data_set/<int:pk>/', views.MLDataSetView.as_view()),
    # path('row_to_csv/<int:cust_id>/', views.MLDataCSVView.as_view()),
]
