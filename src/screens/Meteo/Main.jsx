import { View, StatusBar, SafeAreaView, Text, TouchableOpacity, TextInput, ActivityIndicator, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppContext } from "../../context";
import getCities from "../../data/meteo/getCities";
import ajouterVille from "../../data/meteo/ajouterVille";
import getMeteo from "../../data/meteo/getMeteo";
import getTemperature from "../../data/meteo/getTemperature";
import quandNotifierUtilisateur from "../../data/quandNotifierUtilisateur";

const Main = ({ navigation }) => {
    const { user, addLieu, addCurrent } = useAppContext();
    const [etat, setEtat] = useState("Start")
    const [recherche, setRecherche] = useState("");
    const [refresh, setRefresh] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [temperatures, setTemperatures] = useState(Array(user.lieux.length).fill(null));

    const temperatureFetch = async () => {
        user.lieux.map(async (ville, index) => {
            await getTemperature(ville.lat, ville.lng).then(res => {
                let tempTemperatures = temperatures;
                tempTemperatures[index] = res;
                setTemperatures(tempTemperatures);
            })
        })
    }

    useEffect(() => {
        temperatureFetch();
        const intervalId = setInterval(async () => {
            if (!isLoading) {
                clearInterval(intervalId);
                return;
            }
            if (temperatures.filter(e => e === null).length === 0) {
                setIsLoading(false);
            }
        }, 500);

        return () => clearInterval(intervalId);
    }, [refresh, user.lieux.length])

    const onPressLieu = async (index) => {
        setRefresh(refresh + 1);
        await getMeteo(user.lieux[index].lat, user.lieux[index].lng, user.lieux[index].nom).then(res => {
            addCurrent({ ...res, ...user.lieux[index] })
            navigation.navigate("/place")
        })
    }

    const onPressAjouterLieu = (index) => {
        addLieu(results[index]);
        ajouterVille(user.user.uid, results[index].nom, results[index].latitude, results[index].longitude)
        setIsLoading(true);
        setEtat("Start");
        setRecherche("");
        setRefresh(refresh + 1);
    }
    const onPressSearch = async () => {
        setEtat("Loading");
        await getCities(recherche).then(res => {
            setResults(res);
            setEtat("Search");
        })
    }
    return (
        <SafeAreaView className=" h-screen w-screen bg-white">
            <StatusBar backgroundColor={"#5284C7"} barStyle="dark-content" />
            <View className=" w-full h-full flex flex-col bg-white" style={{ gap: isLoading ? 0 : 30 }}>
                <View className=" w-full h-[10%] bg-TransparentBlue flex flex-row justify-center items-center">
                    <TouchableOpacity onPress={() => navigation.navigate("/auth/account")} className="p-4">
                        <Icon name="user" size={40} color="#FFF" />
                    </TouchableOpacity>
                    <View className=" pl-4 flex-1 h-[50%] opacity-40 bg-white rounded-3xl flex flex-row" >
                        <TouchableOpacity onPress={onPressSearch} className=" flex justify-center items-center">
                            <Icon name="search" size={25} color="#FFF" />
                        </TouchableOpacity>
                        <TextInput
                            onSubmitEditing={onPressSearch}
                            className="w-full h-full py-2 px-2 text-black rounded-3xl text-base"
                            placeholder="Rechercher"
                            placeholderTextColor={'rgba(0, 0, 0, 100)'}
                            value={recherche}
                            onChangeText={(text) => setRecherche(text)}
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("/notifications")} className="p-4">
                        <Icon name="bell" size={40} color="#FFF" />
                    </TouchableOpacity>
                </View>
                {
                    isLoading ?
                        <>
                            <View className=" w-full flex-1 flex justify-center items-center">
                                <ActivityIndicator
                                    className="self-center"
                                    size="large"
                                    color="#004AAC"
                                />
                            </View>
                        </>
                        :
                        (
                            <>
                                {
                                    etat === "Start" &&
                                    <View style={{ width: "70%", flex: 1, alignSelf: "center", paddingBottom: 10 }}>
                                        <ScrollView contentContainerStyle={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                            {
                                                user.lieux.map((lieu, index) => {
                                                    return (
                                                        <TouchableOpacity className=" bg-TransparentBlue relative rounded-2xl opacity-50 py-2 px-4 flex flex-row justify-between" onPress={() => { onPressLieu(index) }} key={index}>
                                                            {
                                                                lieu.current &&
                                                                <Icon name="bullseye" size={25} style={{ position: "absolute", top: 10, left: 10 }} color="#000" />
                                                            }
                                                            <Text className="text-lg flex-1" numberOfLines={1} style={{ paddingLeft: lieu.current ? 30 : 0, color: '#FFFFFF' }}>{lieu.nom}</Text>
                                                            <Text className="text-lg font-bold" style={{ color: 'darkblue' }}>{temperatures[index]}°C</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </ScrollView>
                                    </View>
                                }
                                {
                                    etat === "Loading" &&
                                    <View className=' w-[70%] self-center flex flex-col'>
                                        <Text className="text-lg font-bold text-center">Chargement...</Text>
                                    </View>
                                }
                                {
                                    etat === "Search" &&
                                    <View className=' w-[70%] self-center flex flex-col' style={{ gap: 20 }}>
                                        {
                                            results.length === 0 ?
                                                <>
                                                    <TouchableOpacity onPress={() => setEtat("Start")} className=" flex justify-center items-center p-4 absolute -top-4 -left-4" >
                                                        <Icon name="chevron-left" size={28} color="#000" />
                                                    </TouchableOpacity>
                                                    <Text className="text-lg font-bold text-center">Aucun résultat</Text>
                                                </>
                                                :
                                                <>
                                                    <TouchableOpacity onPress={() => setEtat("Start")} className=" flex justify-center items-center p-4 absolute -top-4 -left-14" >
                                                        <Icon name="chevron-left" size={28} color="#000" />
                                                    </TouchableOpacity>
                                                    {
                                                        results.map((lieu, index) => {
                                                            return (
                                                                <TouchableOpacity className=" bg-TransparentBlue relative rounded-2xl opacity-50 py-2 px-4 flex flex-row justify-between" onPress={() => { onPressAjouterLieu(index) }} key={index}>
                                                                    <Icon name="plus" size={25} style={{ position: "absolute", top: 12, left: 10 }} color="#000" />
                                                                    <Text className="text-lg font-bold" style={{ paddingLeft: 25 }}>{lieu.nom}</Text>
                                                                </TouchableOpacity>
                                                            )
                                                        })}
                                                </>
                                        }
                                    </View>
                                }
                            </>
                        )
                }
            </View>
        </SafeAreaView>
    );
};

export default Main;
