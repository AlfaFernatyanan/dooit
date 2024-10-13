import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function InputListrikField() {
  const [listrikNumber, onChangeText] = React.useState('');
  return (
    <View style={styles.container} >
      <Text style={styles.listrikLabel}>ID Pelanggan</Text>
      <TextInput
        style={styles.input}
        value={listrikNumber}
        onChangeText={onChangeText}
        placeholder="Input listrik number"
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
  listrikLabel: {
    color: "#8F92A1",
    fontSize: 16,
    fontWeight: "regular"
  }
});