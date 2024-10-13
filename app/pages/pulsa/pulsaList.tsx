import { Image, ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import PulsaOption from "./pulsaOption";
import { router } from "expo-router";

export default function PulsaList() {
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <ScrollView>
                    <PulsaOption pulsa="5000" amount="6500" onPress={() => router.navigate("/pages/payment/payment")}/>
                    <PulsaOption pulsa="5000" amount="6500" onPress={() => router.navigate("/pages/payment/payment")}/>
                    <PulsaOption pulsa="5000" amount="6500" onPress={() => router.navigate("/pages/payment/payment")}/>
                    <PulsaOption pulsa="5000" amount="6500" onPress={() => router.navigate("/pages/payment/payment")}/>
                    <PulsaOption pulsa="5000" amount="6500" onPress={() => router.navigate("/pages/payment/payment")}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height:"80%"
    }
});