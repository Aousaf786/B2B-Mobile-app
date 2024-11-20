import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './authNavigators';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainNavigator} from './mainNavigator';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const token = false;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {token ? (
        <>
          <Stack.Screen name="mainStack" component={MainNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="authStack" component={AuthNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
