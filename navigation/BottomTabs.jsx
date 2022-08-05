import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CitiesStackNavigation from './Stack';
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Image } from 'react-native';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (

    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { height: 80, backgroundColor: 'grey', justifyContent: 'center' },
        tabBarActiveTintColor: '#83f6e1',
        tabBarInactiveTintColor: 'whitesmoke',
        tabBarLabelStyle: {
          fontSize: 20,
          fontFamily: 'SwankyandMooMoo_400Regular'
        }

      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (

            <Image source={require('../assets/logo.png')} style={styles.image}></Image>
          ),
          tabPress: 'useScrollToTop'
        }}
      />
      <Tab.Screen name="Cities" component={CitiesStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (

            <Image source={require('../assets/city.png')} style={styles.image2}></Image>
          ),

        }} />

    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 8,
    height: 40,
    width: 40
  },
  image2:{
    marginTop: 10,
    height: 60,
    width: 60

  }

});