import { View, Text, Image, ActivityIndicator, StatusBar, SafeAreaView } from "react-native";

const Splash = () => {
	return (
		<SafeAreaView className=" h-screen w-screen">
			<StatusBar backgroundColor={"#5284C7"} barStyle="default" />
			<View className=" bg-TransparentBlue w-full h-full flex flex-col items-center justify-between">
				<View className="h-[15%] w-full"></View>
				<View className="w-1/2 aspect-square">
					<Image
						source={require("./../../assets/Logo.png")}
						resizeMode="contain"
						className=" w-full h-full"
					/>
				</View>
				<View className=" w-full h-fit">
					<ActivityIndicator size={"large"} color={"#fff"} />
				</View>
				<Text className="text-2xl">My Adventurous Weather</Text>
				<View className="h-[25%] w-full"></View>
			</View>
		</SafeAreaView>
	);
};

export default Splash;
