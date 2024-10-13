import { Image, StyleSheet, Text, View } from "react-native";

export default function PaymentLogo() {
    return (
        <View style={styles.container}>
             <Image
                source={require("@/assets/images/telkomsel.png")}
                style={styles.image}
            />
            <Text style={styles.title}>Paket Data</Text>
            <Text style={styles.date}>Payment on Oct 6, 2024</Text>
        </View>
    );
}

const styles = StyleSheet.create({
container : {
    alignItems: "center",
    paddingTop: 50
},
image :{
    height: 78,
    width: 78,
},
title: {
    fontSize : 24,
    fontWeight : "700",
    color: "white",
    marginVertical: 15  
},
date:{
    color: "#FFAE58",
    fontWeight: "500",
    fontSize: 14
}
});