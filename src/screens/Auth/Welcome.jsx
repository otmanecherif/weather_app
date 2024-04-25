import { View, Text, StatusBar, Image, SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";


const Welcome = ({ navigation }) => {
	const onPressConnecter = () => {
		navigation.navigate("/auth/login");
	};
	const onPressInscrire = () => {
		navigation.navigate("/auth/signup");
	};
	return (
		<SafeAreaView className=" h-screen w-screen bg-white">
			<StatusBar backgroundColor={"#FFF"} barStyle="dark-content" />
			<View className=" w-full h-full flex flex-col items-center justify-normal">
				<View className="h-1/2 w-full flex justify-end items-center pb-10">
					<View className="w-1/2 aspect-square">
						<Image
							source={require("../../../assets/Logo.png")}
							resizeMode="contain"
							className=" w-full h-full"
						/>
					</View>
				</View>
				<View className=" w-full h-1/2 flex flex-col items-center pt-5" style={{ gap: 20 }}>
					<CustomButton
						fill={"#5284C7"}
						text={"Se connecter"}
						textColor={"#FFF"}
						width="50%"
						fontSize={18}
						onPress={onPressConnecter}
					/>
					<CustomButton
						fill={"#5284C7"}
						text={"S'inscrire"}
						textColor={"#FFF"}
						width="50%"
						fontSize={18}
						onPress={onPressInscrire}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Welcome;
