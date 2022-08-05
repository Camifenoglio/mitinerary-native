import { Text, View,Image, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window"); 

export default function ItiNotFound() {

    return (
        <>
      
               <View style={{ marginVertical: 30,backgroundColor: 'rgba(0, 0, 0, 0.507)', alignItems:'center', borderRadius:30 }}>
                    <Text style={styles.text}>It seems there are no itineraries yet!</Text>
                    <Image source={require('../assets/logo.png')} resizeMode="cover" style={styles.image}>
            </Image>
                    <Text style={styles.title}>MiTinerary</Text>
                </View>

        </>

);
}
   
const styles = StyleSheet.create({
    text: {
      color: '#83f6e1',
      paddingVertical:15,
      fontSize: 40,
      width: 300,
      textAlign: 'center',
      borderRadius: 15,
      fontFamily: 'SwankyandMooMoo_400Regular'
  
    },
    image: {
      height: height/7,
      width: width/4,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      color: 'whitesmoke',
      fontSize: 40,
      fontFamily: 'Vibur_400Regular',
      textShadowColor: 'grey',
      textShadowOffset: { width: 3, height: -2 },
      textShadowRadius: 3   
    }
  
  });
  