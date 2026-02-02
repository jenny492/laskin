// https://medium.com/@rl.myrie2/learn-react-native-with-me-building-a-simple-calculator-app-21b65fcf4d9b
// https://reactnative.dev/docs/button
// https://reactnative.dev/docs/textinput

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function Calculator({ navigation }) {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const [calculations, setCalculations] = useState([]);

  const [result, setResult] = useState('');

  const calculate = (operation) => {
    let newResult;
    let calcText;
    if (!number1 || !number2) {
      return;
    }
    if (operation === '+') {
      newResult = Number(number1) + Number(number2);
      calcText = number1 + ' + ' + number2 + ' = ' + newResult;
    } else {
      newResult = Number(number1) - Number(number2);
      calcText = number1 + ' - ' + number2 + ' = ' + newResult;
    }
    setResult(newResult);
    setCalculations([...calculations, calcText]); // lisää uuden laskun historyyn
    setNumber1('');
    setNumber2('');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Result: {result}</Text>
        <TextInput
          style={styles.input}
          name="number1"
          inputMode='numeric'
          value={number1}
          onChangeText={(e) => setNumber1(e)}
        />
        <TextInput
          style={styles.input}
          name="number2"
          inputMode='numeric'
          value={number2}
          onChangeText={(e) => setNumber2(e)}
        />
        <View style={styles.operators}>
          <Button
            title="+"
            onPress={() => calculate('+')}
          />
          <Button
            title=" -"
            onPress={() => calculate('-')}
          />
          <Button
            title="History"
            onPress={() => navigation.navigate('History', { calculations })}
          />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
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
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
    textAlign: 'center',
  },
});
