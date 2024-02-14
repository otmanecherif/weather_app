import 'package:flutter/material.dart';
import 'package:weather_app/routes.dart';
import 'package:weather_app/screens/ajouter_un_lieu.dart';
import 'package:flutter/material.dart';
import 'package:weather_app/routes.dart';
import 'package:weather_app/screens/ajouter_un_lieu.dart';

class GeolocalisationScreen extends StatefulWidget {
  @override
  _GeolocalisationScreenState createState() => _GeolocalisationScreenState();
}
class GeolocState extends ChangeNotifier {
  bool _geoloc = false;

  bool get geoloc => _geoloc;

  set geoloc(bool value) {
    _geoloc = value;
    notifyListeners(); // Notifie les écouteurs du changement
  }
}

class _GeolocalisationScreenState extends State<GeolocalisationScreen> {
  bool geoloc = false; // Initialisez geoloc à false par défaut

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title: Text('Geolocation with ip-api.com'),
      ),
      body:
      Stack(
        children: [
        // Image du logo
        Positioned(
        top: 30, // Position en haut
        left: 0, // Position à gauche
        right: 0, // Position à droite
        child: Padding(
          padding: const EdgeInsets.all(2.0),
          child: Image(
            image: AssetImage('assets/Logo.png'),
            height: 150,
            fit: BoxFit.contain, // Ajustez la taille de l'image pour s'adapter au contenu
          ),
        ),
      ),


      Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
      SizedBox(height: 20), // Espacement entre l'image et le Container
        Container(
          height: 300,
          width: 265,
          decoration: BoxDecoration(
            color: Color.fromRGBO(217, 217, 217, 217),
            border: Border.all(
              width: 1,
              color: Colors.grey.withOpacity(0.5),
            ),
            borderRadius: BorderRadius.circular(20),
            boxShadow: [
              BoxShadow(
                color: Colors.grey.withOpacity(0.5),
                spreadRadius: 5,
                blurRadius: 7,
                offset: Offset(0, 3),
              )
            ],
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Activer la géolocalisation',
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 15,
                ),
              ),
              SizedBox(height: 10),
              Image(
                  image: AssetImage('assets/geolocalisation.png'), // Charger l'image à partir des assets
                  fit: BoxFit.fitHeight), // Mode d'ajustement de l'image dans le conteneur),
              SizedBox(height: 30),
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    geoloc = true; // Définir geoloc à true lorsque le bouton est pressé
                  });
                  // Naviguer vers l'écran de connexion
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => AjouterUnLieuScreen(geoloc: geoloc),
                    ),
                  );
                },
                child: Text('Autoriser'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color.fromRGBO(0, 74, 172, 82),
                  minimumSize: Size(200, 40),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(15),
                  ),
                ),
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    geoloc = false; // Définir geoloc à true lorsque le bouton est pressé
                  });
                  // Naviguer vers l'écran de connexion
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => AjouterUnLieuScreen(geoloc: this.geoloc),
                    ),
                  );
                },
                child: Text('Passer'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color.fromRGBO(0, 74, 172, 82),
                  minimumSize: Size(200, 40),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(15),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
      ),
      ),
      ],
    ),
    );
  }
}
