import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useEffect, useState } from "react";
import handleEditPassword from "../../data/auth/handleEditPassword";

const PasswordEdit = ({onPressSave}) => {
	const [error, setError] = useState(null	);
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const onPressSaveEdit = async () => {
		if ( newPassword !== confirmPassword ) {
			setError("Les mots de passe ne correspondent pas");
			return;
		}
		if ( newPassword.length < 8 ) {
			setError("Le mot de passe doit contenir au moins 8 caractères");
			return;
		}
		setError(null);
		await handleEditPassword(newPassword).then((res) => {
			if (res) {
				onPressSave();
			}
		});
		onPressSave();
	}
	
	return (
		<View className=" w-full h-full flex flex-col" style={{gap:20}} >
			<View className=' w-[80%] self-center flex flex-col ' style={{gap:10}}>
				<Text className=" text-center">Nouveau mot de passe</Text>
				<TextInput
					placeholder="Nouveau mot de passe"
                    className=" bg-slate-300 rounded-2xl py-2 px-4 text-base text-black"
					value={newPassword}
					onChangeText={setNewPassword}
				/>
			</View>
			<View className=' w-[80%] self-center flex flex-col ' style={{gap:10}}>
				<Text className=" text-center">Confirmer le mot de passe</Text>
				<TextInput
					placeholder="Confirmer votre mot de passe"
                    className=" bg-slate-300 rounded-2xl py-2 px-4 text-base text-black"
					value={confirmPassword}
					onChangeText={setConfirmPassword}
					/>
			</View>
			{
				error &&
				<Text className="text-red-500 text-base text-center">{error}</Text>
			}
			<View className=' w-[80%] flex flex-row self-center' style={{gap:20}}>
                <TouchableOpacity className=" flex-1 bg-LightBlue py-2 px-3 rounded-3xl" onPress={onPressSaveEdit}>
                    <Text className=" text-center text-base">Enregistrer</Text>
                </TouchableOpacity>
            </View>
		</View>
	);
};

export default PasswordEdit;