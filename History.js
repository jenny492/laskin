import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function History({ calculations }) {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.history}>
          <Text style={styles.text}>History</Text>
          <FlatList
            data={calculations}
            renderItem={({ item }) => <Text style={styles.text}>{item}</Text>} // millä tavalla data näytetään
            // keyExtractor={(item, index) => index.toString()} 
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
  history: {
    marginTop: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
    textAlign: 'center',
  },
});
