/* eslint-disable semi */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../Theme/color';
import { Snow, Sunny, Light_Rain, Heavy_Rain, Cloudy } from '../../Theme/Images/Images';
import { heightToDp, widthToDp } from '../../Theme/utils/Dimensions-Api';

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

        <View>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <View>
                    <View style={{ flexDirection: 'row', paddingTop: heightToDp(5), alignItems: 'center' }}>
                        <MaterialIcons name="location-pin" size={25} style={styles.Icon} />
                        <Text style={styles.Txt}>{weatherData.name}</Text>
                    </View>
                    <View>
                        <Text style={[styles.Txt, { fontSize: 60, marginTop: heightToDp(2) }]}>{Tempreature}°</Text>
                        <Text style={[styles.Txt, { fontWeight: '200', fontSize: 30, marginTop: heightToDp(2), marginLeft: widthToDp(2) }]}>{main}</Text>
                    </View>
                </View>

                <View>
                    <Image source={image} resizeMode="contain" style={{ height: heightToDp(50), width: widthToDp(50) }} />
                </View>
            </View>



            <View style={{ flexWrap: 'wrap', flexDirection: 'row', gap: 10, paddingTop: heightToDp(5), justifyContent: 'center' }}>
                <View style={[styles.TxtContainer, { width: 150 }]}>
                    <Text style={styles.Txt}>Humidity : {weatherData.main.humidity}°</Text>
                </View>

                <View style={[styles.TxtContainer, { width: 160 }]}>
                    <Text style={styles.Txt}>Wind : {weatherData.wind.speed}m/s</Text>
                </View>
                <View style={[styles.TxtContainer, { width: 200 }]}>
                    <Text style={styles.Txt}>{`H : ${weatherData.coord.lon.toFixed(0)}°   L : ${weatherData.coord.lat.toFixed(0)}°`}</Text>
                </View>
            </View>

        </View>
    );
};

export default CurrentWeather;

const styles = StyleSheet.create({
    Icon: {
        color: Colors.primary,
    },
    Txt: {
        paddingLeft: widthToDp(2),
        color: Colors.white,
        fontSize: 20,
    },
    TxtContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: heightToDp(2),
        alignItems: 'center',
    },
});
