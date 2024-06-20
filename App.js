import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen';
import { AppProvider } from './src/Theme/AppContext/AppContext';
import OnBoarding from './src/screens/OnBoardingSrceen/OnBoarding.screen';
import SignUp from './src/screens/SignUpScreen/SignUp.screen';
import Login from './src/screens/LoginScreen/Login.screen';


const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000)
  }, []);

  return (
    <AppProvider>
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({})