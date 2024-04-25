import { View, StatusBar, SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import DataView from "../../components/account/DataView";
import DataEdit from "../../components/account/DataEdit";
import PasswordEdit from "../../components/account/PasswordEdit";
import Icon from 'react-native-vector-icons/FontAwesome';


const Account = ({ navigation }) => {
    const [ etat, setEtat ] = useState("Start")

	return (
		<SafeAreaView className=" h-screen w-screen bg-white">
			<StatusBar backgroundColor={"#FFF"} barStyle="dark-content" />
			<View className=" w-full h-full flex flex-col bg-white" style={{gap:30}}>
				<Icon name="chevron-left" size={30} color="#000" style={{position:"absolute", top:0, left:0, padding:20}} onPress={()=>navigation.navigate("/")}/>
				<View className=" mt-[10%] w-1/2 aspect-square self-center">
					<Image
						source={require("../../../assets/Logo.png")}
						resizeMode="contain"
						className=" w-full h-full"
					/>
				</View>
				<View className=" flex-1 w-full">
					{
						etat === "Start" &&
						<DataView
							onPressEdit={() => setEtat("Info")}
							onPressEditPassword={() => setEtat("Password")}
						/>
					}
					{
						etat === "Info" &&
						<DataEdit
							onPressSave={()=>{setEtat("Start")}}
						/>
					}
					{
						etat === "Password" &&
						<PasswordEdit
							onPressSave={()=>{setEtat("Start")}}
						/>
					}
				</View>
            </View>
		</SafeAreaView>
	);
};

export default Account;
