/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../color';
import { Snow, Sunny, Heavy_Rain, Light_Rain, Cloudy } from '../Images/Images';

const WeatherCard = ({ item, Forecast }) => {

    const [image, setImage] = useState(Sunny);

    var dt = new Date((item.dt * 1000));
    const weather = item.weather[0];
    const { main } = item;


    console.log()

    const Tempreature = Forecast === 'Hourly-Forecast' ?
        ((main.temp - 273).toFixed(0) + '°') : ((item.temp.max - 273).toFixed(0) + '°');


    // Images Logic -----------------------------
    function GetWeatherImage(weather) {
        if (weather === 'Snow') { return Snow; }
        if (weather === 'Clear') { return Sunny; }
        if (weather === 'Rain') { return Heavy_Rain; }
        if (weather === 'Haze') { return Light_Rain; }
        if (weather === 'Clouds') { return Cloudy; }
        if (weather === 'Mist') { return Light_Rain; }
        else { return Sunny; }
    };

    useEffect(() => {
        setImage(GetWeatherImage(weather.main));
    }, [weather]);

    return (
        <View style={styles.Card}>
            <Image source={image} resizeMode="contain" style={{ height: 35, width: 35 }} />
            <Text style={styles.Txt}>{Forecast === 'Hourly-Forecast' ?
                dt.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }) :
                item.dt_txt}</Text>
            <Text style={[styles.Txt, { fontSize: 20 }]}>{Tempreature}</Text>
        </View>
    );
};

export default WeatherCard;

const styles = StyleSheet.create({
    Card: {
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 140,
        width: 60,
        borderRadius: 10,
        backgroundColor: Colors.primary,
        justifyContent: 'space-evenly',
    },
    Txt: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.white,
    },
});
