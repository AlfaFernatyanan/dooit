import { Image, ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import PulsaOption from "./pulsaOption";
import { router } from "expo-router";

export default function PulsaList() {
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <ScrollView>
                    <PulsaOption pulsa="5.000" amount="6.500" onPress={() => router.navigate("/pages/payment/paymentPulsa")}/>
                    <PulsaOption pulsa="10.000" amount="11.500" onPress={() => router.navigate("/pages/payment/paymentPulsa")}/>
                    <PulsaOption pulsa="20.000" amount="21.500" onPress={() => router.navigate("/pages/payment/paymentPulsa")}/>
                    <PulsaOption pulsa="50.000" amount="51.500" onPress={() => router.navigate("/pages/payment/paymentPulsa")}/>
                    <PulsaOption pulsa="100.000" amount="101.500" onPress={() => router.navigate("/pages/payment/paymentPulsa")}/>
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