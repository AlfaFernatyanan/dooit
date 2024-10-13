import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function SuccessHeader() {
    return (
        <ImageBackground resizeMode="cover" source={require("@/assets/images/Ribbons.png")} style={styles.container}>
            <Text style={styles.title}>Success Page</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop:50,
        color:"white",
        fontSize:20
    },
    container: {
        height: 100,
        alignItems:'center'
    }
});