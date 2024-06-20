import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { height, heightToDp, widthToDp } from '../../Theme/utils/Dimensions-Api'
import Feather from "react-native-vector-icons/Feather"


const SignUp = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "white",
    }}>

      <View>
        <Pressable style={{
          alignSelf: 'flex-start',
          backgroundColor: "white",
          elevation: 10,
          margin: widthToDp(5),
          borderRadius: 10,
          padding: 5,
        }}>
          <Feather name="chevron-left" size={33} color="teal" />
        </Pressable>
      </View>

      <View style={{
        marginHorizontal: widthToDp(5),
        marginVertical: heightToDp(10),
        alignItems: 'center',
      }}>
        <Image resizeMode="contain" source={require("../../assets/imageedit_3_7332136552.png")} style={{ height: 250, width: 300, }} />
      </View>

      <View>
        <Text style={{
          color: "black",
          fontSize: 40,
          textAlign: "center",
          fontWeight: "bold",
        }} >SignUp</Text>

        <View style={{
          paddingHorizontal: widthToDp(10),
          gap: 5,


        }}>
          <Text style={{
            color: "black",
            fontSize: 15,
          }}>Username</Text>
          <TextInput style={{
            height: 40,
            width: 310,
            borderColor: 'teal',
            borderWidth: 1.5,
            padding: 10,
            borderRadius: 5,
            color: "black",
          }} />

          <Text style={{
            color: "black",
            fontSize: 15,
          }}>Email</Text>
          <TextInput style={{
            height: 40,
            width: 310,
            borderColor: 'teal',
            borderWidth: 1.5,
            padding: 10,
            borderRadius: 5,
            color: "black"
          }} />

          <Text style={{
            color: "black",
            fontSize: 15,
          }}>Password</Text>
          <TextInput style={{
            height: 40,
            width: 310,
            borderColor: 'teal',
            borderWidth: 1.5,
            padding: 10,
            borderRadius: 5,
            color: "black",
          }} />

          <Text style={{
            color: "black",
            fontSize: 15,
          }}>Confrim Password</Text>
          <TextInput style={{
            height: 40,
            width: 310,
            borderColor: 'teal',
            borderWidth: 1.5,
            padding: 10,
            borderRadius: 5,
            color: "black",
          }} />

        </View>

      </View>


      <Pressable style={{
        marginVertical: heightToDp(7),
        marginLeft: widthToDp(60),
        marginRight: widthToDp(10),
        paddingVertical: heightToDp(2),
        backgroundColor: "teal",
        borderRadius: 50,
      }}>

        <Text style={{
          fontSize: 17,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}>SignUp</Text>

      </Pressable>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})