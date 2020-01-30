from django.db import models
from datetime import datetime,date
from django.utils import timezone

# App models here.
class Document(models.Model):
    PP = 'PP'
    DL = 'DL'
    OT = 'OT'
    DOC_TYPE = (
        (PP, 'Passport'),
        (DL, 'Driver license'),
        (OT, 'Others')
    )

    doc_type = models.CharField(choices=DOC_TYPE, max_length=100)
    doc_number = models.CharField(max_length=100)
    def __str__(self):
        return self.doc_type

class Item(models.Model):
    MAIL = 'MAIL'
    ELECTRONICS = 'ELECTRONICS'
    COSMETICS = 'COSMETICS'
    KITCHEN_AID = 'KITCHEN_AID'
    SHOES = 'SHOES'
    APPAREL = 'APPAREL'
    PACK_TYPE = (
        (MAIL,'Mail'),
        (ELECTRONICS, 'Electronic'),
        (COSMETICS, 'Cosmetic'),
        (KITCHEN_AID, 'Kitchen Aid'),
        (SHOES,'Shoe'),
        (APPAREL, 'Apparel')
    )

    item_type = models.CharField(choices=PACK_TYPE, max_length=254)
    def __str__(self):
        return self.item_type

class Status(models.Model):
    AT = 'AT'
    DP = 'DP'
    OTW = 'OTW'
    AD = 'AD'
    DV = 'DV'
    STAT_TYPE = (
        (AT, 'Active'),
        (DP, 'Dispatched'),
        (OTW, 'On The Way'),
        (AD, 'Arrived Destination'),
        (DV, 'Delivered')
        )
    status_type = models.CharField(choices=STAT_TYPE, max_length=254)
    
    def __str__(self):
        return self.status_type

class User(models.Model):
    first_name = models.CharField(max_length=254)
    last_name = models.CharField(max_length=254)
    picture = models.ImageField(blank=True,upload_to='user_images', default='')
    address = models.CharField(max_length=254)
    email = models.EmailField(max_length=254, default='')
    phone = models.CharField(max_length=100, blank=True, default='')
    document = models.ManyToManyField(Document)
    active = models.BooleanField(default=False)
    created_on = models.DateTimeField(default=datetime.today)

    def __str__(self):
        return self.first_name 

class Package(models.Model):
    name = models.CharField(max_length=254)
    package_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    package_type = models.ManyToManyField(Item)
    weight = models.CharField(max_length=254)
    created_on = models.DateTimeField(default=datetime.today)
    delivered_on = models.DateTimeField(default=datetime.today)
    reciever_name = models.CharField(max_length=254)
    reciever_address = models.CharField(max_length=254)
    package_status = models.ManyToManyField(Status)

    def __str__(self):
        return self.name

class Trip(models.Model):
    travelers = models.ForeignKey(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=254)
    destination = models.CharField(max_length=254)
    departure_date = models.DateTimeField(datetime)
    arrival_date  = models.DateTimeField(datetime)
    available_space = models.FloatField(default=0.00)
    delivery_cost = models.FloatField(default=0.00)
    number_of_packages = models.IntegerField()

    def __str__(self):
        return self.destination

