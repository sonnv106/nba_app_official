
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Nav from './routes'
const App = ()=>{
  return (
    <View style={styles.container}>
      <Nav/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  {
    flex: 1
  }
});

export default App;
