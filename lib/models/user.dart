import 'package:uuid/uuid.dart';
import 'package:weather_app/datatypes/types.dart';
import 'package:weather_app/models/city.dart';

class User{
  String _id= Uuid().v4();
  NameType lastName;
  NameType firstName;
  EmailType email;
  AddressType address;
  PasswordType password;
  List<City> places=[];

  User(this.lastName, this.firstName, this.email, this.address, this.password);



}