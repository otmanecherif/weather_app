import { useState, useEffect } from 'react'
import { useAppContext } from './context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// impoting Screens
import Splash from './screens/Splash';
import Notifications from './screens/Notifications';

import AuthScreens from './screens/Auth/AuthScreens';
import MeteoScreens from './screens/Meteo/MeteoScreens';
import loginFromStorage from "./data/auth/loginFromStorage";


const Stack = createStackNavigator();

export default AppVTC = () => {
    const { user, setUserData } = useAppContext()
    const [isLoginComplete, setIsLoginComplete] = useState(false);
    const [initialRoute, setInitialRoute] = useState("/")
    useEffect(() => {
		async function prepare() {
            await loginFromStorage().then(response=>{
                if ( response.status ){
                    setUserData(response.response.uid, response.response.nom, response.response.prenom, response.response.email, response.response.adresse, response.response.codePostal,response.response.pays,response.response.numVoie,response.response.villes?response.response.villes : []);
                    setInitialRoute("/")
                }else{
                    setInitialRoute("/welcome")
                }
            }).catch(err=>{
                console.log(err);
            }).finally(()=>{
                setIsLoginComplete(true);
            })
		}
		prepare();
	}, []);
	return (
        ! isLoginComplete?
        <Splash />
        :
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName={initialRoute}
                screenOptions={{
                    headerShown: false,
                }}
                >
                
                <Stack.Screen name="/welcome" component={AuthScreens.Welcome} />
                <Stack.Screen name="/auth/login" component={AuthScreens.Login} />
                <Stack.Screen name="/auth/signup" component={AuthScreens.SignUp} />
                <Stack.Screen name="/auth/account" component={AuthScreens.Account} />
                
                <Stack.Screen name="/notifications" component={Notifications} />
                <Stack.Screen name="/" component={MeteoScreens.Main} />
                <Stack.Screen name="/place" component={MeteoScreens.PlaceDetail} />
                <Stack.Screen name="/seuils" component={MeteoScreens.Seuils} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}