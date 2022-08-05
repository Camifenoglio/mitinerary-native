import { Text, Image, StyleSheet, Dimensions, View, ScrollView, ImageBackground } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import citiesActions from "../redux/actions/citiesAction";
import itinerariesActions from '../redux/actions/itinerariesAction'
import Itinerary from "../components/Itinerary";
import ItiNotFound from "../components/ItiNotFound";

const { height, width } = Dimensions.get("window");

export default function Details({ route, navigation }) {
    const dispatch = useDispatch()
    const { id } = route.params

    useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
        dispatch(itinerariesActions.findItinerariesFromCity(id))
        // eslint-disable-next-line 
    }, [id])

    const city = useSelector(store => store.citiesReducer.getOneCity)
    const itineraries = useSelector(store => store.itinerariesReducer.getItinerariesFromCity)
    return (
        <>
            <ScrollView >

                <ImageBackground
                    source={{ uri: city.image }}
                    style={styles.image}
                >
                    <Text style={styles.city}>{city?.name}</Text>
                    <Text style={styles.description}>{city?.description}</Text>
                    <Text style={styles.itinerariesTitle}>Itineraries</Text>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop:20}}>
                    {itineraries.length > 0 ?
                        itineraries.map((itinerary, index) =>
                            <Itinerary key={index} props={itinerary} navigation={navigation} />) : <ItiNotFound/> }
                    </View>
                    </ImageBackground>


            </ScrollView>


        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: width,
        minHeight: height,
        justifyContent: 'space-around',
        alignItems:'center'
    },
    city: {
        textAlign: 'center',
        fontFamily: 'Vibur_400Regular',
        fontSize: 50,
        color: 'whitesmoke',
        textShadowColor: 'black',
        textShadowOffset: { width: 3, height: -2 },
        textShadowRadius: 3,
        marginVertical:10

    },
    description: {
        textAlign: 'center',
        fontFamily: 'SwankyandMooMoo_400Regular',
        fontSize: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.507)',
        width: '90%',
        borderRadius: 30,
        padding: 20,
        color: 'white',
    },
    itinerariesTitle:{
        fontFamily: 'Vibur_400Regular',
        fontSize: 25,
        backgroundColor: '#83f6e1',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 40,
        color: 'grey',
        textAlign: 'center',
        width: 130,
        marginTop:20
    }
});