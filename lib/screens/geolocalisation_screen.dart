
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
        child: Text(locationInfo),
      ),
    );
  }
}
