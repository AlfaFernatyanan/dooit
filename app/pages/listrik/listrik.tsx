import { StyleSheet, Text, View } from "react-native";
import InputListrikField from "./inputListrikField";
import ListrikOption from "./listrikOption";
import ListrikList from "./listrikList";

export default function ListrikPage() {
    return (
        <View style={styles.container}>
            <InputListrikField/>
           <ListrikList/>
            <Text style={styles.title}></Text>
        </View> 
    );
}

const styles = StyleSheet.create({
   container:{
    padding : 16,
    backgroundColor: "white",
    height: "100%"
   },
   title:{

   }
});