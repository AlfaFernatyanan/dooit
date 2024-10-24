import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Pin() {
  const [pin, setPin] = useState("");
  const [isPinComplete, setIsPinComplete] = useState(false)

  function handlePinPress(digit: number) {
    if (isPinComplete) return;
    const newPin = pin + digit;
    setPin(newPin);
    if (newPin.length === 4) {
      setIsPinComplete(true);
      Alert.alert('Pin Entered', newPin)
    }
  }

  function handleDeletePress() {
    console.log("press delete")
    if (isPinComplete) {
      const newPin = pin.slice(0, -1);
      setPin(newPin);
      setIsPinComplete(false);
    } else {
      const newPin = pin.slice(0, -1);
      setPin(newPin);
      setIsPinComplete(false);  

    }


  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your PIN</Text>
      <View style={styles.pinContainer}>
        {Array(4).fill({ start: 0 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.pinDigit,
              pin.length >= index + 1 && styles.filledDigit
            ]}
          />
        ))}
      </View>
      <View style={styles.keypadContainer}>
        {Array(9).fill({ start: 0 }).map((_, index) => (
          <TouchableOpacity onPress={() => handlePinPress(index + 1)} style={styles.keypadButton} key={index}>
            <Text style={styles.keypadButtonText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}


        <TouchableOpacity onPress={() => handlePinPress(0)} style={styles.keypadButton} >
          <Text style={styles.keypadButtonText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleDeletePress()} style={styles.deleteButton} >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>



      </View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#EBF5F0',
    padding: 10,
    width: '100%',
    paddingVertical: 40
  },

  heading: {
    color: '#46A578',
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 10,
    textTransform: 'uppercase',
    marginBottom: 20
  },

  pinContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  pinDigit: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: 'gray',
  },

  filledDigit: {
    backgroundColor: '#46A578'
  },

  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },

  keypadButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'wrap',
    borderRadius: 50,
    marginVertical: 15,
  },

  keypadButtonText: {
    color: "#46A78",
    fontSize: 35,
    fontWeight: '700'
  },

  deleteButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#BF0603',
    borderRadius: 50,
  },

  deleteButtonText: {
    color: "#FFFFFF",
    fontWeight: '500',
    fontSize: 18
  }
});
