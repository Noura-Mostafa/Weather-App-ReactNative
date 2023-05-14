import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import WeatherApp from './WeatherApp';
import CustomButton from '../component/CustomButton/CustomButton';

const InitialScreen = (props) => {

    const { navigation } = props;
    return (
        <ImageBackground source={require('../../assets/images/homepage.jpg')} style={styles.ImageBackground}>

            <View style={styles.container}>

            <Text style={styles.title}>Welcome To Easy Weather Search App,
            just write city name and get weather, give it a try .. </Text>

            <CustomButton text={'Let\'s Start'}
                onPress={() => navigation.navigate(WeatherApp)} />

            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.2)',
    },
    ImageBackground: {
        flex: 1,
    },
    title: {
        backgroundColor: 'rgba(0,0,0,.2)',
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#fff',
        textAlign: 'justify',
    },
});

export default InitialScreen;
