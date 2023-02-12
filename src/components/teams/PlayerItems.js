import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const PlayerItems = ({item}) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate('PlayerProfile');
        }}>
        <Image source={item.img} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigate.navigate('PlayerProfile');
        }}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>

      <View style={styles.circleShape}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 3,
            fontSize: 16,
          }}>
          {item.member}
        </Text>
      </View>
    </View>
  );
};

export default PlayerItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 19,
  },
  circleShape: {
    width: 26,
    height: 26,
    borderRadius: 150 / 2,
    backgroundColor: '#6B1687',
    marginLeft: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4C4C4C',
    marginLeft: 10,
  },
});
