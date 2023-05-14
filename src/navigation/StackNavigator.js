import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '../screens/InitialScreen';
import WeatherApp from '../screens/WeatherApp';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={InitialScreen}>
      <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WeatherApp" component={WeatherApp} options={{headerTitle: '' , headerTransparent: true , headerTintColor: '#fff'}} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
