import 'package:flutter/material.dart';
import 'package:weather_app/routes.dart';

class WelcomeScreen extends StatelessWidget {
  @override
  // test de git
  Widget build(BuildContext context) {
    return Scaffold(

      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: () {
                // Naviguer vers l'écran de connexion
                Navigator.pushNamed(context, Routes.login);
              },
              child: Text('Se connecter'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Naviguer vers l'écran d'inscription
                Navigator.pushNamed(context, Routes.signup);
              },
              child: Text('S\'inscrire'),
            ),
          ],
        ),
      ),
    );
  }
}
