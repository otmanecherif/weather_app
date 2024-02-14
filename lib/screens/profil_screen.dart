
import 'package:flutter/material.dart';
import 'package:weather_app/routes.dart';
import 'package:weather_app/services/session_manager.dart';
class ProfilScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Profil'),
      ),
      body: Center(
        child: Text(
          SessionManager().getCurrentUser()?.firstName.value ?? 'null',
        ),
      ),
    );
  }
}