from django.urls import path

from . import views

urlpatterns = [
    path('main_data/', views.LoadFileView.as_view()),
    path('list/', views.MLDataView.as_view()),
    path('<int:cust_id>/', views.MLDataRowView.as_view()),
    path('row_to_csv/<int:cust_id>/', views.MLDataCSVView.as_view()),
]
