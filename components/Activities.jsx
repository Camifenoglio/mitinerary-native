import { Text, StyleSheet, Dimensions, View, TouchableOpacity, ScrollView, ImageBackground, Image, Platform } from "react-native";
import {  useDispatch } from 'react-redux';
import { useEffect, useState,useRef } from "react";
import activitiesActions from "../redux/actions/activitiesAction";
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import ActiNotFound from "./ActiNotFound";

const {width: screenWidth} = Dimensions.get('window');

export default function Activities({ route }) {
    const { id } = route.params
    const dispatch = useDispatch()
    const [activities, setActivities] = useState()
    const carouselRef = useRef(null);
    const goForward = () => {
        carouselRef.current.snapToNext();
      };
    

    useEffect(() => {

        const response = async () => {
            const actRes = await dispatch(activitiesActions.findActivitiesFromItinerary(id));
            setActivities(actRes)
        }
        response()
        // eslint-disable-next-line 
    }, [id])


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
            <Text style={styles.cityName} numberOfLines={2}>
              {item.name}
            </Text>
          </View>
        );
      };
    
      return (
        <>
        {activities?.length > 0 ?
        (<View style={styles.container}>
          <TouchableOpacity onPress={goForward}>
            <Text style={styles.title}>Activities</Text>
          </TouchableOpacity>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={activities}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </View>) : <ActiNotFound/>
        
       }
      </>
      );
    };

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      width: screenWidth - 60,
      height: 380,
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
    cityName: {
      marginTop: 5,
      textAlign: 'center',
      color: '#7F19A6',
      fontSize: 30,
      fontFamily: 'SwankyandMooMoo_400Regular'
    },
    title: {
      color: '#7F19A6',
      fontSize: 40,
      textAlign: 'center',
      marginVertical:5,
      
      fontFamily: 'SwankyandMooMoo_400Regular'
    }
  });