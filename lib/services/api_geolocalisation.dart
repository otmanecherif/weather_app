import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String location = '';

  @override
  void initState() {
    super.initState();
    getLocation();
  }

  Future<void> getLocation() async {
    try {
      final response = await http.get(Uri.parse('http://api.ipstack.com/check?access_key=YOUR_ACCESS_KEY'));

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        setState(() {
          location = 'City: ${data['city']}, Country: ${data['country_name']}';
        });
      } else {
        print('Error: ${response.statusCode}');
      }
    } catch (e) {
      print('Error: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('IP Geolocation Flutter'),
        ),
        body: Center(
          child: Text(location),
        ),
      ),
    );
  }
}
