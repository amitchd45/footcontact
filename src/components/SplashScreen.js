import { StyleSheet, ImageBackground, View, Image, StatusBar } from 'react-native'
import React , {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

import { images } from '../../constants'

const SplashScreen = ({navigation}) => {
  // const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
              navigation.navigate('HomeScreen');
        }, 3000);
    }, []);

  return (
    <ImageBackground
      source={images.splash_bg}
      resizeMode='cover'
      style={{ flex: 1, justifyContent: 'center' }}
    >

      <View style={{ alignItems: 'center' }}>
        {/* <StatusBar translucent={true} backgroundColor="#F5F5F5" barStyle="dark-content" /> */}
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            height: 181,
            width: 341,
          }}
        />
      </View>

    </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})