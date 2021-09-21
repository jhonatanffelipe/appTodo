import React from 'react';
import { StatusBar, View, StyleSheet} from "react-native"

import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#260B9E" barStyle="light-content"  />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
})