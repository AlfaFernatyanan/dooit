import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import SuccessHeader from "./components/SuccessHeader";
import SuccessBody from "./components/SuccessBody";

type SuccessProps = {
    description : string
    paymentAmount : string
    operatorDescription : string
    icon: ImageSourcePropType | undefined
    operatorText: string
    secondTitle : string
}
export default function Success(props:SuccessProps) {
    return (
        <View style={styles.container}>
            <SuccessHeader />
            <SuccessBody
                description={props.description}
                paymentAmount={props.paymentAmount}
                operatorDescription={props.operatorDescription}
                icon={props.icon}
                operatorText={props.operatorText}
                secondTitle={props.secondTitle}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#105D38",
        height: "100%",
        padding: 16
    },
    title: {
        textAlign: 'center',
    },
    header: {
        height: 100,
    }
});