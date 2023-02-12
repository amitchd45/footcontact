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
  VirtualizedList,
} from 'react-native';

import React from 'react';
const {width, height} = Dimensions.get('screen');
import {images} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import EventTab from '../toptabs/EventTab';
import NoteTab from '../toptabs/NoteTab';
import PlayerRequest from '../toptabs/PlayerRequest';
import CoachesTab from '../toptabs/CoachesTab';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const GroupDetailsScreen = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#6B1687" barStyle="light-content" />
          <View style={styles.appBar}>
            <TouchableOpacity
              onPress={() => {
                navigate.goBack();
              }}>
              <Image source={images.ic_arrowLeft} style={{padding: 10}} />
            </TouchableOpacity>
            <Text style={{fontSize: 24, color: '#FFFFFF'}}>Group Details</Text>
            <TouchableOpacity
              onPress={() => {
                // navigate.navigate('HomeScreen');
              }}>
              <Image source={images.ic_home} style={{padding: 10}} />
            </TouchableOpacity>
          </View>

          <View>
            <Image source={images.ic_matchBannerImage} />
            <Image
              source={images.ic_chatRound}
              style={{alignSelf: 'flex-end', marginTop: -45, marginRight: 10}}
            />
          </View>

          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 600,
              fontSize: 20,
              color: '#000000',
              marginTop: -20,
            }}>
            U10 - FC Magnis Les Bris
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 400,
              fontSize: 16,
              color: '#4C4C4C',
            }}>
            300 Members
          </Text>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
            <Image source={images.ic_Ellipse13} />
            <Image source={images.ic_Ellipse15} style={{marginLeft: -10}} />
            <Image source={images.ic_Ellipse16} style={{marginLeft: -10}} />
            <Image source={images.ic_Ellipse13} style={{marginLeft: -10}} />
            <TouchableOpacity
              onPress={() => {navigate.navigate('GroupPlayers')}}>
              <Image source={images.ic_EllipseTeam} style={{marginLeft: -10}} />
            </TouchableOpacity>
          </View>

          <Text style={styles.disc}>
            One Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Text>

          <View style={{height: 550, marginTop: 10}}>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: '#6B1687',
                tabBarLabelStyle: {fontSize: 13, fontWeight: 400},
                tabBarStyle: {backgroundColor: '#FFFFFF'},
                tabBarScrollEnabled: false,
                tabBarPressColor: '#DDDDDD',
              }}>
              <Tab.Screen
                name="EventTab"
                component={EventTab}
                options={{
                  title: 'Events',
                  tabBarInactiveTintColor: '#4C4C4C',
                  tabBarIndicatorStyle: {backgroundColor: '#6B1687'},
                }}
              />
              <Tab.Screen
                name="NoteTab"
                component={NoteTab}
                options={{
                  title: 'Notes',
                  tabBarInactiveTintColor: '#4C4C4C',
                  tabBarIndicatorStyle: {backgroundColor: '#6B1687'},
                }}
              />
              <Tab.Screen
                name="PlayerRequest"
                component={PlayerRequest}
                options={{
                  title: 'Player Request',
                  tabBarInactiveTintColor: '#4C4C4C',
                  tabBarIndicatorStyle: {backgroundColor: '#6B1687'},
                }}
              />
              <Tab.Screen
                name="CoachesTab"
                component={CoachesTab}
                options={{
                  title: 'Coaches',
                  tabBarInactiveTintColor: '#4C4C4C',
                  tabBarIndicatorStyle: {backgroundColor: '#6B1687'},
                }}
              />
            </Tab.Navigator>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroupDetailsScreen;

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
});
