import { Image, StyleSheet, Text, View } from "react-native";

export default function ProviderLogo() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container} >
                <Image
                    source={require("@/assets/images/telkomsel.png")}
                    style={styles.image}
                />
                <Text style={styles.title}>Telkomsel</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    wrapper: {
        alignItems: "baseline"
    },
    container: {
        backgroundColor: "#F2F2F2",
        flexDirection: "row",
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16
    },
    image: {
        width: 32,
        height: 32,
    },
    title: {
        color: "#0F5332",
        fontWeight: "700",
        fontSize: 20
    }
});