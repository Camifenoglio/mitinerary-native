import { Text, View, ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get("window"); 

export default function Hero({navigation}) {

    return (
            <ImageBackground source={require('../assets/sunset.jpg')} resizeMode="cover" style={styles.heroImage}>
                <View style={{alignItems:'center', paddingTop:80}}>
                <Image source={require('../assets/logo.png')} resizeMode="cover" style={styles.image}></Image>
                <Text style={styles.hero}>MiTinerary</Text>
                </View>
                <View blurRadius={10} style={{ marginVertical: 30 }}>
                    <Text style={styles.text}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={()=> navigation.navigate('Cities')} style={{marginBottom:40}}>
<Text style= {styles.button}>Let's go!</Text>

                  </TouchableOpacity>

                </View>
            </ImageBackground>

);
}
   
const styles = StyleSheet.create({
  text: {
    color: 'whitesmoke',
    fontSize: 35,
    width: 300,
    textAlign: 'center',
    backgroundColor: 'rgba(6, 220, 248, 0.641)',
    borderRadius: 15,
    fontFamily: 'SwankyandMooMoo_400Regular'

  },
  heroImage: {
    height: height - 40,
    width: width,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  hero: {
    color: 'whitesmoke',
    fontSize: 60,
    fontFamily: 'Vibur_400Regular',
    textShadowColor: 'grey',
    textShadowOffset: { width: 3, height: -2 },
    textShadowRadius: 3   
  },
  button: {
    backgroundColor: 'rgba(158, 2, 248, 0.507)',
    fontFamily: 'SwankyandMooMoo_400Regular',
    fontSize: 40,
    borderRadius: 30,
    color: 'white',
    paddingHorizontal: 10,
  },
  image: {
    height: height / 7,
    width: width / 4,
    justifyContent: 'center',
    alignItems: 'center'
},

});
