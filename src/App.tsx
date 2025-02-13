/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import { CalculatorScreen } from './screens/CalculatorScreen';
import { styles } from './config/theme/app-theme';


function App(): React.JSX.Element {


  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={ 'light-content'}
        backgroundColor={'black'}
      />
 <CalculatorScreen></CalculatorScreen>
    </View>
  );
}



export default App;
