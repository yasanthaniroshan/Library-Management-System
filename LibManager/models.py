from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    copies = models.IntegerField(default=1)

    def __str__(self):
        return self.title