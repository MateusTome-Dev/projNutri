import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SignUpScreen from '../screens/SignUp';
import MenuScreen from '../screens/MenuScreen';
import HomeScreen from '../screens/HomePage';
import UserScreen from '../screens/UserScreen';
import ImcFormScreen from '../screens/ImcFormScreen';
import FoodScreen from '../screens/FoodScreen';
import FoodLunchScreen from '../screens/FoodLunchScreen';
import FoodDinnerScreen from '../screens/FoodDinnerScreen';
import FoodCoffeeScreen from '../screens/FoodCoffeeScreen';
import FoodRecipeScreen1 from '../screens/FoodRecipeScreen1';
import FoodRecipeScreen2 from '../screens/FoodRecipeScreen2';
import FoodRecipeScreen3 from '../screens/FoodRecipeScreen3';
import FoodRecipeScreen4 from '../screens/FoodRecipeScreen4';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
      <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Imc" component={ImcFormScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CafeManha" component={FoodScreen} options={{ headerShown: true ,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:0
          },}} />
          <Stack.Screen name="Almoco" component={FoodLunchScreen} options={{ headerShown: true ,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:0
          },}} />
          <Stack.Screen name="CafeTarde" component={FoodCoffeeScreen} options={{ headerShown: true ,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:0
          },}} />
          <Stack.Screen name="Janta" component={FoodDinnerScreen} options={{ headerShown: true ,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:0
          },}} />
          <Stack.Screen name="RecipeLowCarb" component={FoodRecipeScreen1} options={{ headerShown: true ,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:0
          },}} />
          <Stack.Screen name="RecipeHipercalorica" component={FoodRecipeScreen2} options={{ headerShown: true ,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:0
          },}} />
          <Stack.Screen name="RecipeNordica" component={FoodRecipeScreen3} options={{ headerShown: true ,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:0
          },}} />
          <Stack.Screen name="RecipeVegana" component={FoodRecipeScreen4} options={{ headerShown: true ,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:0
          },}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
