import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeAppBar from "./components/HomeAppBar/HomeAppBar";
import HomePaymentList from "./components/HomePaymentList";
import HomeFeeds from "./components/HomeFeeds/HomeFeeds";

export default function HomePage() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                    <HomeAppBar />
                    <HomePaymentList />
                    <HomeFeeds />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
       padding: 16
    },
    title: {
        textAlign: 'center',
    }
});