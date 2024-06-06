import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HomeSrc from './src/screens/HomeSrc/HomeSrc'
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 10)
  }, []);



  

  return (
    <View style={{flex : 1}}>
      <HomeSrc/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})