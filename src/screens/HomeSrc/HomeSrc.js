/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, ActivityIndicator, Alert, PermissionsAndroid, Button } from 'react-native';
import SearchBar from '../../Theme/components/SearchBar.component';
import WeatherSrc from '../CurrentWeather/CurrentWeather';
import { Colors } from '../../Theme/color';
import FutureForecast from '../FutureForecast/FutureForecast';
import { heightToDp, widthToDp } from '../../Theme/utils/Dimensions-Api';

const HomeSrc = () => {


    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [cityName, setCityName] = useState('');

    const API_KEY = 'e49fb4702a36252f6cb80c496c474b4c';



    // Weather Api Call Algorithm-------------------------

    const FetchWeatherApi = async (cityName) => {

        setLoaded(true);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;


        try {
            const response = await fetch(API);
            if (response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            }
            else {
                setWeatherData(null);
            }
            setLoaded(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        FetchWeatherApi(cityName);
    }, [cityName]);
    // ---------------------------------------------------------


    const requestLoactionPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Location Permission',
              message:
                'Allow us to locate for weather Forecast ',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Granted');
          } else {
            console.log(' permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      };



    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../assets/bg.jpg')} style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>

                    <View style={{ marginTop: 40 }}>
                        <SearchBar
                            name={'Search Location'}
                            value={cityName}
                            onChangeText={(cityName) => {
                                setCityName(cityName);
                            }}
                            style={{ paddingHorizontal: widthToDp(5) }} />
                    </View>


                    {/* Current Weather Screen */}

                    <View style={{ flex: 1, paddingHorizontal: widthToDp(5), paddingTop: heightToDp(5) }}>
                        {weatherData == null ?
                            null : <WeatherSrc weatherData={weatherData} />}
                    </View>

                    {weatherData == null && <View style={{ alignSelf: 'center', paddingTop: heightToDp(50) }}>
                        <ActivityIndicator
                            size={80}
                            color={Colors.primary}
                            style={styles.ActivityIndicatorContainer}
                        />
                    </View>}


                    {/* Future Forecast of Weather Screen */}

                    <View style={{ paddingTop: heightToDp(20) }}>
                        {weatherData == null ?
                            null : <FutureForecast weatherData={weatherData} />}
                    </View>


                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default HomeSrc;


const styles = StyleSheet.create({

    ActivityIndicatorContainer: {
        paddingTop: heightToDp(10),
    },

});
