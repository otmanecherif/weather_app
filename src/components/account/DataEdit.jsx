import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import handleEditInfo from "../../data/auth/handleEditInfo";

const DataEdit = ({ onPressSave }) => {
    const { user, setUserData } = useAppContext();
    const [nom, setNom] = useState(user.user.nom);
    const [prenom, setPrenom] = useState(user.user.prenom);
    const [email, setEmail] = useState(user.user.email);
    const [adresse, setAdresse] = useState(user.user.adresse);
    const [codePostal, setCodePostal] = useState(user.user.codePostal);
    const [pays, setPays] = useState(user.user.pays);
    const [numVoie, setNumVoie] = useState(user.user.numVoie);
    const onPressSaveEdit = async () => {
        await handleEditInfo(user.user.uid, nom, prenom, email, adresse, codePostal, pays, numVoie).then((res) => {
            setUserData(user.user.uid, nom, prenom, email, adresse, codePostal, pays, numVoie, user.lieux);
            onPressSave();
        })
    }
    return (
        <View className=" w-full h-full flex flex-col" style={{ gap: 20 }} >
            <View className=" w-[80%] self-center flex flex-col " style={{ gap: 10 }}>
                <TextInput
                    className=" bg-slate-300 rounded-2xl py-2 px-4 text-base text-black"
                    value={nom}
                    onChangeText={setNom}
                    placeholder="Nom"
                    placeholderTextColor="grey"
                />
                <TextInput
                    className=" bg-slate-300 rounded-2xl py-2 px-4 text-base text-black"
                    value={prenom}
                    onChangeText={setPrenom}
                    placeholder="Prénom"
                    placeholderTextColor="grey"
                />
                <TextInput
                    className=" bg-slate-300 rounded-2xl py-2 px-4 text-base text-black"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor="grey"
                />
                <View className=' flex flex-row' style={{ gap: 10 }}>
                    <TextInput
                        className=" bg-slate-300 flex-1 rounded-2xl py-2 px-4 text-base text-black"
                        value={numVoie}
                        onChangeText={setNumVoie}
                        placeholder="N°"
                        placeholderTextColor="grey"
                    />
                    <TextInput
                        className=" bg-slate-300 flex-1 rounded-2xl py-2 px-4 text-base text-black"
                        value={codePostal}
                        onChangeText={setCodePostal}
                        keyboardType="numeric"
                        placeholder="Code Postal"
                        placeholderTextColor="grey"
                    />
                </View>
                <TextInput
                    className=" bg-slate-300 rounded-2xl py-2 px-4 text-base text-black"
                    value={adresse}
                    onChangeText={setAdresse}
                    placeholder="Adresse"
                    placeholderTextColor="grey"
                />
                <TextInput
                    className=" bg-slate-300 rounded-2xl py-2 px-4 text-base text-black"
                    value={pays}
                    onChangeText={setPays}
                    placeholder="Pays"
                    placeholderTextColor="grey"
                />
            </View>
            <View className=' w-[80%] flex flex-row self-center' style={{ gap: 20 }}>
                <TouchableOpacity className=" flex-1 bg-LightBlue py-2 px-3 rounded-3xl" onPress={onPressSaveEdit}>
                    <Text className=" text-center text-base">Enregistrer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DataEdit;