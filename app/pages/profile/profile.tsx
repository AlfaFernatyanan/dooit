import { StyleSheet, Text, View } from "react-native";
import ProfileText from "./components/profileText";
import ProfileAvatar from "./components/profileAvatar";
import ImageButton from "@/components/ImageButton";

export default function ProfilePage() {
    return (
        <View style={styles.container}>
            <ProfileAvatar />
            <Text style={styles.nama}>Alfa In Septian Fernatjanan</Text>

            <View style={styles.dataContainer}>
                <ProfileText title="NIM" text="00000099402" />
                <ProfileText title="DOB" text="18 September 2005" />
                <View style = {styles.button}>
                <ImageButton
                    size={30}
                    color={'#4D4D4D'}
                    icon={require("@/assets/icons/EN.png")}
                    onPress={() => console.log("change language EN")} />
                <ImageButton
                    size={30}
                    color={'#4D4D4D'}
                    icon={require("@/assets/icons/darkmode.png")}
                    onPress={() => console.log("cetak dark mode")} />
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#105D38",
        height: "100%",
        paddingTop: 32,
        alignContent: "center",
        alignItems: "center"
    },
    dataContainer: {
        backgroundColor: "#F4F6FF",
        height: "60%",
        padding: 16,
        width: "100%",
        paddingTop: 30,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        flex: 1,
        flexDirection: "column",
        alignContent: "flex-start"

    },
    nama: {
        marginTop: 11,
        marginBottom: 28,
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 24

    },
    button : {
        flex:1,
        flexDirection :"row",
        
    }

});