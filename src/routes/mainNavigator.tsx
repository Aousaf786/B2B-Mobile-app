import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import all screens here
import {HomeScreen} from '@/screens';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
