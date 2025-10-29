import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';

import 'providers/auth_provider.dart';
import 'providers/product_provider.dart';
import 'screens/auth/login_screen.dart';
import 'screens/auth/register_screen.dart';
import 'screens/home/home_screen.dart';

void main() {
  runApp(const EcommerceApp());
}

class EcommerceApp extends StatelessWidget {
  const EcommerceApp({super.key});

  @override
  Widget build(BuildContext context) {
    final GoRouter router = GoRouter(
      initialLocation: '/login',
      routes: [
        GoRoute(path: '/login', builder: (context, state) => const LoginScreen()),
        GoRoute(path: '/register', builder: (context, state) => const RegisterScreen()),
        GoRoute(path: '/home', builder: (context, state) => const HomeScreen()),
      ],
    );

    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => ProductProvider()),
      ],
      child: MaterialApp.router(
        title: 'Ecommerce App',
        theme: ThemeData(
          useMaterial3: true,
          colorSchemeSeed: Colors.blueAccent,
          brightness: Brightness.light,
        ),
        darkTheme: ThemeData.dark(),
        routerConfig: router,
      ),
    );
  }
}
