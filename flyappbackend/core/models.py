# Create your models here.
from django.db import models
from django.db.models.deletion import CASCADE
from django.http import JsonResponse

class Address(models.Model):
    name = models.CharField(max_length=30)
    address = models.CharField(max_length=50)
    city = models.CharField(max_length=60, default="")
    state = models.CharField(max_length=30, default="")
    zipcode = models.CharField(max_length=5, default="")
    country = models.CharField(max_length=50)

class Rewards(models.Model):
    name  = models.CharField(max_length=30)
    award_type = models.CharField(max_length=30)

class User(models.Model):
    user_first_name = models.CharField(max_length=30)
    user_last_name = models.CharField(max_length=30)
    user_email = models.EmailField()
    user_phone = models.CharField(max_length=30)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=CASCADE)
    address = models.ManyToManyField(Address)
    user_bio = models.TextField(60)
    earnings = models.IntegerField(default= 0.00)
    rewards = models.ManyToManyField(Rewards)
    rating = models.IntegerField(default= 0)
    image = models.ImageField(default='favicon.jpg', upload_to='profile_pics')

class Package(models.Model):
    package_name = models.CharField(max_length= 255)
    package_owner = models.OneToOneField(User, on_delete= CASCADE)
    package_image = models.ImageField(default='item_avatar.jpg', upload_to = 'package_pics')
    package_location = models.ManyToManyField(Address, related_name='package_location')
    package_destination = models.ManyToManyField(Address, related_name='package_destination')
    package_worth = models.IntegerField(default= 0)

class PackageDetails(models.Model):
    package_weight = models.CharField(max_length= 30)
    package_brand = models.CharField(max_length=30)
    package_SKU = models.CharField(max_length=60)
    package_width = models.CharField(max_length= 255)
    package_width = models.CharField(max_length= 255)
    package_width = models.CharField(max_length= 255)
    package_color = models.CharField(max_length=30)