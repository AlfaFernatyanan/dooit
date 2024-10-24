import { StyleSheet, Text, View } from "react-native";
import Pin from "../pin/pin";

export default function QrisPage() {
    return (
        <View style={styles.headline}>
            <Pin/>
            {/* <Text style={styles.title}>Qris Page</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    headline: {
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 18,
        marginTop: 0,
        height: '100%',
    },
    title: {
        textAlign: 'center',
    }
});