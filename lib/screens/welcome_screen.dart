import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              width: 150,
              height: 150,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.blue,
              ),
              child: Center(
                child: Text(
                  'The Adventurous Weather',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            SizedBox(height: 50.0),
            RaisedButton(
              onPressed: () {},
              color: Colors.blue,
              textColor: Colors.white,
              child: Text('Se connecter'),
            ),
            SizedBox(height: 20.0),
            RaisedButton(
              onPressed: () {},
              color: Colors.blue,
              textColor: Colors.white,
              child: Text('S\'inscrire'),
            ),
          ],
        ),
      ),
    );
  }
}
