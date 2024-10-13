import { GestureResponderEvent, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import PaymentLogo from "./components/paymentLogo";
import PaymentAmount from "./components/paymentAmount";
import PaymentConfirmation from "./components/paymentConfirmation";


type PaymentProps = {
    logo:ImageSourcePropType | undefined
    date:string
    title:string
    amount:string
    totalPayment:string
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function Payment(props:PaymentProps) {
    return (
        <View style={styles.container}>
            <PaymentLogo 
            source={props.logo}
            date={props.date}
            title={props.title}
            />
            <PaymentAmount amount={props.amount} totalPayment={props.totalPayment}/>
            <PaymentConfirmation onPress={props.onPress}/>
        </View>
    );
}


const styles = StyleSheet.create({
container : {
        backgroundColor: "#105D38",
        height: "100%"
}
});