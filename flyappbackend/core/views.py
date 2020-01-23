from django.shortcuts import render, Http404
from .models import User, Trip, Package, Document
from .serializers import (
    UserSerializer, 
    TripSerializer, 
    PackageSerializer
)
from rest_framework import viewsets
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        active_users = User.objects.filter(active=False)
        return active_users

    def list(self,request, *args,**kwargs):
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        data = request.data
        user = User.objects.create(first_name=data['firstname'],
            last_name=data['lastname'],
            picture=data['picture'],
            address=data['address'],
            email=data['email'],
            phone=data['phone'],
        )
        document = Document.objects.get(id=data['document'])
        user.document.add(document)
        user.save()

        serializer = UserSerializer(user)
        return Response(serializer.data)

    
    def retrieve(self, request, *args, **kwargs):
        return Response('Not Allowed')

class TripViewSet(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

class PackageViewSet(viewsets.ModelViewSet):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer