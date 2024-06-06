import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { heightToDp, widthToDp } from "../utils/Dimensions-Api";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from "../color";

const SearchBar = ({ name, value, onChangeText, ...props }) => {
    return (
        <View style={[props.style, { justifyContent : 'center'}]}>
            <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.TextInput}
            placeholder={name}
                />
            <MaterialIcons name='search' size={25} style={styles.Icon} />

        </View>
    )
};

export default SearchBar;

const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: Colors.TransparentWhite,
        padding : heightToDp(4),
        width : '100%',
        borderRadius: 10,
        paddingLeft: widthToDp(15),
        fontSize: 15,
        color : Colors.white
    },
    Icon: {
        position: 'absolute',
        color: 'white',
        paddingLeft: widthToDp(10),
    }
});