// https://medium.com/@rl.myrie2/learn-react-native-with-me-building-a-simple-calculator-app-21b65fcf4d9b

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  

  const [result, setResult] = useState('');

  return (

    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Result: {result}</Text>
        <TextInput style={styles.input} name="number1" inputMode='numeric' value={number1} onChangeText={(e) => setNumber1(e)} />
        <TextInput style={styles.input} name="number2" inputMode='numeric' value={number2} onChangeText={(e) => setNumber2(e)} />

        <View style={styles.operators}>
          <Button
            title="+"
            onPress={() => {
              setResult(Number(number1) + Number(number2));
            }}
          />
          <Button
            title=" -"
            onPress={() => {
              setResult(Number(number1) - Number(number2));
            }}
          />

        </View>
        <StatusBar style="auto" />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '50%',
  },
  operators: {
    flexDirection: 'row',
    width: '20%',
    marginTop: 20,
    justifyContent: 'space-between',
  }
});
