import { Text, View, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const { height, width } = Dimensions.get("window");

export default function CityFilter({navigation}) {
    const cityFilter = useSelector(store => store.citiesReducer.filterCity)

    return (
        <>
            {cityFilter?.map((city, index) =>
            <TouchableOpacity key={index} onPress={()=> navigation.navigate('City', {id:city._id})}>
                <View style={styles.container} >
                    <ImageBackground source={{ uri: city.image }} resizeMode="cover" style={styles.image}>
                        <Text style={styles.cityName}>{city.name}</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            )
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: '10%',
        justifyContent: 'center',
        alignItems: 'center'



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
        color: 'white',
        width: width - 40,
        height: 70,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'SwankyandMooMoo_400Regular',
    }

});
