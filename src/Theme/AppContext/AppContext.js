import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import DeviceInfo from 'react-native-device-info';


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    //States Storing App Data 
    const [user_Location, setUser_Location] = useState(null);

    useEffect(() => {
        user_Location == null ? requestLocationPermission() : null
    }, []);
    
      const requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
          const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          handlePermissionResult(result);
        } else if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Access Required",
              message: "This app needs to access your location",
              buttonPositive: "OK"
            }
          );
          handlePermissionResult(granted);
        }
      };
    
      const handlePermissionResult = async (result) => {
        if (result === RESULTS.GRANTED || result === PermissionsAndroid.RESULTS.GRANTED) {
          const isLocationEnabled = await DeviceInfo.isLocationEnabled();
          if (isLocationEnabled) {
            getLocation();
          } else {
            Alert.alert(
              "Location Services Disabled",
              "Please enable location services to use this feature.",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                {
                  text: "Go to Settings",
                  onPress: () => openLocationSettings()
                }
              ]
            );
          }
        } else {
          Alert.alert("Permission Denied", "Location permission is required to use this feature.");
        }
      };


      const openLocationSettings = () => {
        if (Platform.OS === 'ios') {
          Linking.openURL('App-Prefs:root=Privacy&path=LOCATION');
        } else if (Platform.OS === 'android') {
          Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS').catch(() => {
            Linking.openURL('settings://').catch((err) => {
              console.error('Failed to open settings:', err);
              Alert.alert('Error', 'Unable to open location settings');
            });
          });
        }
      };
    
      const getLocation = () => {
        Geolocation.getCurrentPosition(
          (position) => {
            setUser_Location(position)
            console.log('-------User_Location_Accessed-------');
          },
          (error) => {
            Alert.alert("Error", error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      };


    return (
        <AppContext.Provider value={{ user_Location }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => useContext(AppContext);