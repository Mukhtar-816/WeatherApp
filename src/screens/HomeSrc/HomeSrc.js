/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, ActivityIndicator, Alert } from 'react-native';
import SearchBar from '../../Theme/components/SearchBar.component';
import WeatherSrc from '../CurrentWeather/CurrentWeather';
import { Colors } from '../../Theme/color';
import FutureForecast from '../FutureForecast/FutureForecast';

const HomeSrc = () => {


    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [cityName, setCityName] = useState('Karachi');

    const API_KEY = 'c4ec65ce797ac2b12b7bb44a7eb7de83';



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




    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../assets/bg.jpg')} style={{ flex: 1 }}>
                <ScrollView>


                    <View style={{ alignSelf: 'center', marginTop: 40 }}>
                        <SearchBar
                            name={'Search Location'}
                            value={cityName}
                            onChangeText={(cityName) => {
                                setCityName(cityName);
                            }} />
                    </View>


                    {/* Current Weather Screen */}

                    <View style={{ flex: 1 }}>
                        {weatherData == null ?
                            <ActivityIndicator
                                size={80}
                                color={Colors.primary}
                                style={styles.ActivityIndicatorContainer}
                            /> : <WeatherSrc weatherData={weatherData} />}
                    </View>


                    {/* Future Forecast of Weather Screen */}

                    <View style={{ paddingTop: 100 }}>
                        {weatherData == null ?
                            <ActivityIndicator
                                size={80}
                                color={Colors.primary}
                                style={styles.ActivityIndicatorContainer}
                            /> : <FutureForecast weatherData={weatherData} />}
                    </View>


                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default HomeSrc;


const styles = StyleSheet.create({

    ActivityIndicatorContainer: {
        paddingTop: 120,
    },

});
