import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
const Stack = createStackNavigator();
const MyStack = () => {
   return (
      <NavigationContainer>
        <Stack.Navigator><Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
      </Stack.Navigator></NavigationContainer>
   );
};
export default MyStack;







