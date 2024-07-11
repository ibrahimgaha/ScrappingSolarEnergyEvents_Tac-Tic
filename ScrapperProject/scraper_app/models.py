# scraper/models.py
from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    date = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField(max_length=200)

    def __str__(self):
        return self.title
