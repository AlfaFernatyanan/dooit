import ImageButton from "@/components/ImageButton"
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"

export default function SettingsRow() {
    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/images/Logo.png")}
                style={styles.image}
                resizeMode="contain"
            />
            {/* <ImageButton
            size={20}
            icon={require("@/assets/icons/listrik.png")}
            onPress={()=> console.log("should be dark mode")}
            /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop:50,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    image: {
        width: 100,
        height: 50
    }
})