import { View, Text } from "react-native";
import { useEffect } from "react";

const NotificationsCard = ({ data }) => {
    return (
        <View className=" w-[85%] self-center bg-TransparentBlue opacity-70 rounded-3xl flex flex-col py-3">
            <Text className=" text-xl text-center text-DarkBlue font-semibold">{data.ville}</Text>
            <View className=" flex flex-col">
                {
                    Object.keys(data).map((key, index) => {
                        if (key === "pluie")
                            return (
                                <View className=" flex flex-row justify-between px-5 py-2" key={index}>
                                    <Text className=" text-lg text-center">Pluie</Text>
                                </View>
                            )
                        else if (key !== "ville")
                            return (
                                <View className=" flex flex-row justify-between px-5 py-2" key={index}>
                                    <Text className=" text-lg ">{key}</Text>
                                    <Text className=" text-lg">{data[key]}</Text>
                                </View>
                            )
                    })
                }
            </View>
        </View>
    );
};

export default NotificationsCard;
