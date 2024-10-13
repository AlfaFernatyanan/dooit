import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type PaymentLogoProps = {
    source: ImageSourcePropType | undefined
    title : string
    date : string
}

export default function PaymentLogo(props:PaymentLogoProps) {
    return (
        <View style={styles.container}>
             <Image
                source={props.source}
                style={styles.image}
            />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.date}>{props.date}</Text>
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