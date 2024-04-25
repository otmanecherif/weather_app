import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const handleInscrire = async (email, password,nom, prenom, adresse, pays, codePostal, numVoie, domicile ) => {
    return await createUserWithEmailAndPassword(auth, email, password).then(async(userCredential) => {
        const database = getDatabase();
        return await set(ref(database, 'users/' + userCredential.user.uid), {
            email: email,
            nom : nom,
            prenom : prenom,
            adresse : adresse,
            pays : pays,
            codePostal : codePostal,
            numVoie : numVoie,
            villes:[]
        }).then( async()=>{
            await AsyncStorage.setItem('userToken', JSON.stringify({email, password}));  
            return {
                status:true,
                response:userCredential.user.uid
            };
        })
        
    }).catch((error) => {
        const errorMessage = error.message;
        return {
            status:false,
            response:errorMessage
        };
    });
}

export default handleInscrire