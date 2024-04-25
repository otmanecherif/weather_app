import { View, StatusBar, SafeAreaView, Image, Text, KeyboardAvoidingView, ScrollView, Platform, TextInput, ActivityIndicator } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppContext } from "../context";
import quandNotifierUtilisateur from "../data/quandNotifierUtilisateur";
import { useEffect } from "react";
import NotificationsCard from "../components/NotificationsCard";

const Notifications = ({ navigation }) => {
    const { user } = useAppContext();
    const [notifs, setNotifs] = useState([{ "temperature": 9.8, "ville": "Marseille" }, { "pluie": 1, "ville": "Paris" }]);
    useEffect(() => {
        const interval = setInterval(async () => {
            await quandNotifierUtilisateur(user).then(res => {
                setNotifs(res);
            })
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <SafeAreaView className=" h-screen w-screen bg-white">
            <StatusBar backgroundColor={"#FFF"} barStyle="dark-content" />
            <View className=" w-full h-full flex flex-col bg-white" style={{ gap: 30 }}>
                <Icon name="chevron-left" size={30} color="#000" style={{ position: "absolute", top: 0, left: 10, padding: 20 }} onPress={() => { console.log(user); navigation.navigate("/") }} />
                <View className=" mt-[10%] w-2/5 aspect-square self-center">
                    <Image
                        source={require("../../assets/Logo.png")}
                        resizeMode="contain"
                        className=" w-full h-full"
                    />
                </View>
                <Text className=" w-[70%] self-center text-center text-3xl font-bold text-DarkBlue">
                    Notifications
                </Text>
                {
                    notifs.length > 0 ? (
                        <ScrollView className=" w-full h-full flex flex-col" contentContainerStyle={{ gap: 10, display: "flex", flexDirection: "column" }}>
                            {
                                notifs.map((notif, index) => {
                                    return (
                                        <NotificationsCard
                                            data={notif}
                                        />
                                    )

                                })
                            }
                        </ScrollView>
                    ) : (
                        <View className=" w-full h-full flex flex-col items-center pt-10">
                            <Text className=" text-xl text-DarkBlue">
                                Aucune notification
                            </Text>
                        </View>
                    )
                }
            </View>
        </SafeAreaView>
    );
};

export default Notifications;