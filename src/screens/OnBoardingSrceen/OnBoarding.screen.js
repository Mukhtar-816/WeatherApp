import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { height, heightToDp, widthToDp } from '../../Theme/utils/Dimensions-Api'


const OnBoarding = () => {
  return (
    <View style = {{
            backgroundColor : "white",
            flex : 1,
    }}>
      
    <View style = {{
       padding : 20,
       paddingVertical : heightToDp(10),
       
       
    }}>
        <Image source={require("../../assets/home-removebg-preview.png")}/>
    </View>

     <View style = {{
      gap : 10,
     }}>
      <Text style = {{
        color : "black",
        fontSize : 50,
        textAlign : "center",
        fontWeight : "bold",
      }}>
        Hello
      </Text>
      <Text style = {{
        textAlign : "center",
        fontSize : 20,
        fontWeight : "bold",
        color : "black",
        marginHorizontal : widthToDp(10),
      }}>
        Welcome to our offerup, where you can buy and sell pets
      </Text>
     </View>

      <View style = {{
        paddingVertical : heightToDp(15),
        gap : 25, 

      }}>
        <Pressable style = {{
          backgroundColor : "teal",
          marginHorizontal : widthToDp(20),
          paddingVertical :heightToDp(3),
          borderRadius : 50,
        }}>
            <Text style = {{
              textAlign : "center",
              fontSize : 22,
              fontWeight : "bold",
              color : "white",
              
            }}>
                Login
            </Text>
        </Pressable>
        <Pressable style = {{
          borderWidth : 2,
          borderColor : "teal",
          marginHorizontal : widthToDp(20),
          paddingVertical :heightToDp(3),
          borderRadius : 50,
        }}>
            <Text style = {{
              textAlign : "center",
              fontSize : 22,
              fontWeight : "bold",
              color : "teal",
            }}>
                SignUp
            </Text>
        </Pressable>
      </View>

    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({})