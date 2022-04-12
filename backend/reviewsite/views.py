from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RatingSerializer 
from .models import Rating 


class RatingView(viewsets.ModelViewSet):
  serializer_class = RatingSerializer
  queryset = Rating.objects.all()