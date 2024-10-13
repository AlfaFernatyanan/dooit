import { StyleSheet, Text, View } from "react-native";
import PaymentLogo from "./components/paymentLogo";
import PaymentAmount from "./components/paymentAmount";
import PaymentConfirmation from "./components/paymentConfirmation";

export default function PaymentPage() {
    return (
        <View style={styles.container}>
            <PaymentLogo/>
            <PaymentAmount/>
            <PaymentConfirmation/>
        </View>
    );
}

const styles = StyleSheet.create({
container : {
        backgroundColor: "#105D38",
        height: "100%"
}
});