import { StyleSheet, Text, View } from "react-native";
import SettingsRow from "./SettingsRow";
import Balance from "./Balance";
import AppBar from "./AppBar";

export default function HomeAppBar() {
    return (
        <View style={styles.container}>
            <SettingsRow />
            <Balance />
            <AppBar />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

    }
})