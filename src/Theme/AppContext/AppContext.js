import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import DeviceInfo from 'react-native-device-info';


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    //States Storing App Data 
   


    return (
        <AppContext.Provider value={{  }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => useContext(AppContext);