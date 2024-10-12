import CategoryButton from "@/components/CategoryButtons";
import { StyleSheet, Text, View } from "react-native";

export default function HomePaymentList() {
    return (
        <View>
            <Text>Payment List</Text>
            <View style={styles.grid}>
                <CategoryButton icon={require("@/assets/icons/bpjs.png")} title="BPJS" uri="/pages/bpjs/bpjs" />
                <CategoryButton icon={require("@/assets/icons/listrik.png")} title="LISTRIK" uri="/pages/listrik/listrik" />
                <CategoryButton icon={require("@/assets/icons/pulsa.png")} title="PULSA" uri="/pages/pulsa/pulsa" />
                <CategoryButton icon={require("@/assets/icons/more.png")} title="MORE" uri="/pages/maintenance/maintenance" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    grid:{
        flex:4,
        flexDirection:"row"
    }
})