
/*
import 'package:flutter/material.dart';
import 'package:weather_app/services/api_geolocalisation.dart';

class GeolocalisationScreen extends StatefulWidget {

  @override
  _GeolocalisationScreenState createState() => _GeolocalisationScreenState();
}
*/

/*

class _GeolocalisationScreenState extends State<GeolocalisationScreen> {
  String location = '';
  String more='';
  GeoLocationService geoLocationService = GeoLocationService();

  @override
  void initState() {
    super.initState();
    fetchLocation();
  }

  Future<void> fetchLocation() async {
    final result = await geoLocationService.getLocation();
    if (result.containsKey('error')) {
      setState(() {
        location = 'Error: ${result['error']}';
      });
    } else {
      setState(() {
        location = 'Ville: ${result['city']}, Pays: ${result['country_name']}, Code Postale: ${result['zip']}, Région: ${result['region_name']}, région Code : ${result['region_code']}';
        //more= '${result['type']},${result['ip']}';
      });
    }
  }

@override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Se géolocaliser'),
      ),
      body: Center(
        child: Text(location)
      ),


    );
  }
}*/

/*
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class GeolocalisationScreen extends StatefulWidget {

  @override
  _GeolocalisationScreenState createState() => _GeolocalisationScreenState();
}

class _GeolocalisationScreenState extends State<GeolocalisationScreen> {
  String locationInfo = 'Fetching location...';

  @override
  void initState() {
    super.initState();
    fetchLocation();
  }

  Future<void> fetchLocation() async {
    try {
      final response = await http.get(Uri.parse('https://ipinfo.io/json'));

      if (response.statusCode == 200) {
        final Map<String, dynamic> result = json.decode(response.body);
        setState(() {
          locationInfo = 'City: ${result['city']}, Country: ${result['country']}';
        });
      } else {
        setState(() {
          locationInfo = 'Error: Unable to fetch location data';
        });
      }
    } catch (e) {
      print('Error: $e');
      setState(() {
        locationInfo = 'Error: An error occurred while fetching location data';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Geolocation with ipinfo.io'),
      ),
      body: Center(
        child: Text(locationInfo),
      ),
    );
  }
}
*/


import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:weather_app/routes.dart';
import 'package:http/http.dart' as http;


class GeolocalisationScreen extends StatefulWidget {
  @override
  _GeolocalisationScreenState createState() => _GeolocalisationScreenState();
}

class _GeolocalisationScreenState extends State<GeolocalisationScreen> {
  String locationInfo = 'Fetching location...';

  @override
  void initState() {
    super.initState();
    fetchLocation();
  }

  Future<void> fetchLocation() async {
    try {
      final response = await http.get(Uri.parse('http://ip-api.com/json/'));

      if (response.statusCode == 200) {
        final Map<String, dynamic> result = json.decode(response.body);
        setState(() {
          locationInfo = 'City: ${result['city']}, Country: ${result['country']}';
        });
      } else {
        setState(() {
          locationInfo = 'Error: Unable to fetch location data';
        });
      }
    } catch (e) {
      print('Error: $e');
      setState(() {
        locationInfo = 'Error: An error occurred while fetching location data';
      });
    }
  }




  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Geolocation with ip-api.com'),
      ),
      body: Center(
        child: Container(
            height: 300,
            width: 265,
            decoration: BoxDecoration(
              color: Color.fromRGBO(217,217,217,217),
              border: Border.all(
                width: 1,
                color: Colors.grey.withOpacity(0.5),
              ),
              borderRadius: BorderRadius.circular(20),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey.withOpacity(0.5), // Couleur de l'ombre
                  spreadRadius: 5, // Rayon de diffusion de l'ombre
                  blurRadius: 7, // Flou de l'ombre
                  offset: Offset(0, 3), // Décalage de l'ombre
                )
              ],
            ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('Activer la géolocalisation',
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
                // Naviguer vers l'écran de connexion
                Navigator.pushNamed(context, Routes.ajouterunlieu);
              },
              child: Text('Autoriser'),
              style: ElevatedButton.styleFrom(
                backgroundColor: Color.fromRGBO(0,74,172,82), // Définir la couleur de fond en rouge
                minimumSize: Size(200, 40),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(15), // Définir le rayon des angles
                ),
              ),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Naviguer vers l'écran d'inscription
                Navigator.pushNamed(context, Routes.ajouterunlieu);
              },
              child: Text('Passer'),
              style: ElevatedButton.styleFrom(
                backgroundColor: Color.fromRGBO(0,74,172,82),
                  minimumSize: Size(200, 40),// Définir la couleur de fond en rouge
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(15), // Définir le rayon des angles
                  ),

              ),
            ),
              ],
          ),
        ),
        ),

      /*Center(
        child: Text(locationInfo),
      ),*/
    );
  }
}
