import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeSrc from "../HomeSrc/HomeSrc";
import OnBoardingUI from "../OnBoardingUI/OnBoardingUI";

const MainStackNav = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeSrc} />
                <Stack.Screen name="OnBoardingUi" component={OnBoardingUI} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};


export default MainStackNav;