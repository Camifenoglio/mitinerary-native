import { Text, Image, StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";


const { height, width } = Dimensions.get("window");

export default function Itinerary({ props, navigation }) {

    return (
        <>
        <TouchableOpacity onPress={()=> navigation.navigate('Activities', {id:props._id})}>
            <View style={styles.container}>
                <Text style={styles.title}>{props.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: props?.imagePerson }} style={styles.image}></Image>
                    <Text style={styles.personName}>{props.personName}</Text>
                </View>
                <Text style={styles.text}>Duration: {props.duration}🕒</Text>
                <Text style={styles.text}>Price: {props.price}</Text>
                <Text style={styles.text}>❤ {props.likes?.length}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent:'center' }}>
                    {props.hashtags.map((hash, index) =>
                        <Text style={styles.textHashtags}>{hash}</Text>)}
                </View>
            </View>
            </TouchableOpacity>

        </>
    );
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.507)',
        width: '80%',
        marginBottom:20,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal:20
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100
    },
    personName: {
        marginLeft: 20,
        fontFamily: 'Vibur_400Regular',
        fontSize: 25,
        backgroundColor: '#83f6e1',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 40,
        color: 'grey'
    },
    title:{
        fontFamily: 'SwankyandMooMoo_400Regular',
        fontSize: 30,
        color: 'whitesmoke',
        textAlign:'center'
    }
    ,
    text:{
        fontFamily: 'SwankyandMooMoo_400Regular',
        fontSize: 20,
        color: 'whitesmoke'
    },
    textHashtags:{
        fontFamily: 'SwankyandMooMoo_400Regular',
        fontSize: 25,
        color: '#83f6e1',
        marginHorizontal: 15
    }
});