import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@/screens';

// import all screens here

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
