import { Image, StyleSheet, Text, View } from "react-native";



export default function ProfileAvatar() {
    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/images/shincan.jpeg")}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E3FFEE",
        padding: 26,
        marginTop: 97,
        borderRadius : 24
    },
    image: {
        height: 78,
        width: 78,
        borderRadius: 100
    }
});