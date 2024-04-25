import { View, Text, TouchableOpacity } from "react-native";
import { useAppContext } from "../../context";
import { useEffect } from "react";

const DataView = ({ onPressEdit, onPressEditPassword }) => {
    const { user } = useAppContext();
    return (
        <View className=" w-full h-full flex flex-col" style={{ gap: 20 }} >
            <View className=" w-[80%] self-center flex flex-col " style={{ gap: 10 }}>
                <Text className=" bg-slate-400 opacity-40 rounded-2xl py-2 px-4 text-base">{user.user.nom ? user.user.nom : "Nom"}</Text>
                <Text className=" bg-slate-400 opacity-40 rounded-2xl py-2 px-4 text-base">{user.user.prenom ? user.user.prenom : "Prénom"}</Text>
                <Text className=" bg-slate-400 opacity-40 rounded-2xl py-2 px-4 text-base">{user.user.email ? user.user.email : "Email"}</Text>
                <View className=' flex flex-row' style={{ gap: 10 }}>
                    <Text className=" flex-1 bg-slate-400 opacity-40 rounded-2xl py-2 px-4 text-base">{user.user.numVoie ? user.user.numVoie : "N°"}</Text>
                    <Text className=" flex-1 bg-slate-400 opacity-40 rounded-2xl py-2 px-4 text-base">{user.user.codePostal ? user.user.codePostal : "Code Postal"}</Text>
                </View>
                <Text className=" bg-slate-400 opacity-40 rounded-2xl py-2 px-4 text-base">{user.user.adresse ? user.user.adresse : "Adresse"}</Text>
                <Text className=" bg-slate-400 opacity-40 rounded-2xl py-2 px-4 text-base">{user.user.pays ? user.user.pays : "Pays"}</Text>
            </View>
            <View className=' w-[80%] flex flex-row self-center' style={{ gap: 20 }}>
                <TouchableOpacity className=" flex-1 bg-LightBlue py-2 px-3 rounded-3xl" onPress={onPressEdit}>
                    <Text className=" text-center text-base">Modifier mes informations</Text>
                </TouchableOpacity>
                <TouchableOpacity className=" flex-1 bg-LightBlue py-2 px-3 rounded-3xl" onPress={onPressEditPassword}>
                    <Text className=" text-center text-base">Modifier mon mot de passe</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DataView;