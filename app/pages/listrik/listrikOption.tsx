import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ListrikOptionProps ={
listrik:string
onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default function ListrikOption(props:ListrikOptionProps) {
    return (
        
        <TouchableOpacity 
        onPress= {props.onPress}
        style={styles.container} >
            <Text style={styles.textlistrik}>Rp. {props.listrik}</Text>
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
    textlistrik: {
        textAlign: "center",
        fontSize: 30,
        color: "white"
    },
});