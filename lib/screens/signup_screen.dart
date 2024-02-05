// signup_screen.dart
import 'package:flutter/material.dart';
import 'package:weather_app/routes.dart';
class SignupScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('S\'inscrire'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: () {
                // Naviguer vers l'écran de connexion
                Navigator.pushNamed(context, Routes.geolocalisation);
              },
              child: Text('OK'),
            ),
            SizedBox(height: 20)
          ],
        ),
      ),
    );
  }
}


