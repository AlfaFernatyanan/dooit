import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function InputBpjsField() {
  const [bpjsNumber, onChangeText] = React.useState('');
  return (
    <View style={styles.container} >
      <Text style={styles.bpjsLabel}>ID Pelanggan</Text>
      <TextInput
        style={styles.input}
        value={bpjsNumber}
        onChangeText={onChangeText}
        placeholder="input Bpjs number"
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
  bpjsLabel: {
    color: "#8F92A1"
  }
});