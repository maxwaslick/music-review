from rest_framework import serializers
from .models import User, Artist, Song, Rating

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('Username', 'Password')

class ArtistSerializer(serializers.ModelSerializer):
  class Meta:
    model = Artist
    fields = ('Artist_name', 'Artist_genre', 'Artist_label', 'Artist_grammys')

class SongSerializer(serializers.ModelSerializer):
  class Meta:
    model = Song
    fields = ('song_name', 'artist_name')

class RatingSerializer(serializers.ModelSerializer):
  class Meta:
    model = Rating
    fields = ('Rating_id', 'Rating_username', 'Rating_song', 'Rating_rating')





