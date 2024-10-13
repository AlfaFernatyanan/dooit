import { StyleSheet, Text, View } from "react-native";

type PaymentAmountProps = {
    amount: string
    totalPayment: string
}

export default function PaymentAmount(props: PaymentAmountProps) {
    return (
        <View style={styles.container}>

            <Text style={styles.amount}>{props.amount}</Text>
            <View style={styles.wrapper}>
                <Text style={styles.wrapperText}>
                    Total Payment {props.totalPayment} has been applied
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