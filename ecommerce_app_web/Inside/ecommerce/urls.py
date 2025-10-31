from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'categorias', CategoriaViewSet)
router.register(r'productos', ProductViewSet)

urlpatterns = [
    path('admin-login/', admin_login),
    path('', include(router.urls)),
]
