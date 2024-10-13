import { StyleSheet, Text, View } from "react-native";
import InputPhoneField from "./inputPhoneField";
import ProviderLogo from "./providerLogo";
import OptionSection from "./optionSection";
import PulsaList from "./pulsaList";

export default function PulsaPage() {
    return (
        <View style={styles.container}>
            <ProviderLogo />
            <InputPhoneField />
            <OptionSection />
            <PulsaList />

        </View>
    );
}

const styles = StyleSheet.create({
   container :{
    padding : 16,
    backgroundColor: "white",
    height: "100%"
   }
});