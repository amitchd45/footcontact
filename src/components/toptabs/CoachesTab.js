import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import CoachesItems from './CoachesItems'
import CoachesList from '../data/CoachesList'

const CoachesTab = () => {
  return (
    <View style={styles.container}>
  

      <FlatList
          // snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}

          data={CoachesList}
          renderItem={({ item }) => <CoachesItems item={item} />}
      />

  </View>
  )
}

export default CoachesTab

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
      paddingHorizontal:19,
      backgroundColor:'#FFFFFF',
      height:69,

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
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 3,

  },
});