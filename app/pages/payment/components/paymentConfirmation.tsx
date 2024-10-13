import { router } from "expo-router";
import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type PaymentConfirmationProps = {
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function PaymentConfirmation(props : PaymentConfirmationProps) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Payment</Text>
            <View style={styles.wrapper}>
                <View style={styles.wrapperImage} >
                    <Image
                        source={require("@/assets/images/Logo.png")}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text style={styles.wrapperText}>
                        Saldo dooit
                    </Text>

                    <Text style={styles.wrapperAmount}>
                        Rp. 3.000.000
                    </Text>
                </View>


            </View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonConfirm} >
                <Text style={styles.textButtonConfirm}>{"Proceed to Pay"}</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "60%",
        marginTop: 16,
        padding: 16,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    title: {
        fontWeight: "700",
        fontSize: 18
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        padding: 16,
        backgroundColor: "#F2F2F2"
    },
    wrapperImage: {
        backgroundColor: "white",
        borderRadius: 16,
        marginRight: 16
    },
    image: {
        width: 48,
        height: 40,
    },

    wrapperText: {
        color: "#030319",
        fontSize: 14,
        fontWeight: "400"
    },
    wrapperAmount: {
        color: "#8F92A1"
    },
    buttonConfirm: {
        backgroundColor: "#4CD080",
        padding: 20,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 16
    },
    textButtonConfirm: {
        fontSize: 16,
        color: "white"
    }
});