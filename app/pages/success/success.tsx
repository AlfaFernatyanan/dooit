import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import SuccessHeader from "./components/SuccessHeader";
import SuccessBody from "./components/SuccessBody";

export default function SuccessPage() {
    return (
        <View style={styles.container}>
            <SuccessHeader/>
            <SuccessBody/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#105D38",
        height: "100%",
        padding:16
    },
    title: {
        textAlign: 'center',
    },
    header:{
        height:100,
    }
});