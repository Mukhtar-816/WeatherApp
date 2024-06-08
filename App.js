import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeSrc from './src/screens/HomeSrc/HomeSrc'
import SplashScreen from 'react-native-splash-screen';
import { AppProvider } from './src/Theme/AppContext/AppContext';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000)
  }, []);

  return (
    <AppProvider>
      <View style={{ flex: 1 }}>
        <HomeSrc />
      </View>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({})