import { Href, Link, Navigator, router } from "expo-router";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageButton from "./ImageButton";

type CategoryButtonProps = {
  icon: ImageSourcePropType,
  title: string,
  uri: Href<string | object>
}

const AppBarButton = (props: CategoryButtonProps) => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <ImageButton
        size={30}
        color={'#4CD080'}
        icon={props.icon}
        onPress={() => router.navigate(props.uri)} />
      <Text style = {styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F6FAFD',
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    color : "white"
  }
});

export default AppBarButton;