from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'category_name', 'created']


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.nombre', read_only=True)
    class Meta:
        model = Product
        fields = ['id', 
                  'product_name', 
                  'category',
                  'price',
                  'stock',
                  'description'
                  ]   

   