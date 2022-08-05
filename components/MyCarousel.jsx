import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../redux/actions/citiesAction';
import { useFonts, AnnieUseYourTelescope_400Regular } from '@expo-google-fonts/annie-use-your-telescope';
import { SwankyandMooMoo_400Regular } from '@expo-google-fonts/swanky-and-moo-moo'
import { Vibur_400Regular } from '@expo-google-fonts/vibur'
import AppLoading from 'expo-app-loading';


const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(citiesActions.getCities())
    // eslint-disable-next-line 
  }, [])

  const cities = useSelector(store => store.citiesReducer.cities)

  const [city, setCity] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setCity(cities);
  }, []);

  let [fontsLoaded] = useFonts({
    AnnieUseYourTelescope_400Regular,
    SwankyandMooMoo_400Regular,
    Vibur_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.image}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.activityName} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        <Text style={styles.title}>Popular MyTineraries</Text>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={cities}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    
  },
  activityName: {
    marginTop: 15,
    textAlign: 'center',
    color: '#7F19A6',
    fontSize: 40,
    fontFamily: 'SwankyandMooMoo_400Regular'
  },
  title: {
    color: '#7F19A6',
    fontSize: 35,
    textAlign: 'center',
    marginVertical:10,
    fontFamily: 'Vibur_400Regular'
  }
});