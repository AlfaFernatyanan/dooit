import AppBarButton from "@/components/AppBarButton"
import { StyleSheet, Text, View } from "react-native"

export default function AppBar() {
    return (
        <View style={styles.container}>
            <AppBarButton icon={require("@/assets/icons/transfer.png")} title="Transfer" uri={"/pages/maintenance/maintenance"}/>
            <AppBarButton icon={require("@/assets/icons/topup.png")} title="Top up" uri={"/pages/maintenance/maintenance"}/>
            <AppBarButton icon={require("@/assets/icons/history.png")} title="History" uri={"/pages/maintenance/maintenance"}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection : "row",
        justifyContent : "space-between",
        backgroundColor : "#4CD080",
        padding: 10,
        borderRadius: 19,
        marginVertical: 15
    }
})