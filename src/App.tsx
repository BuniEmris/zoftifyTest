import {View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from 'components/Header';
import {Provider} from 'react-redux';
import {store} from 'store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'screens/Home';
import CreatePostScreen from 'screens/CreatePostScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  const persistor = persistStore(store);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={'Home'}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="CreatePost" component={CreatePostScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
