import CategoryButton from "@/components/CategoryButtons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function OptionSection() {
    return (
        <View style={styles.container} >
            <CategoryButton icon={require("@/assets/icons/internet.png")} title="PAKET DATA" uri="/pages/maintenance/maintenance" />
            <CategoryButton icon={require("@/assets/icons/pulsa.png")} title="PULSA" uri="/pages/maintenance/maintenance" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: "row"
    }
});