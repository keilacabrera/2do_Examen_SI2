import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/product_provider.dart';
import '../../providers/auth_provider.dart';
import 'package:go_router/go_router.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final products = Provider.of<ProductProvider>(context).products;
    final auth = Provider.of<AuthProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Productos Disponibles'),
        actions: [
          IconButton(
            onPressed: () {
              auth.logout();
              context.go('/login');
            },
            icon: const Icon(Icons.logout),
          )
        ],
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(10),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 0.8,
          crossAxisSpacing: 10,
          mainAxisSpacing: 10,
        ),
        itemCount: products.length,
        itemBuilder: (context, index) {
          final product = products[index];
          return Card(
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
            elevation: 3,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Expanded(child: Icon(Icons.kitchen, size: 70, color: Colors.blueAccent)),
                Text(product.name, style: const TextStyle(fontWeight: FontWeight.bold)),
                Text('Bs ${product.price.toStringAsFixed(2)}'),
                const SizedBox(height: 8),
              ],
            ),
          );
        },
      ),
    );
  }
}
