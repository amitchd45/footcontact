import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('screen');
import {images} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const PlayerProfile = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6B1687" barStyle="light-content" />
      <View style={styles.appBar}>
        <TouchableOpacity
          onPress={() => {
            navigate.goBack();
          }}>
          <Image source={images.ic_arrowLeft} style={{padding: 10}} />
        </TouchableOpacity>
        <Text style={{fontSize: 24, fontWeight: 600, color: '#FFFFFF'}}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            // navigate.navigate('HomeScreen');
          }}>
          <Image source={images.ic_home} style={{padding: 10}} />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Image source={images.ic_playerProfile} style={styles.image} />

        <Text
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: '#000000',
            marginTop: 10,
          }}>
          Mathis Beauregard
        </Text>
        <Text style={{fontSize: 16, fontWeight: 400, color: '#4C4C4C'}}>
          Member Since 4th March, 2021
        </Text>

        <View style={{flexDirection: 'row', marginTop: 8}}>
          <Image source={images.ic_call} />
          <Image source={images.ic_chat1} />
        </View>

<View style={styles.info}>

</View>

<View style={styles.groups}>

</View>

<View style={styles.event}>

</View>

      </View>
    </View>
  );
};

export default PlayerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  disc: {
    alignSelf: 'center',
    fontWeight: 400,
    fontSize: 15,
    color: '#000000',
    marginHorizontal: 19,
    marginTop: 10,
  },
  appBar: {
    height: 66,
    backgroundColor: '#6B1687',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  team_filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 19,
    backgroundColor: '#FFFFFF',
    height: 69,
  },
  filter: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F7',
    width: 75,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 150,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  info:{
    height:80,
    width,
    backgroundColor:'#FFFFFF',
    // elevation: 1,
  },

  groups:{
    marginTop:2,
    height:80,
    width,
    backgroundColor:'#FFFFFF',
    // elevation: 1,
  },
  event:{
    marginTop:2,
    height:80,
    width,
    backgroundColor:'#FFFFFF',
    // elevation: 1,
  }

});
