import 'package:flutter/material.dart';
import 'package:weather_app/routes.dart';
import 'package:weather_app/screens/welcome_screen.dart';
import 'package:weather_app/screens/login_screen.dart';
import 'package:weather_app/screens/signup_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Votre Application Météo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: Routes.welcome,
      routes: {
        Routes.welcome: (context) => WelcomeScreen(),
        Routes.login: (context) => LoginScreen(), // Ajoutez l'écran de connexion
        Routes.signup: (context) => SignupScreen(), // Ajoutez l'écran d'inscription
      },
    );
  }
}
