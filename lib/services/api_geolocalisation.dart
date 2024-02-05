// import 'dart:convert';
// import 'package:http/http.dart' as http;
//
//
//   class GeoLocationService {
//   Future<Map<String, dynamic>> getLocation() async {
//   try {
//   final response = await http.get(Uri.parse('http://api.ipstack.com/check?access_key=9c141956481f14d9ee82fc63fa0d56dc&language=fr'));
//
//   if (response.statusCode == 200) {
//   return json.decode(response.body);
//   } else {
//   print('Error: ${response.statusCode}');
//   return {'error': 'Unable to fetch location data'};
//   }
//   } catch (e) {
//   print('Error: $e');
//   return {'error': 'An error occurred while fetching location data'};
//   }
//   }
//   }


