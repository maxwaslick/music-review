from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RatingSerializer 
from .models import Rating 


class RatingView(viewsets.ModelViewSet):
  serializer_class = RatingSerializer
  queryset = Rating.objects.all()

class ArtistView(viewsets.ModelViewSet):
  serializer_class = ArtistSerializer
  queryset = Artist.objects.all()

class SongView(viewsets.ModelViewSet):
  serializer_class = SongSerializer
  queryset = Song.objects.all()

class UserView(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()