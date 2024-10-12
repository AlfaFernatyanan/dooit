import { Href, Link, Navigator, router } from "expo-router";
import { ColorValue, GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ImageButtonProps = {
  icon: ImageSourcePropType,
  size: number,
  color: ColorValue | undefined,
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const ImageButton = (props: ImageButtonProps) => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={{...styles.button, backgroundColor: props.color}}>
        <Image
          source={props.icon}
          style={{width:props.size, height:props.size}}
          resizeMode="contain"
        />
      </TouchableOpacity>
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
    borderRadius: 5
  },
});

export default ImageButton;