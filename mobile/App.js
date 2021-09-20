import React from 'react';
import { StatusBar, View} from "react-native"

import Home from './src/pages/Home';

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="#260B9E" barStyle="light-content"  />
      <Home/>
    </View>
  );
}

