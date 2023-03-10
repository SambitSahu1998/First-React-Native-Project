import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Another piece of Text</Text>
      <Text style={{margin: 16, borderWidth: 2, borderColor: 'red', padding: 16}}>Hello World</Text>
      <Button title='Tap Me!'/>
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
  dummyText:{
    margin:16,
    borderWidth:2,
    padding:16,
    borderColor:'blue',
  }
});

