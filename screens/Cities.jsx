import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import citiesActions from '../redux/actions/citiesAction';
import { ScrollView } from 'react-native';
import CityFilter from '../components/CityFilter';
import { StyleSheet, Dimensions, TextInput, View } from 'react-native';
import CityNotFound from '../components/CityNotFound';
const { height, width } = Dimensions.get("window");

export default function Cities({navigation}) {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    useEffect(() => {
        dispatch(citiesActions.filterCities(input))
        // eslint-disable-next-line 
    }, [input])

    const cityFilter = useSelector(store => store.citiesReducer.filterCity)

    return (
        <>
            <ScrollView >
            <View style={{alignItems: 'center', marginTop: 40}}>
        <TextInput
        style={styles.input}
        onChangeText={setInput}
        placeholder='Find your City'
        value={input}
      />
      </View>
      {cityFilter?.length > 0 ? (<CityFilter navigation={navigation} />) : <CityNotFound/>}
            </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        marginHorizontal: 10,
        borderRadius: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 300,
        width: width - 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 30
    },
    cityName: {
        fontSize: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color:'white',
        width: width - 40,
        height: 70,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'SwankyandMooMoo_400Regular',
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: 'grey',
        borderRadius: 30,
        textAlign: 'center',
        fontFamily: 'SwankyandMooMoo_400Regular',
        fontSize: 25,
        paddingHorizontal: 30
    }

});
