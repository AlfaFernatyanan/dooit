import { StyleSheet, Text, View } from "react-native";
import InputBpjsField from "./inputBpjsField";
import BpjsList from "./bpjsList";

export default function BpjsPage() {
    return (
        <View style={styles.container}>
            <InputBpjsField />
            <BpjsList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding : 16,
        backgroundColor: "white",
        height: "100%"
    },
    title: {}
});