from django.contrib import admin
# Register your models here.
from .models import *

admin.site.register(Document)
admin.site.register(User)
admin.site.register(Trip)
admin.site.register(Package)
admin.site.register(Item)