import 'package:flutter/material.dart';
import 'package:weather_app/routes.dart';
import 'package:provider/provider.dart';
import 'package:weather_app/screens/ajouter_un_lieu.dart';
import 'package:weather_app/screens/geolocalisation_screen.dart';
import 'package:weather_app/screens/lib/myalerts_screen.dart';
import 'package:weather_app/screens/profil_screen.dart';
import 'package:weather_app/screens/welcome_screen.dart';
import 'package:weather_app/screens/login_screen.dart';
import 'package:weather_app/screens/signup_screen.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => GeolocState(),
      child: MyApp(),
    ),
  );
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
        Routes.geolocalisation: (context) => GeolocalisationScreen(), // Ajoutez l'écran
        Routes.ajouterunlieu: (context) => AjouterUnLieuScreen(geoloc:false), // Ajoutez l'écran
        Routes.profil: (context) => ProfilScreen(), // Ajoutez l'écran
        Routes.alerts: (context) => MyAlertsScreen(), // Ajoutez l'écran
      },
    );
  }


}
