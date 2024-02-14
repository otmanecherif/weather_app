import 'package:weather_app/datatypes/types.dart';

class City{
   ZipCodeType zipCode;
   NameType cityName;
   NameType countryName;
   bool _placeInterest=false;

   City(this.zipCode,this.cityName,this.countryName);
   /*City searchCity(String searching){
      return

   }*/
}

