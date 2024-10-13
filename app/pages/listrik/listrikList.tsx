import { Image, ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import ListrikOption from "./listrikOption";

export default function ListrikList() {
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <ScrollView>
                    <ListrikOption listrik="20.000"onPress={() => router.navigate("/pages/payment/paymentListrik")}/>
                    <ListrikOption listrik="50.000"onPress={() => router.navigate("/pages/payment/paymentListrik")}/>
                    <ListrikOption listrik="100.000"onPress={() => router.navigate("/pages/payment/paymentListrik")}/>
                    <ListrikOption listrik="200.000"onPress={() => router.navigate("/pages/payment/paymentListrik")}/>
                    <ListrikOption listrik="1.000.000"onPress={() => router.navigate("/pages/payment/paymentListrik")}/>
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