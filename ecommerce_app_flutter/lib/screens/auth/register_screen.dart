import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../../providers/auth_provider.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final emailCtrl = TextEditingController();
  final passCtrl = TextEditingController();
  bool loading = false;

  @override
  Widget build(BuildContext context) {
    final auth = Provider.of<AuthProvider>(context);

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Crear Cuenta', style: Theme.of(context).textTheme.headlineMedium),
            const SizedBox(height: 20),
            TextField(controller: emailCtrl, decoration: const InputDecoration(labelText: 'Email')),
            TextField(controller: passCtrl, obscureText: true, decoration: const InputDecoration(labelText: 'Contraseña')),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: loading
                  ? null
                  : () async {
                      setState(() => loading = true);
                      await auth.register(emailCtrl.text, passCtrl.text);
                      setState(() => loading = false);
                      context.go('/home');
                    },
              child: loading ? const CircularProgressIndicator() : const Text('Registrar'),
            ),
            TextButton(onPressed: () => context.go('/login'), child: const Text('Ya tengo cuenta')),
          ],
        ),
      ),
    );
  }
}
