// signup_screen.dart
import 'package:flutter/material.dart';
import 'package:weather_app/routes.dart';

import '../datatypes/types.dart';
import '../models/user.dart';
import '../services/session_manager.dart';
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
              onPressed: () async {
                // Créer un nouvel utilisateur
                User newUser = User(
                  NameType('TD'),
                  NameType('Annaelle'),
                  EmailType('email@example.com'),
                  AddressType('Adresse'),
                  PasswordType('Motdepasse2*'),
                );
                SessionManager().setCurrentUser(newUser);
                var data= SessionManager().getCurrentUser();
                var name= data?.firstName.value;
                print('Informations utilisateur récupérées: $name');


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


