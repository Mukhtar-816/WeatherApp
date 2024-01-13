/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */

/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { width } from '../../Theme/utils/Dimensions-Api';
import { Colors } from '../../Theme/color';
import WeatherCard from '../../Theme/components/WeatherCard.component';

const FutureForecast = ({ weatherData }) => {


    // States That are being Used -------------

    const [selectedForecast, setSelectedForecast] = useState('Daily-Forecast');
    const [loaded, setLoaded] = useState(true);
    const [hourlyWeatherData, setHourlyWeatherData] = useState(null);
    const [dailyWeatherData, setDailyWeatherData] = useState(null);



    // Logic Funtionality For changing Background Color According to Selected Tab ---------

    const ForecastSelected = (Forecast) => {
        if (selectedForecast === Forecast) {
            return { color: Colors.white, backgroundColor: Colors.primary };
        }
        else {
            return { color: Colors.primary, backgroundColor: Colors.white };
        }
    };



    // Api Hourly Forecast call -----------------------------

    const { lat, lon } = weatherData.coord;
    const API_KEY = 'c4ec65ce797ac2b12b7bb44a7eb7de83';

    const HourlyForecast = async () => {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        try {
            const response = await fetch(API);
            if (response.ok) {
                const data = await response.json();
                setHourlyWeatherData(data.list.splice(0, 24));
            }
            else {
                setHourlyWeatherData(null);
            }
            setLoaded(true);
        } catch (error) {
            console.log(error);
        }
    };

    // Api Daily Forecast call -----------------------------

    const DailyForecast = async (cnt) => {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${API_KEY}`;
        try {
            const response = await fetch(API);
            if (response.ok) {
                const data = await response.json();
                setDailyWeatherData(data.list);
            }
            else {
                setDailyWeatherData(null);
            }
            setLoaded(true);
        } catch (error) {
            console.log(error);
        }
    };





    // Calling UseEffect for Both Daily And Hourly Forecast Api Calls ------------

    useEffect(() => {
        if (selectedForecast === 'Hourly-Forecast') {
            HourlyForecast();
        }
        else {
            DailyForecast(7);
        }
    }, [weatherData, selectedForecast]);



    return (
        <View style={styles.MainContainer}>



            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={() => { setSelectedForecast('Hourly-Forecast'); }}
                    style={[styles.button, ForecastSelected('Hourly-Forecast')]}>

                    <Text style={[styles.buttonTxt, ForecastSelected('Hourly-Forecast')]}>3 Hourly</Text>
                </Pressable>

                <Pressable
                    onPress={() => { setSelectedForecast('Daily-Forecast'); }}
                    style={[styles.button, ForecastSelected('Daily-Forecast')]}>

                    <Text style={[styles.buttonTxt, ForecastSelected('Daily-Forecast')]}>Daily</Text>
                </Pressable>
            </View>



            <View style={styles.ForecastContainer}>
                <FlatList
                    horizontal
                    data={selectedForecast === 'Hourly-Forecast' ? hourlyWeatherData : dailyWeatherData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <WeatherCard item={item} Forecast={selectedForecast} />
                        </View>
                    )} />
            </View>



        </View>
    );
};

export default FutureForecast;

const styles = StyleSheet.create({
    MainContainer: {
        alignSelf: 'center',
        paddingTop: 10,
        height: 230,
        width: width / 1.1,
        backgroundColor: 'rgba(200,200,200,0.2)',
        borderRadius: 10,
    },
    buttonContainer: {
        alignSelf: 'center',
        height: 60,
        width: '94%',
        borderRadius: 10,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(200,200,200,0.3)',
    },
    button: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
        width: 160,
    },
    buttonTxt: {
        fontWeight: 'bold',
    },
    ForecastContainer: {
        flex: 1,
        width: '96%',
        alignSelf: 'center',
    },
});
