# scraper/urls.py
from django.urls import path
from . import views

urlpatterns = [
    # URL for scraping data and storing it
    path('scrape/', views.scrape_data),
]
