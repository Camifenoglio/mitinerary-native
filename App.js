import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore as createStore } from '@reduxjs/toolkit';
import mainReducer from './redux/reducers/mainReducer';
import { useFonts, AnnieUseYourTelescope_400Regular } from '@expo-google-fonts/annie-use-your-telescope';
import { SwankyandMooMoo_400Regular } from '@expo-google-fonts/swanky-and-moo-moo'
import { Vibur_400Regular } from '@expo-google-fonts/vibur'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs' 



export default function App() {
  const store = createStore({ reducer: mainReducer });

  let [fontsLoaded] = useFonts({
    AnnieUseYourTelescope_400Regular,
    SwankyandMooMoo_400Regular,
    Vibur_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <Provider store={store}>
       <NavigationContainer>
        <BottomTabs/>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 60
  }
});
