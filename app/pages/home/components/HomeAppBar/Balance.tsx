import { StyleSheet, Text, View } from "react-native"

export default function Balance() {
    return (
        <View style={styles.container}>
            <View>
                <Text style ={styles.name}>Hello Alfa,</Text>
                <Text style ={styles.greetings}>Good Morning</Text>
            </View>
            <Text style = {styles.balance}>Rp 900.000</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical : 15,
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    name:{
        fontSize : 18,
        fontWeight : "700",
        color : "#030319",
       
    },
    greetings:{
        fontSize : 14,
        fontWeight : "400",
        color : "#387478"
    },
    balance : {
        fontSize : 20,
        fontWeight : "700",
        color : "#030319"
    }
})