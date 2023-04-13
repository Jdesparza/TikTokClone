/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, Platform } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import Navigation from './src/navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // backgroundColor={backgroundStyle.backgroundColor}
          translucent={Platform.OS === 'android' ? true : false}
          backgroundColor={Platform.OS === 'android' ? 'transparent' : backgroundStyle.backgroundColor}
        />
        <Navigation />
      </SafeAreaView>
    </>
  );
}

export default App;
