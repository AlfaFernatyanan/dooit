import { router } from "expo-router";
import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SuccessBodyProps ={
    icon: ImageSourcePropType | undefined;
description : string,
paymentAmount : string,
operatorDescription: string,
operatorText: string,
secondTitle : string
}

export default function SuccessBody(props : SuccessBodyProps) {
    return (
        <ImageBackground resizeMode="stretch" source={require("@/assets/images/Receipt.png")} style={styles.container}>
            <Image style={styles.iconSuccess} source={require("@/assets/images/IconSuccess.png")} />
            <Text style={styles.title}>Payment Success</Text>
            <Text style={styles.description}>Your payment for {props.description} has been successfully done</Text>
            <Text style={styles.paymentText}>Total Payment</Text>
            <Text style={styles.paymentAmount}>Rp {props.paymentAmount}</Text>

            <View style={styles.operatorContainer} >
                <Text style={styles.operatorDescription}>{props.operatorDescription}</Text>
                <View style={styles.operatorWrapper}>
                    <Image style={styles.operatorIcon} source={props.icon} />
                    <View>
                        <Text style={styles.operatorText}>{props.operatorText}</Text>
                        <Text style={styles.date}>{props.secondTitle}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => router.navigate("/")}
                style={styles.successButton} >
                <Text style={styles.successButtonConfirm}>{"Done"}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: "90%",
        alignItems: "center"
    },
    title: {
        color: "#030319",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 24
    },
    iconSuccess: {
        marginTop: 16,
    },
    description: {
        marginTop: 18,
        fontSize: 18,
        textAlign: "center",
        color: "#8F92A1"
    },
    paymentText: {
        marginTop: 10,
        color: "#8F92A1"
    },
    paymentAmount: {
        fontWeight: "bold",
        color: "#030319",
        fontSize: 32,
        paddingBottom: 60
    },
    operatorContainer: {
    },
    operatorWrapper: {
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        flexDirection: "row",
        borderRadius: 16,
        width: 300,
    },
    operatorDescription: {
        paddingBottom: 8,
    },
    operatorIcon: {
        width: 45,
        height: 45,
        margin: 16
    },
    operatorText: {
        color: "#030319",
        fontWeight: "bold",
        fontSize: 18
    },
    date: {

    },
    successButton : {
        backgroundColor: "#4CD080",
        paddingHorizontal: 130,
        paddingVertical: 20,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 16
    },
    successButtonConfirm : {
 fontSize: 16,
        color: "white"
    },

});