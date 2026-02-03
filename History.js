import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function History({ route }) {
  const { calculations } = route.params;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.history}>
          <Text style={styles.text}>History</Text>
          <FlatList
            data={calculations}
            renderItem={({ item }) => <Text style={styles.text}>{item}</Text>} // millä tavalla data näytetään
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
