import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import { widthToDp } from '../Theme/utils/Dimensions-Api'

const Home = () => {
  return (
    <View style = {{
      backgroundColor : "black",
      flex : 1,
    }}>

      <View style = {{
        flexDirection : "row",
        margin : 10,
      }}>
      <TouchableOpacity style = {{
        flexDirection : "row",
      }}>
        <Entypo name="location-pin" size = {30} color = "white" />
        <Text style = {{
          color : "white",
          fontSize : 15,
        }}>LOS ANGLES, CALIFORNIA, USA  </Text>
      </TouchableOpacity>
        <TouchableOpacity style = {{
          marginHorizontal : widthToDp(20),
        }}>
          <Feather name = "bell" size = {20} color = "white"/>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default Home

const styles = StyleSheet.create({})