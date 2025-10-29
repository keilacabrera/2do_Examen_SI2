import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../../providers/auth_provider.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final emailCtrl = TextEditingController();
  final passCtrl = TextEditingController();
  bool loading = false;
  String? error;

  @override
  Widget build(BuildContext context) {
    final auth = Provider.of<AuthProvider>(context);

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Ecommerce App', style: Theme.of(context).textTheme.headlineMedium),
            const SizedBox(height: 20),
            TextField(controller: emailCtrl, decoration: const InputDecoration(labelText: 'Email')),
            TextField(controller: passCtrl, obscureText: true, decoration: const InputDecoration(labelText: 'Contraseña')),
            const SizedBox(height: 20),
            if (error != null) Text(error!, style: const TextStyle(color: Colors.red)),
            ElevatedButton(
              onPressed: loading
                  ? null
                  : () async {
                      setState(() => loading = true);
                      bool success = await auth.login(emailCtrl.text, passCtrl.text);
                      setState(() => loading = false);
                      if (success) context.go('/home');
                      else setState(() => error = 'Credenciales inválidas');
                    },
              child: loading ? const CircularProgressIndicator() : const Text('Iniciar Sesión'),
            ),
            TextButton(onPressed: () => context.go('/register'), child: const Text('Crear cuenta')),
          ],
        ),
      ),
    );
  }
}
