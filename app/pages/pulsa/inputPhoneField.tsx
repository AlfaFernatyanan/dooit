import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function InputPhoneField() {
  const [phoneNumber, onChangeText] = React.useState('');
  return (
    <View style={styles.container} >
      <Text style={styles.phoneLabel}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={onChangeText}
        placeholder="input phone number"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",

  },
  phoneLabel: {
    color: "#8F92A1"
  }
});