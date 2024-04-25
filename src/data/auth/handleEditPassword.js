import { auth } from "../../../firebaseConfig";
import { updatePassword } from 'firebase/auth'


const handleEditPassword = async (password) => {
	const user = auth.currentUser
	console.log(user);
	updatePassword(user, password).then((res) => {
		console.log(res);
	}).catch((error) => {
		console.log(error);
	});
};

export default handleEditPassword;
