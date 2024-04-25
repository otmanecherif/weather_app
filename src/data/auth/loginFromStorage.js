import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { getDatabase, ref, get, child } from 'firebase/database';

const loginFromStorage = async () => {
	// await AsyncStorage.removeItem('userToken')
	return await AsyncStorage.getItem('userToken').then(async(res) => {
		if ( ! res ){
			return {
				status:false
			};
		}
		try{
			let data = JSON.parse(res)
			return await signInWithEmailAndPassword(auth, data.email, data.password).then(async (userCredential) => {
				const uid = userCredential.user.uid;
				const dbRef = ref(getDatabase());
				return await get(child(dbRef, `users/${uid}`)).then((snapshot) => {
					return snapshot.val()
				}).then(async(res2)=>{
					return {
						status:true,
						response:{
							uid:uid,
							...res2
						}
					};
				})
			}).catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
				return {
					status:false
				};
			});
		}catch(e){
			return await AsyncStorage.removeItem('userToken').then(()=>{
				return {
					status:false
				};
			})
		}
	});
};

export default loginFromStorage;