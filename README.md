# weather_app


# My Adventurous Weather

My Adventurous Weather est une application mobile réalisée avec Expo, le framework de React Native, permettant de développer une application pour iOS et Android en une seule phase de codage.

## 1. Prérequis
Pour lancer l'application en phase de développement, vous aurez besoin des éléments suivants :
- Node.js, de préférence v20.5.1
- Yarn v1.22.21
- Télécharger Expo Go sur iOS ou Android.
- Se connecter au même réseau wifi.
- Lancer la commande `yarn add .` pour installer les dépendances, puis `yarn start` pour lancer le serveur de développement. Scanner le code QR qui apparaît dans le terminal depuis la caméra si sur iOS ou depuis l’application Expo go sur Android pour lancer l'application.

## 2. Fonctionnement général
- L'application utilise un Backend As A service (BAAS) Firebase pour la base de données en temps réel et l'authentification.
- À la première utilisation, l'utilisateur peut se connecter ou s'inscrire. Ses données seront ensuite enregistrées sur le téléphone pour éviter de les rentrer à chaque utilisation.
- L'utilisateur peut :
  - Consulter les notifications, résultant de comparaisons de l'état actuel de la météo et des règles définies par l'utilisateur.
  - Consulter son compte utilisateur et modifier ses informations.
  - Rechercher une ville et l’ajouter.
  - Pour chaque ville ajoutée, l'utilisateur peut :
    - Consulter la température depuis le menu principal.
    - Consulter la météo détaillée.
    - Ajouter ou modifier les règles de notifications.
    - Supprimer la ville de la liste des villes ajoutées.

## 3. Structure du code
- `.expo/`: un dossier contenant les fichiers de dépendances du framework Expo pour lancer l'application en mode développement.
- `package.json`: fichier JSON définissant les dépendances de l’application, les scripts et packages utilisés.
- `node_modules/`: un dossier contenant les packages installés et utilisés dans le projet.
- `yarn.lock`: un fichier du Yarn CLI pour exécuter correctement l’application en respectant les bonnes versions des dépendances.
- `tailwind.config.js`: un fichier de configuration pour le package NativeWind permettant d'utiliser le framework tailwind CSS en projet mobile. Il contient la configuration des couleurs de la charte.
- `App.js`: le fichier de lancement de l'application.
- `app.json`, `babel.config.js` et `metro.config.js`: fichiers de configuration de l'application Expo.
- `firebaseConfig.js`: fichier de configuration reliant l'application Expo avec le BAAS Firebase.
- `google-services.json` et `GoogleService-Info.plist`: fichiers contenant les identifiants du BAAS Firebase, l'un pour Android et l'autre pour iOS.
- `assets/`: dossier contenant les images nécessaires telles que le logo.
- `src/`: dossier de fichiers du code source. Il contient :
  - `components/`: dossier contenant les composantes de l’application regroupées par fonctionnalités.
  - `data/`: dossier contenant les requêtes de liaison entre l’application et Firebase ou le stockage local.
  - `screens/`: dossier contenant les écrans de l’application regroupés par fonctionnalités.
  - `context.js`: fichier contenant le contexte de l’application, en d’autres termes : la variable la plus globale.
  - `MyAdventurousWeather.js`: fichier contenant la composante de base de l’application, gérant les liens des pages et la généralisation du contexte.
