// App.tsx
import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';
import {RootNavigator} from '@/routes';
import {store} from '@/store';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator />
    </SafeAreaView>
  </Provider>
);

export default App;

// Need these libraries

// npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
// npm install redux react-redux redux-thunk
// npm install axios
// npm install react-native-qrcode-scanner
// npm install @react-native-firebase/messaging
// npm install react-native-paper
// npm install react-native-stripe-sdk
// npm install i18n-js
// npm install react-native-keychain
