import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert, Button, SafeAreaView } from 'react-native';

const image = {uri : 'https://s2-techtudo.glbimg.com/RxhZy0GoKiZD2GR8UmDit9a6aQI=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/9/A/S0SNZVRxCBgbRFdwSbaQ/elden-ring-perguntas-respostas-pago-gratuito-ps5-xbox-series.jpg'};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={image}  style={styles.image}>
      
      <Text style={{color: 'white',
            textAlign: 'center', 
            fontFamily: 'Cursive', 
            fontSize: '100px'}}>
            Elden Ring
            {'\n'}
            {'\n'}
            LEGAL!
        </Text>
        <View style={styles.secondContainer}>
        <Button
        style={{
    marginHorizontal: 10,
    justifyContent: 'center',
    width: '50%',
    paddingHorizontal: 1,
  }}
  title="SE CONCORDA CLICA" 
  onPress={() => Alert.alert('Right button pressed')}
        />
      
</View>

    </ImageBackground>
  

  </View>


  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  secondContainer: {
    width: '54%',  // Diferente do primeiro contêiner
    height: 150,   // Diferente do primeiro contêiner
    
    justifyContent: 'flex-start',
    alignItems: 'flex-end',  // Alinhamento diferente
  },
  

});

