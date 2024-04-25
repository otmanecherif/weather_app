import { View, StyleSheet, ActivityIndicator } from "react-native"
import { Button } from "react-native-paper"

const CustomButton = ({fill, text, onPress, textColor, fontSize, disabled, width, loading}) => {
    return (
        <View className={` flex justify-center items-center self-center`} style={{width:width}}>
            {
                loading ?
                <View style={{...styles.ButtonStyle, backgroundColor:fill}} >
                    <ActivityIndicator color={"#FFF"} size="large" />
                </View>
                :
                <Button  style={styles.ButtonStyle} mode="contained" disabled={disabled} buttonColor={fill} onPress={onPress} textColor={textColor} labelStyle={{fontSize:fontSize}}>{text}</Button>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonStyle:{    
        width:"100%",
        height:50,
        justifyContent:"center",
        borderRadius:10,
    }
})
export default CustomButton