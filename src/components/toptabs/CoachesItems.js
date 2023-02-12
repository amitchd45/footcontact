import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CoachesItems = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={item.img} />
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.position}>{item.position}</Text>
        </View>
        
      </TouchableOpacity>
    </View>
  );
};

export default CoachesItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    
    marginLeft: 19,
    marginTop:20,
  },
 

  title: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4C4C4C',
    marginLeft: 10,
  },
  position: {
    fontSize: 14,
    fontWeight: 400,
    color: '#4C4C4C',
    marginLeft: 10,
  },
});
