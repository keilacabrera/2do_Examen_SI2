import 'package:flutter/material.dart';

class AuthProvider with ChangeNotifier {
  bool _isAuthenticated = false;
  String? _userEmail;

  bool get isAuthenticated => _isAuthenticated;
  String? get userEmail => _userEmail;

  Future<bool> login(String email, String password) async {
    await Future.delayed(const Duration(seconds: 1));
    if (email == "user@test.com" && password == "123456") {
      _isAuthenticated = true;
      _userEmail = email;
      notifyListeners();
      return true;
    }
    return false;
  }

  Future<bool> register(String email, String password) async {
    await Future.delayed(const Duration(seconds: 1));
    _isAuthenticated = true;
    _userEmail = email;
    notifyListeners();
    return true;
  }

  void logout() {
    _isAuthenticated = false;
    _userEmail = null;
    notifyListeners();
  }
}
