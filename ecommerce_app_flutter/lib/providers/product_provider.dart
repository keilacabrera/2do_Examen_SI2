import 'package:flutter/material.dart';
import '../models/product.dart';

class ProductProvider with ChangeNotifier {
  final List<Product> _products = [
    Product(name: 'Heladera Samsung', price: 3800, image: 'assets/images/fridge.png'),
    Product(name: 'Cocina Whirlpool', price: 2500, image: 'assets/images/stove.png'),
    Product(name: 'Licuadora Oster', price: 450, image: 'assets/images/blender.png'),
  ];

  List<Product> get products => _products;
}
