class UserID {
  int value;
  UserID(this.value):
        assert(value != null,'null');
}

class NameType {
  String value;

  NameType(this.value)
      : assert(value != null, 'Le prénom ne peut pas être null'),
        assert(value.isNotEmpty, 'Le prénom ne peut pas être vide') {
    RegExp regex = RegExp(r"^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$", unicode: true);
    if (!regex.hasMatch(value)) {
      throw FormatException('Le prénom contient des caractères invalides.');
    }
  }
}


class EmailType {
  String value;
  EmailType(this.value):
        assert(value != null, 'Le prenom ne peut pas être null'),
        assert(value.isNotEmpty, 'Le prenom ne peut pas être vide') {
  RegExp regex = RegExp(r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
  if (!regex.hasMatch(value)) {
  throw FormatException('Le prénom contient des caractères invalides.');
    }
  }
}

class AddressType { //a faire
  String value;
  AddressType(this.value):
        assert(value != null, 'Le prenom ne peut pas être null'),
        assert(value.isNotEmpty, 'Le prenom ne peut pas être vide') {
    RegExp regex = RegExp(r"^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$", unicode: true);
    if (!regex.hasMatch(value)) {
      throw FormatException('Le prénom contient des caractères invalides.');
    }
  }
}

class PasswordType {
  String value;

  PasswordType(this.value)
      : assert(value != null, 'Le mot de passe ne peut pas être null'),
        assert(value.isNotEmpty, 'Le mot de passe ne peut pas être vide') {
    RegExp regex = RegExp(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$');
    if (!regex.hasMatch(value)) {
      throw FormatException('Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.');
    }
  }
}

class ZipCodeType {
  int value;
  ZipCodeType(this.value) {
    assert(value != null, 'La valeur du code postal ne peut pas être null.');
    if (value.toString().length > 5 || value is! int) {
      throw FormatException('Le code postal est invalide.');
    }
  }
}

