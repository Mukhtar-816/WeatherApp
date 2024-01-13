/* eslint-disable semi */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../Theme/color';
import { Snow, Sunny, Thunder, Light_Rain, Heavy_Rain, Cloudy } from '../../Theme/Images/Images';
import HourlyForecast from '../FutureForecast/FutureForecast';

const CurrentWeather = ({ weatherData }) => {

    const [image, setImage] = useState(Sunny);

    // Get Api Details --------------------------
    const { weather } = weatherData;
    const [{ main }] = weather;



    // Tempreature Conversion from Kelvin to Celcius ---------------------
    const Tempreature = (weatherData.main.temp - 273.15).toFixed(1);



    // Images Logic -----------------------------
    function GetWeatherImage(weather) {
        if (weather === 'Snow') { return Snow }
        if (weather === 'Clear') { return Sunny }
        if (weather === 'Rain') { return Heavy_Rain }
        if (weather === 'Haze') { return Light_Rain }
        if (weather === 'Clouds') { return Cloudy }
        if (weather === 'Mist') { return Light_Rain }
        else { return Sunny; }
    }

    useEffect(() => {
        setImage(GetWeatherImage(main));
    }, [weatherData]);


    return (

        <View style={styles.CurrentDetailContainer}>

            <View>

                <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                    <MaterialIcons name="location-pin" size={25} style={styles.Icon} />
                    <Text style={styles.Txt}>{weatherData.name}</Text>
                </View>

                <View>
                    <Text style={[styles.Txt, { fontSize: 70 }]}>{Tempreature}°</Text>
                    <Text style={[styles.Txt, { fontWeight: '200', fontSize: 30, marginTop: 10 }]}>{main}</Text>
                </View>

                <View>
                    <View style={[styles.TxtContainer, { width: 150 }]}>
                        <Text style={styles.Txt}>Humidity : {weatherData.main.humidity}°</Text>
                    </View>

                    <View style={[styles.TxtContainer, { width: 160 }]}>
                        <Text style={styles.Txt}>Wind : {weatherData.wind.speed} m/s</Text>
                    </View>
                </View>

            </View>


            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Image source={image} resizeMode="contain" style={styles.Image} />

                <View style={[styles.TxtContainer, { width: 200, marginTop: 35 }]}>
                    <Text style={styles.Txt}>{`H : ${weatherData.coord.lon.toFixed(0)}°   L : ${weatherData.coord.lat.toFixed(0)}°`}</Text>
                </View>
            </View>

        </View>
    );
};

export default CurrentWeather;

const styles = StyleSheet.create({
    Icon: {
        color: Colors.white,
    },
    Txt: {
        marginLeft: 5,
        color: Colors.white,
        fontSize: 20,
    },
    Image: {
        height: 200,
        width: 200,
    },
    CurrentDetailContainer: {
        alignSelf: 'center',
        width: '90%',
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 20,
    },
    TxtContainer: {
        marginTop: 10,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
