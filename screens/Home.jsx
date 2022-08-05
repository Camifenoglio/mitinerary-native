import { View, StyleSheet, ScrollView} from 'react-native';
import MyCarousel from '../components/MyCarousel';
import Hero from '../components/Hero';

export default function Home({navigation}) {

    return (
        <ScrollView >
            <View style={styles.container}>
                <Hero navigation={navigation} />
                <MyCarousel />
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // marginVertical: 60
    }
});
