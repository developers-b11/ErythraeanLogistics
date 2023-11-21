import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@navRef';

//screens
import SplashScreen from '@containers/authContainer/SplashScreen';
import LoginScreen from '@containers/authContainer/LoginScreen';
import SignUpScreen from '@containers/authContainer/SignUpScreen';

// bottom tab
import { BottomNavigator } from '@navigation/appStack';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        {/* bottom tab */}
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;