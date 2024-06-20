import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { height, heightToDp, widthToDp } from '../../Theme/utils/Dimensions-Api'
import Feather from "react-native-vector-icons/Feather"

const Login = () => {
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
      }}>
        <Image source={require("../../assets/login.png")} />
      </View>

      <View>
        <Text style={{
          color: "black",
          fontSize: 50,
          textAlign: "center",
          fontWeight: "bold",
        }} >Login</Text>

        <View style={{
          paddingHorizontal: widthToDp(10),
          gap: 10,


        }}>
          <Text style={{
            color: "black",
            fontSize: 15,
          }}>Name</Text>
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


        </View>

      </View>
      <Pressable style={{
        marginLeft: widthToDp(10),
        marginRight: widthToDp(57),
        paddingVertical: heightToDp(3),
      }}>
        <Text style={{
          color: "grey",
          fontSize: 11,
        }}>Forget Password ?</Text>
      </Pressable>

      <Pressable style={{
        marginVertical: heightToDp(3),
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
        }}>Login</Text>

      </Pressable>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})