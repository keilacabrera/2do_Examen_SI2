from django.contrib.auth import authenticate
from rest_framework import viewsets, filters
from rest_framework.decorators import api_view  
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from .models import *
from .serializers import *

# Create your views here.

@api_view(['POST'])
def admin_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(email=email, password=password)

    if user is not None and user.is_staff:
        return Response({'message': 'Inicio de sesión exitoso', "email":email}, status=200)
    else:
         return Response({'message': 'Credenciales incorrectas'}, status=401) 
    

# @api_view(['POST'])
# def add_categoria(request):
#     category_name = request.data.get('category_name')

#     Category.objects.create(category_name=category_name)
#     return Response({'message': 'Categoría creada exitosamente'}, status=201)

    # if not category_name:
    #     return Response({'message': 'El nombre de la categoría es obligatorio'}, status=400)

    # from .models import Category
    # category = Category.objects.create(category_name=category_name)
    # return Response({'message': 'Categoría creada exitosamente', 'category_id': category.id}, status=201)    


# @api_view(['GET'])
# def list_categories(request):
#     categories = Category.objects.all()
#     serializer = CategorySerializer(categories, many=True)
#     return Response(serializer.data, status=200)

class CategoriaPagination(PageNumberPagination):
    page_size = 5  # Número de elementos por página
    page_size_query_param = 'page_size'
    max_page_size = 100

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer
    # permission_classes = [IsAuthenticated]  # Ajusta según tu auth
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['category_name']
    ordering_fields = ['category_name']

class ProductPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 100

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-created')
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['product_name', 'description', 'category__name']
    ordering_fields = ['product_name','description', 'category__name']    




