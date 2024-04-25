import { View, Text, SafeAreaView, StatusBar, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import handleInscrire from "../../data/auth/handleInscrire";
import { Checkbox } from "react-native-paper";
import { useAppContext } from "../../context";

const SignUp = ({ navigation }) => {
	const { setUserData } = useAppContext();
	const [loading, setLoading] = useState(false);
	const [terms, setTerms] = useState(false);
	const [nom, setNom] = useState("");
	const [prenom, setPrenom] = useState("");
	const [adresse, setAdresse] = useState("");
	const [pays, setPays] = useState("");
	const [codePostal, setCodePostal] = useState("");
	const [numVoie, setNumeVoie] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState({
		email: false,
		password: false,
		terms: false,
		text:""
	});
	const onPressInscrire = async () => {
		setLoading(true);
		const data = {
			email: email.trim(),
			password: password,
			nom: nom,
			prenom: prenom,
			adresse: adresse,
			pays: pays,
			codePostal: codePostal,
			numVoie: numVoie,
			confirmPassword: confirmPassword,
		};
		let tempError = { email: false, password: false };
		if (data.email === "") {
			tempError = { ...tempError, email: true , text:"Email ne peut pas être vide"};
		}else if ( data.password === "" || password != confirmPassword || password.length < 8 ) {
			tempError = { ...tempError, password: true };
			if ( password != confirmPassword ){
				tempError = { ...tempError, password: true , text:"Les mots de passe ne correspondent pas" };
			}else if ( data.password === "" ){
				tempError = { ...tempError, password: true , text:"Mot de passe ne peut pas être vide" };
			} else if ( password.length < 8 ){
				tempError = { ...tempError, password: true , text:"Mot de passe doit contenir au moins 8 caractères" };
			}
		}else if ( !terms ){
			tempError = { ...tempError, terms: true , text:"Vous devez accepter les conditions" };
		}
		setError(tempError);
		if (tempError.email || tempError.password || tempError.terms) {setLoading(false);return};
		await handleInscrire(data.email, data.password, nom, prenom, adresse, pays, codePostal, numVoie ).then((response) => {
			if ( response?.status ){
				setUserData(response.response, nom, prenom, email, adresse, codePostal,pays,numVoie,[]);
				navigation.replace("/");
			}else{
				let error = response.response.slice(22)
				error = error.slice(0,-2)
				setError({email:false, password:false,other:true, text:error})
			}
		}).finally(() => {
			setLoading(false);
		});
	};
	return (
		<SafeAreaView className=" bg-white">
			<StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
			<View className=" w-full h-full flex flex-col bg-white">
				<View className=" mt-[10%] w-1/2 aspect-square self-center">
					<Image
						source={require("../../../assets/Logo.png")}
						resizeMode="contain"
						className=" w-full h-full"
					/>
				</View>
				<View className=" w-full py-2 flex justify-center items-center">
					<Text className="text-2xl">Inscription</Text>
				</View>

				<KeyboardAvoidingView style={{ flex: 1, width:"80%", alignSelf:"center" }}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
					<ScrollView contentContainerStyle={{ minHeight: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", }} style={{ width: "100%", flex: 1 }} overScrollMode="never" nestedScrollEnabled={true} >
						<View className=" flex-1 w-full flex flex-col justify-start">
							<CustomTextInput
								label={"Nom"}
								value={nom}
								setValue={setNom}
							/>
							<CustomTextInput
								label={"Prenom"}
								value={prenom}
								setValue={setPrenom}
							/>
							<CustomTextInput
								label={"Email"}
								value={email}
								setValue={setEmail}
								error={error.email}
							/>
							<View
								className="w-full flex flex-row"
								style={{ gap: 10 }}
							>
								<View className="flex-1">
									<CustomTextInput
										label={"N° de voie"}
										value={numVoie}
										setValue={setNumeVoie}
									/>
								</View>
								<View className="flex-1">
									<CustomTextInput
										label={"Code postal"}
										value={codePostal}
										setValue={setCodePostal}
									/>
								</View>
							</View>
							<CustomTextInput
								label={"Adresse"}
								value={adresse}
								setValue={setAdresse}
							/>
							<CustomTextInput
								label={"Pays"}
								value={pays}
								setValue={setPays}
							/>
							<CustomTextInput
								label={"Mot de passe"}
								value={password}
								setValue={setPassword}
								error={error.password}
							/>
							<CustomTextInput
								label={"Confirmer le mot de passe"}
								value={confirmPassword}
								setValue={setConfirmPassword}
								error={error.password}
							/>
							<View className=" flex flex-row">
								<Checkbox
									status={terms ? "checked" : "unchecked"}
									color="#5284C7"
									uncheckedColor="#5284C7"
									onPress={() => {setTerms(!terms)}}
								/>
								<Text className=" text-base" style={{color:error.terms?"#EF4444":null}}>Je certifie accepter les Conditions Générales d’Utilisation</Text>
							</View>
							<View className=" mt-2 flex flex-col" style={{gap:4}}>
								{
									(error.email || error.password || error.other) && <Text className="text-red-500 text-base text-center">{error.text}</Text>
								}
								<CustomButton
									fill={"#5284C7"}
									text={"S'inscrire"}
									textColor={"#FFF"}
									width={"100%"}
									fontSize={18}
									onPress={onPressInscrire}
									loading={loading}
								/>
							</View>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</View>
		</SafeAreaView>
	);
};

export default SignUp;
