import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../component/CustomButton/CustomButton';

//generated api key
const API_KEY = '3ad88db58e874bb065da42cab3696831';
const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  // fetch weather from api
  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (city !== '') {
      fetchWeather();
    }

  }, ['city']);

  return (
    <ImageBackground source={require('../../assets/images/nasa.jpg')} style={styles.ImageBackground}>
      <View style={styles.container}>

        <Text style={styles.inputtitle}>Enter A City Name :</Text>

        <TextInput
          style={styles.input}
          placeholder="ex : London"
          placeholderTextColor={'#eee'}
          value={city}
          onChangeText={setCity}
        />

        <CustomButton onPress={fetchWeather} text={'Get Weather'} />

      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Weather in {weather.name} is</Text>
          <Text style={styles.weatherText2}>{weather.main.temp}°C  {weather.weather[0].description}</Text>
          <Text style={styles.weatherText2}>{Date()}</Text>
        </View>
      )}
 </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  ImageBackground: {
    flex: 1,
  },
  inputtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 13,
    color: '#fff',
  },
  input: {
    width: '85%',
    height: 60,
    borderWidth: 3,
    borderColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 25,
    marginBottom: 40,
    color: '#fff',
    fontSize: 17,
  },
  weatherContainer: {
    marginTop: 50,
    width:'100%',
    backgroundColor: 'rgba(0,0,0,.2)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
  weatherText: {
    color:'#A1B9C6',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 7,
    textAlign:'center',
  },
  weatherText2: {
    fontSize: 27,
    textAlign:'center',
    fontWeight: 'bold',
    marginVertical: 7,
    color: '#fff',
    fontStyle: 'italic',
  },
});

export default WeatherApp;
