import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";


type FeedsItemProp = {
    image : ImageSourcePropType,
}

export default function FeedsItem(props : FeedsItemProp ) {
    return (
        <View style = {styles.container}>
            <Image source={props.image}></Image>
        </View>
    )
} 

const styles = StyleSheet.create({
container : {
marginVertical : 10
}
})