import { Image, ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import BpjsOption from "./bpjsOption";

export default function BpjsList() {
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <ScrollView>
                <BpjsOption bpjs="20.000"  onPress={() => router.navigate("/pages/payment/paymentBpjs")}/>
                    <BpjsOption bpjs="50.000"  onPress={() => router.navigate("/pages/payment/paymentBpjs")}/>
                    <BpjsOption bpjs="100.000"  onPress={() => router.navigate("/pages/payment/paymentBpjs")}/>
                    <BpjsOption bpjs="200.000"  onPress={() => router.navigate("/pages/payment/paymentBpjs")}/>
                    <BpjsOption bpjs="1.000.000"  onPress={() => router.navigate("/pages/payment/paymentBpjs")}/>
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