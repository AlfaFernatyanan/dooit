import { StyleSheet, Text, View } from "react-native";

export default function PulsaPage() {
    return (
        <View style={styles.headline}>
            <Text style={styles.title}>Pulsa Page</Text>
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