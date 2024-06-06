/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../color';
import { Snow, Sunny, Heavy_Rain, Light_Rain, Cloudy } from '../Images/Images';
import { heightToDp, widthToDp } from '../utils/Dimensions-Api';

const WeatherCard = ({ item, Forecast }) => {

    const [image, setImage] = useState(Sunny);
    const image2 = 'https:' + item?.day?.condition?.icon;


    var dt = new Date((item.dt * 1000));
    const weather = Forecast == "Hourly-Forecast" ? item.weather[0] : item?.day?.condition?.text;
    const { main } = item;
    const condition = Forecast == "Hourly-Forecast" ? weather?.main : item?.day?.condition?.text;


    const Tempreature = Forecast === 'Hourly-Forecast' ?
        ((main?.temp - 273).toFixed(0) + '°') : ((item?.day?.avgtemp_c).toFixed(0) + '°');


    // Images Logic -----------------------------
    function GetWeatherImage(weather) {
        if (weather === 'Snow') { return require('../../../assets/179.png'); }
        if (weather === 'Clear' || weather === 'Sunny') { return require('../../../assets/113.png'); }
        if (weather === 'Rain' || weather === 'Patchy rain nearby') { return require('../../../assets/176.png'); }
        if (weather === 'Haze' || weather === 'Rainy') { return require('../../../assets/308.png'); }
        if (weather === 'Clouds' || weather === 'Partly Cloudy') { return require('../../../assets/119.png'); }
        if (weather === 'Mist') { return require('../../../assets/143.png'); }
        else { return require('../../../assets/113.png'); }
    };

    let date = new Date(item?.date)
    let options = { weekday: 'long' };
    let DayName = date.toLocaleDateString('en-US', options)

    useEffect(() => {
        setImage(GetWeatherImage(condition));
    }, [weather]);

    return (
        <View style={styles.Card}>
            {Forecast == 'Hourly-Forecast' ?
                <Image source={image} resizeMode="contain" style={{ height: heightToDp(15), width: widthToDp(15) }} /> :
                <Image source={{ uri: image2 }} resizeMode="contain" style={{ height: heightToDp(15), width: widthToDp(15) }} />}
            <Text numberOfLines={1} style={styles.Txt}>{Forecast === 'Hourly-Forecast' ?
                dt.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }) :
                DayName}</Text>
            <Text style={[styles.Txt, { fontSize: 20 }]}>{Tempreature}</Text>
        </View>
    );
};

export default WeatherCard;

const styles = StyleSheet.create({
    Card: {
        width: widthToDp(20),
        gap: 10,
        padding: widthToDp(3),
        height: heightToDp(48),
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.primary,
        justifyContent: 'space-evenly',
    },
    Txt: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.white,
    },
});
