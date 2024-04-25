import { View, StatusBar, SafeAreaView, Text, Image, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { default as Icon2 } from "react-native-vector-icons/Feather";
import { useAppContext } from "../../context";
import CustomButton from "../../components/CustomButton";
import { useEffect, useState } from "react";
import retirerVille from "../../data/meteo/retirerVille";

const Main = ({ navigation }) => {
	const { user, removeLieu } = useAppContext();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(false);
	}, []);
	const onpressConfigureAlerte = () => {
		navigation.navigate("/seuils");
	};
	const onpressDelete = () => {
		removeLieu(user.current.place)
		retirerVille(user.user.uid, user.current.place);
		navigation.navigate("/",{
			reload:true
		})
	};
	return (
		<SafeAreaView className=" h-screen w-screen bg-white">
			<StatusBar backgroundColor={"#FFF"} barStyle="dark-content" />
			{
				isLoading?
				<>
				<Icon name="chevron-left" size={30} color="#000" style={{position:"absolute", top:0, left:10, padding:20}} onPress={()=>{navigation.navigate("/",{
			reload:true
		})}}/>
				<View className=" w-full h-full flex justify-center items-center">
					<ActivityIndicator
						className="self-center"
						size="large"
						color="#004AAC"
					/>
				</View>
				</>
				:
				<View className=" w-full h-full flex flex-col bg-white">
					<Icon name="chevron-left" size={30} color="#000" style={{position:"absolute", top:0, left:10, padding:20}} onPress={()=>navigation.navigate("/")}/>
					<Icon name="trash" size={30} color="red" style={{position:"absolute", top:0, right:10, padding:20}} onPress={onpressDelete}/>
					<View
						className=" w-full flex flex-row justify-center items-center mt-5"
						style={{ gap: 10 }}
					>
						{false && (
							<Icon name="bullseye" size={25} color="#004AAC" />
						)}
						<Text className=" text-3xl w-[70%] text-center font-bold text-DarkBlue">
							{user.current.place}
						</Text>
					</View>
					<View className=" w-full flex flex-row justify-center items-center mt-5">
						<Text className=" text-2xl font-bold">
							{user.current.etat}
						</Text>
					</View>
					<View className=" w-full flex flex-row justify-center items-center mt-5">
						<Text className=" text-4xl font-bold">
							{user.current.temperature + "°C"}
						</Text>
					</View>
					<View className=" w-full flex flex-row">
						<View className=" flex-1 flex flex-col items-center justify-between">
							<Text className=" text-base text-center">Ressenti</Text>
							<Image
								height={40}
								width={40}
								source={{ uri: user.current.urlTemps, }}
							/>
							<Text>{user.current.temperatureRessentie + "°C"}</Text>
						</View>
						<View className=" flex-1 flex flex-col items-center justify-between">
							<Text className=" text-base text-center">Vitesse</Text>
							<Text className=" text-base text-center">du vent</Text>
							<Icon name="wind" size={30} color="#208BE8" />
							<Text>{user.current.vitesseVent + " km/h"}</Text>
						</View>
						<View className=" flex-1 flex flex-col items-center justify-between">
							<Text className=" text-base text-center">Humidité</Text>
							<Icon name="droplet" size={30} color="#208BE8" />
							<Text>{user.current.humdite + " %"}</Text>
						</View>
						<View
							className=" flex-1 flex flex-col items-center"
							style={{ gap: 10 }}
						>
							<Text className=" text-base text-center">Soleil</Text>
							<View
								className=" flex flex-row items-center"
								style={{ gap: 10 }}
							>
								<Icon2 name="sunrise" size={25} color="#FFA500" />
								<Text className=" text-base">
									{user.current.sunrise}
								</Text>
							</View>
							<View
								className=" flex flex-row items-center"
								style={{ gap: 10 }}
							>
								<Icon2 name="sunset" size={25} color="#FFA500" />
								<Text className=" text-base">
									{user.current.sunset}
								</Text>
							</View>
						</View>
					</View>
					<View className=" w-full mt-10">
						<CustomButton
							fill="#208BE8"
							width={"65%"}
							fontSize={20}
							text={"Configurer mon Alerte"}
							onPress={onpressConfigureAlerte}
							textColor="#000"
						/>
					</View>
					<View className=" mt-10 w-[95%] self-center bg-Gris rounded-2xl py-2">
						<View className=" flex flex-row">
							{user.current.days.map((day, index) => {
								return (
									<Text
										key={index}
										className=" flex-1 text-center text-base"
									>
										{day.name}
									</Text>
								);
							})}
						</View>
						<View className=" w-[96%] mt-1 mb-2 self-center h-[2px] bg-black"></View>
						<View className=" flex flex-row">
							{user.current.days.map((day, index) => {
								return (
									<View key={index} className=" flex-1 flex flex-col items-center" >
										<Image
											height={40}
											width={40}
											source={{ uri: day.urlTemps }}
										/>
										<Text className=" mt-2">Min</Text>
										<Text className=" text-DarkBlue">{day.minTemperature + " °C"}</Text>
										<Text className=" mt-2">Max</Text>
										<Text className=" text-DarkBlue">{day.maxTemperature + " °C"}</Text>
									</View>
								);
							})}
						</View>
					</View>
				</View>
			}
		</SafeAreaView>
	);
};

export default Main;
