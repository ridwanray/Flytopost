
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from ..core.views import UserViewSet, TripViewSet, PackageViewSet, DocumentViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'trip', TripViewSet)
router.register(r'package', PackageViewSet)



urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))
]