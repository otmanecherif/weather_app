import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAppContext } from "../../context";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const handleConnecter = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const uid = userCredential.user.uid;
        const dbRef = ref(getDatabase());
        return await get(child(dbRef, `users/${uid}`)).then((snapshot) => {
            return snapshot.val()
        }).then(async(res)=>{
            await AsyncStorage.setItem('userToken', JSON.stringify({email, password}));  
            return {
                status:true,
                response:{
                    uid:uid,
                    ...res
                }
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

export default handleConnecter