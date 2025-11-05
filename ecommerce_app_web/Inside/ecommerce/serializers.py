from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'category_name', 'created']


class ProductSerializer(serializers.ModelSerializer):
    # ID para crear/editar
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    # Nombre de la categoría para mostrar (solo lectura)
    category_name = serializers.CharField(source='category.category_name', read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'product_name',
            'category',        # ID para escribir
            'category_name',   # Nombre para leer
            'price',
            'stock',
            'image',
            'description',
            'is_available'
        ]  

   