import 'dart:ui';

import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:weather_app/screens/geolocalisation_screen.dart';
import 'package:weather_app/screens/profil_screen.dart';
import 'package:weather_app/screens/welcome_screen.dart';
import 'package:weather_app/services/session_manager.dart';

import 'lib/myalerts_screen.dart';

class AjouterUnLieuScreen extends StatefulWidget {
  final bool geoloc;
  AjouterUnLieuScreen({required this.geoloc});

  @override
  _AjouterUnLieuScreenState createState() => _AjouterUnLieuScreenState();
}


class _AjouterUnLieuScreenState extends State<AjouterUnLieuScreen> {
  String locationInfo = '';
  String selectedPage = '';
  String city='';
  var scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    if (widget.geoloc) {
      fetchLocation();
      addGeolocwidget(context);
    }
  }

  Future<void> fetchLocation() async {
    try {
      final response = await http.get(Uri.parse('https://ipinfo.io/json'));

      if (response.statusCode == 200) {
        final Map<String, dynamic> result = json.decode(response.body);
        setState(() {
          locationInfo =
          'City: ${result['city']}, Pays: ${result['country']}, CodePostale: ${result['postal']}, Region: ${result['region']}';
          city='${result['city']}';
          print(city);
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


  Widget addGeolocwidget(BuildContext context) {
    return InkWell(
      onTap: () {
        // Action à effectuer lorsque le conteneur est tapé ou pressé
        // Naviguer vers l'écran de votre choix
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => WelcomeScreen(),
          ),
        );
      },
      child: Container(
        height: 50,
        width: 350,
        decoration: BoxDecoration(
          color: Color.fromRGBO(189, 208, 233, 100),
          borderRadius: BorderRadius.circular(10),
        ),
        child: Row(
            children: [
              Padding(
                padding: const EdgeInsets.only(left: 20), // Ajoutez un Padding à gauche de l'icône
                child: Icon(Icons.my_location, color: Color.fromRGBO(0, 123, 229, 1.0)),
              ),
              SizedBox(width: 30), // Espace entre l'icône et le texte
        Text(
          'Ma position : $city',
          style: TextStyle(
            color: Color.fromRGBO(74, 73, 73, 1.0),
            fontSize: 16,

            // Ajoutez d'autres styles de texte selon vos préférences
          ),
        ),
            ],
      ),
    ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: scaffoldKey,
      appBar: AppBar(
        automaticallyImplyLeading: false,
        toolbarHeight: 100,
        backgroundColor: Color.fromRGBO(0, 74, 172, 68),
        leading: IconButton(
          icon: Icon(Icons.menu_rounded),
          color: Colors.white,
          onPressed: () => scaffoldKey.currentState?.openDrawer(),
        ),
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Expanded(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10.0),
                child: SizedBox(
                  width: 400,
                  child: SearchBar(
                    hintText: 'Rechercher', // Placeholder
                    leading: Padding(
                      padding: const EdgeInsets.all(3.0),
                      child: const Icon(
                        Icons.search,
                        color: Colors.black, // Couleur de l'icône en noir
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
        titleSpacing: 0, // Aucun espacement entre les éléments de la barre d'applications
      ),
      drawer: Theme(
      data: Theme.of(context).copyWith(
    // Set the transparency here
    canvasColor: Color.fromRGBO(0, 60, 139, 1.0).withOpacity(0.65), //or any other color you want. e.g Colors.blue.withOpacity(0.5)
    ),
      child:Drawer(
      child: ClipRRect(
      child: BackdropFilter(
      filter: ImageFilter.blur(sigmaX: 5.0, sigmaY: 5.0),
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            Container(
              height:300,
              width:200,
            child: DrawerHeader(
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('assets/Logo.png'),
                  fit: BoxFit.none, // Ajustez la taille de l'image pour s'adapter au contenu
                ),
                //color:Color.fromRGBO(0, 74, 172, 68),
              ),
              child: Text(
                '',
              ),
            ),
            ),
            const Divider(
              height: 10,
              thickness: 2,
              indent: 15,
              endIndent: 15,
              color: Colors.white,
            ),
            SizedBox(height: 20),
            ListTile(
              leading: const Icon(Icons.message,color: Colors.white,),
              title: const Text('Profil',
                  style: TextStyle(
                      fontSize: 20,
                      color:Colors.white),
                      ),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => ProfilScreen(),
                  ),
                );
              },
            ),
            ListTile(
              leading: const Icon(Icons.account_circle,color: Colors.white,),
              title: const Text('Alerts',
                style: TextStyle(
                    fontSize: 20,
                    color:Colors.white),
              ),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => MyAlertsScreen(),
                  ),
                );
              },
            ),
            SizedBox(height: 450),
            ListTile(
              leading: const Icon(Icons.exit_to_app_rounded,color: Colors.white,),
              title: const Text('Se Déconnecter',
                style: TextStyle(
                    fontSize: 20,
                    color:Colors.white),
              ),
              onTap: () {
                SessionManager().clearSession();
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => WelcomeScreen(),
                  ),
                );
              },
            ),
          ],
        ),
    ),
      ),
      ),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(top: 20.0,bottom:10.0),
            // Ajuster le padding vertical
            child: Title(
              color: Colors.grey,
              child: Text(
                'Ajouter un lieu', // Titre rapproché
                style: TextStyle(fontSize: 20),
              ),
            ),
          ),
            InkWell(
            onTap: () {
            // Action à effectuer lorsque le conteneur est tapé ou pressé
            // Naviguer vers l'écran de votre choix
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => WelcomeScreen(),
                ),
              );
            },
            child:
            Container(
            height: 50,
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
                ),
              ],
            ),
            child: Icon(Icons.add, color: Color.fromRGBO(74, 73, 73, 43.0)),
          ),
            ),
          SizedBox(height: 50),
          addGeolocwidget(context),
          Text(
            locationInfo,
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }

}