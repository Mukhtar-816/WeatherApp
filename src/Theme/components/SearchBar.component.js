import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { width } from "../utils/Dimensions-Api";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from "../color";

const SearchBar = ({ name, value, onChangeText }) => {
    return (
        <View>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={Colors.white}
                placeholder={name}
                style={styles.TextInput} />
            <MaterialIcons name='search' size={25} style={styles.Icon} />

        </View>
    )
};

export default SearchBar;

const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: Colors.TransparentWhite,
        height: 52,
        width: width/1.1,
        borderRadius: 10,
        paddingLeft: 50,
        fontSize: 15,
        color : Colors.white
    },
    Icon: {
        position: 'absolute',
        color: 'white',
        margin: 13
    }
});