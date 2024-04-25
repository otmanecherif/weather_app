import { View, Text, Image, StatusBar, SafeAreaView } from "react-native";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import handleConnecter from "../../data/auth/handleConnecter";
import { useAppContext } from "../../context";

const Login = ({ navigation }) => {
	const { setUserData } = useAppContext();
    const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState({
		email: false,
		password: false,
	});

	const onPressConnecter = async () => {
		setLoading(true);
		const data = {
			email: email.trim(),
			password: password,
		};
		let tempError = { email: false, password: false };
		if (data.email === "") {
			tempError = { ...tempError, email: true };
		}
		if (data.password === "") {
			tempError = { ...tempError, password: true };
		}
		setError(tempError);
		if (tempError.email || tempError.password) {setLoading(false);return};
		await handleConnecter(data.email, data.password)
		.then((response) => {
			if ( response?.status ){
				setUserData(response.response.uid, response.response.nom, response.response.prenom, response.response.email, response.response.adresse, response.response.codePostal,response.response.pays,response.response.numVoie,response.response.villes?response.response.villes : []);
				navigation.replace("/");
			}else{
				setError({email:false, password:false,other:true, text:"Email ou mot de passe incorrecte"})
			}
		}).finally(() => {
			setLoading(false);
		});
	};

	return (
		<SafeAreaView className=" h-screen w-screen bg-white">
			<StatusBar backgroundColor={"#FFF"} barStyle="dark-content" />
			<View className=" w-full h-full flex flex-col bg-white">
				<View className=" mt-[10%] w-1/2 aspect-square self-center">
					<Image
						source={require("../../../assets/Logo.png")}
						resizeMode="contain"
						className=" w-full h-full"
					/>
				</View>
				<View className=" flex-1 w-full justify-start mt-[10%]">
					<View className=" w-full h-[10%] flex justify-center items-center">
						<Text className="text-2xl">Connexion</Text>
					</View>
					<View
						className=" w-[80%] self-center h-[30%] flex flex-col"
						style={{ gap: 10 }}
					>
						<CustomTextInput
							label={"Email"}
							value={email}
							setValue={setEmail}
							error={error.email}
						/>
						<CustomTextInput
							label={"Mot de passe"}
							value={password}
							setValue={setPassword}
							error={error.password}
						/>
						{
							(error.email || error.password || error.other) && <Text className="text-red-500 text-base text-center">{error.text}</Text>
						}
					</View>
					<CustomButton
						fill={"#5284C7"}
						text={"Se connecter"}
						textColor={"#FFF"}
						width={"80%"}
						fontSize={18}
						onPress={onPressConnecter}
						loading={loading}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Login;
