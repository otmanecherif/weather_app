import { View, StatusBar, SafeAreaView, Image, Text, KeyboardAvoidingView, ScrollView, Platform, TextInput, ActivityIndicator } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppContext } from "../../context";
import { Checkbox } from "react-native-paper";
import handleUpdateSeuils from "../../data/meteo/handleUpdateSeuils";

const Seuils = ({ navigation }) => {
    const { user, updateSeuils } = useAppContext();
    const [temperatureMin, setTemperatureMin] = useState(user.current.temperatureMin);
    const [temperatureMax, setTemperatureMax] = useState(user.current.temperatureMax);
    const [vitesseVentMax, setVitesseVentMax] = useState(user.current.vitesseVentMax);
    const [humiditeMin, setHumiditeMin] = useState(user.current.humiditeMin);
    const [humiditeMax, setHumiditeMax] = useState(user.current.humiditeMax);
    const [indiceUVMin, setIndiceUVMin] = useState(user.current.indiceUVMin);
    const [indiceUVMax, setIndiceUVMax] = useState(user.current.indiceUVMin);
    const [visibiliteMin, setVisibiliteMin] = useState(user.current.visibiliteMin);
    const [pluie, setpluie] = useState(user.current.pluie);
    const [isLoading, setIsLoading] = useState(true);

    const onPressSave = () => {
        handleUpdateSeuils(user.user.uid, user.current.nom, {
            temperatureMin: temperatureMin,
            temperatureMax: temperatureMax,
            vitesseVentMax: vitesseVentMax,
            humiditeMin: humiditeMin,
            humiditeMax: humiditeMax,
            indiceUVMin: indiceUVMin,
            indiceUVMax: indiceUVMax,
            visibiliteMin: visibiliteMin,
            pluie: pluie
        })
        updateSeuils(
            user.current.place, {
            temperatureMin: temperatureMin,
            temperatureMax: temperatureMax,
            vitesseVentMax: vitesseVentMax,
            humiditeMin: humiditeMin,
            humiditeMax: humiditeMax,
            indiceUVMin: indiceUVMin,
            indiceUVMax: indiceUVMax,
            visibiliteMin: visibiliteMin,
            pluie: pluie
        }
        );
        navigation.navigate("/place");
    }
    useEffect(() => {
    }, []);

    return (
        <SafeAreaView className=" h-screen w-screen bg-white">
            <StatusBar backgroundColor={"#FFF"} barStyle="dark-content" />
            <View className=" w-full h-full flex flex-col bg-white" style={{ gap: isLoading ? 0 : 30 }}>
                <Icon name="chevron-left" size={30} color="#000" style={{ position: "absolute", top: 0, left: 10, padding: 20 }} onPress={() => navigation.navigate("/place")} />
                <View className=" mt-[10%] w-2/5 aspect-square self-center">
                    <Image
                        source={require("../../../assets/Logo.png")}
                        resizeMode="contain"
                        className=" w-full h-full"
                    />
                </View>
                <Text className=" w-[70%] self-center text-center text-3xl font-bold text-DarkBlue">
                    {
                        user.current.place
                    }
                </Text>
                <Text className=" w-[90%] self-center text-base">Je veux être alerté quand:</Text>
                <KeyboardAvoidingView style={{ flex: 1, width: "80%", alignSelf: "center" }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <ScrollView contentContainerStyle={{ minHeight: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", }} style={{ width: "100%", flex: 1 }} overScrollMode="never" nestedScrollEnabled={true} >
                        <View className=" flex-1 w-full flex flex-col justify-start" style={{ gap: 10 }}>
                            <View className=" w-full flex flex-row" style={{ gap: 20 }}>
                                <View className=" flex-1">
                                    <CustomTextInput
                                        label="Temp Min"
                                        value={temperatureMin}
                                        setValue={setTemperatureMin}
                                        center={true}
                                        number={true}
                                    />
                                </View>
                                <View className=" flex-1">
                                    <CustomTextInput
                                        label="Temp Max"
                                        value={temperatureMax}
                                        setValue={setTemperatureMax}
                                        center={true}
                                        number={true}
                                    />
                                </View>
                            </View>
                            <View className=" w-full flex flex-row" style={{ gap: 20 }}>
                                <View className=" flex-1">
                                    <CustomTextInput
                                        label="Hum. Min"
                                        value={humiditeMin}
                                        setValue={setHumiditeMin}
                                        center={true}
                                        number={true}
                                    />
                                </View>
                                <View className=" flex-1">
                                    <CustomTextInput
                                        label="Hum. Max"
                                        value={humiditeMax}
                                        setValue={setHumiditeMax}
                                        center={true}
                                        number={true}
                                    />
                                </View>
                            </View>
                            <View className=" w-full flex flex-row" style={{ gap: 20 }}>
                                <View className=" flex-1">
                                    <CustomTextInput
                                        label="Ind UV Min"
                                        value={indiceUVMin}
                                        setValue={setIndiceUVMin}
                                        center={true}
                                        number={true}
                                    />
                                </View>
                                <View className=" flex-1">
                                    <CustomTextInput
                                        label="Ind UV Max"
                                        value={indiceUVMax}
                                        setValue={setIndiceUVMax}
                                        center={true}
                                        number={true}
                                    />
                                </View>
                            </View>
                            <View className=" w-full flex flex-row" style={{ gap: 20 }}>
                                <View className=" flex-1">
                                    <CustomTextInput
                                        label="Visibilite Min"
                                        value={visibiliteMin}
                                        setValue={setVisibiliteMin}
                                        center={true}
                                        number={true}
                                    />
                                </View>
                                <View className=" flex-1">
                                    <CustomTextInput
                                        label="V.Vent Max"
                                        value={vitesseVentMax}
                                        setValue={setVitesseVentMax}
                                        center={true}
                                        number={true}
                                    />

                                </View>
                            </View>
                            <View className=" w-full flex flex-row items-center">
                                <Checkbox
                                    status={pluie ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setpluie(!pluie);
                                    }}
                                    color="#5284C7"
                                    uncheckedColor="#5284C7"
                                />
                                <Text className=" text-xl">Pluie</Text>
                            </View>
                            <View>
                                <CustomButton
                                    fill={"#208BE8"}
                                    text={"Configurer mon Alerte"}
                                    width={"70%"}
                                    onPress={onPressSave}

                                />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
};

export default Seuils;