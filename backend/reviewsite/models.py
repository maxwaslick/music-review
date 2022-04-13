from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 

class User(models.Model):
    Username = models.CharField(max_length=30, primary_key=True)
    Password = models.CharField(max_length=30)
    def __str__(self):
        return self.Username

class Song(models.Model):
    song_name = models.CharField(max_length=100, primary_key = True)
    artist_name = models.CharField(max_length=100)
    def __str__(self):
        return self.song_name

class Rating(models.Model):
    Rating_id = models.AutoField(primary_key=True)
    Rating_username = models.ForeignKey(User, on_delete=models.CASCADE)
    Rating_song = models.ForeignKey(Song, on_delete=models.CASCADE)
    Rating_rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    def __str__(self):
        return "ID: " + str(self.Rating_id) + " Song Title: " + str(self.Rating_song) + " Rating: " + str(self.Rating_rating)

class Artist(models.Model):
    Artist_name = models.CharField(max_length=100, primary_key = True)
    def __str__(self):
        return " Artist_name: " + str(self.Artist_name) 