import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BpjsOptionProps ={
bpjs:string
onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default function BpjsOption(props:BpjsOptionProps) {
    return (
        
        <TouchableOpacity 
        onPress= {props.onPress}
        style={styles.container} >
            <Text style={styles.textBpjs}>Rp. {props.bpjs}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: "#4CD080",
        padding: 20,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 16
    },
    textBpjs: {
        textAlign: "center",
        fontSize: 30,
        color: "white"
    },
});