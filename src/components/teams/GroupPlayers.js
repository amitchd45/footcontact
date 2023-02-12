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
  import PlayerItems from './PlayerItems';
  import PlayerListData from '../data/PlayerListData';

const GroupPlayers = () => {
  const navigate =useNavigation();
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
            <Text style={{fontSize: 24, fontWeight:600,color: '#FFFFFF'}}>Group Players</Text>
            <TouchableOpacity
              onPress={() => {
                // navigate.navigate('HomeScreen');
              }}>
              <Image source={images.ic_home} style={{padding: 10}} />
            </TouchableOpacity>
          </View>

          <View style={styles.team_filter}>

                <TouchableOpacity>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{ fontWeight: 400, fontSize: 18, color: '#000000' }}>Team 1 </Text>
                        <Image source={images.ic_dropdown}/>
                    </View>
                </TouchableOpacity>


                <View style={styles.filter}>
                    <Image source={images.ic_filter} />
                    <TouchableOpacity><Text style={{marginLeft:5}}>Sort</Text></TouchableOpacity>

                </View>


            </View>

            <FlatList
                // snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}

                data={PlayerListData}
                renderItem={({ item }) => <PlayerItems item={item} />}
            />

        </View>
  )
}

export default GroupPlayers

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