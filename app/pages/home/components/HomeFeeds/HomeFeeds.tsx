import { ImageSourcePropType, Text, View } from "react-native";
import FeedsItem from "./FeedsItem";



export default function HomeFeeds() {
    return (
        <View>
            <Text>HomeAppBar</Text>
            <FeedsItem image={require("@/assets/images/CardA.png")} />
            <FeedsItem image={require("@/assets/images/CardB.png")} />
        </View>
    )
}