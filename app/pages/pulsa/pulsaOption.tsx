import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type PulsaOptionProps ={
pulsa:string
amount:string
onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default function PulsaOption(props:PulsaOptionProps) {
    return (
        
        <TouchableOpacity 
        onPress= {props.onPress}
        style={styles.container} >
            <Text style={styles.textPulsa}>{props.pulsa}</Text>
            <View>
                <Text style={styles.textPrice}>Price</Text>
                <Text style={styles.textAmount}>Rp.{props.pulsa}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4CD080",
        padding: 20,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 16
    },
    textPulsa: {
        fontSize: 30,
        color: "white"
    },
    textPrice: {
        fontSize: 10,
        color: "white"
    },
    textAmount: {
        fontSize: 20,
        color: "white"
    }
});