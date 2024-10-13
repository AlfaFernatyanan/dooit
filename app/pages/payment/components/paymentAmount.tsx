import { StyleSheet, Text, View } from "react-native";

export default function PaymentAmount() {
    return (
        <View style={styles.container}>

            <Text style={styles.amount}>10000</Text>
            <View style={styles.wrapper}>
                <Text style={styles.wrapperText}>
                    Total Payment Rp 11.500 has been applied
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 60
    },
    amount: {
        fontSize: 48,
        color: "white",
        marginBottom: 16,
        fontWeight: "600"
    },
    wrapper: {
        backgroundColor: "background: rgba(255, 255, 255, 0.1)",
        borderRadius: 16,
        padding: 16
    },
    wrapperText: {
        color: "white",
        fontSize: 14,
        fontWeight: "500"
    }
});