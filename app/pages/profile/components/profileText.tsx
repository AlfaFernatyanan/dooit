import { StyleSheet, Text, View } from "react-native";

type ProfileTextProps = {
    title:string,
    text:string
}

export default function ProfileText(props:ProfileTextProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.title}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       flexDirection: "row",
       justifyContent : "space-between"

    },
    title: {
        textAlign: 'center',
        color : "#030319",
        fontWeight: "bold",
        fontSize: 20
    }
});