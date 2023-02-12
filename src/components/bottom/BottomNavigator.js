import { View, Text,Image } from 'react-native'
import React from 'react'

import HomePage from './HomePage';
import TeamsPage from './TeamsPage';
import EventsPage from './EventsPage';
import MessagesPage from './MessagesPage';
import ProfilePage from './ProfilePage';

import { images } from '../../../constants';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name='HomePage' component={HomePage}
      options={{
        headerShown: false,
        title:'Home',
        tabBarActiveTintColor:'#6B1687',
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={images.ic_home}
              style={{
                // width: 20,
                // height: 20,
                tintColor: tabInfo.focused ? '#6B1687' : '#A3A3A3',
              }}
            />
          );
        },
      }}
      />
      <Bottom.Screen name='TeamsPage' component={TeamsPage}
      options={{
        headerShown: false,
        title:'Teams',
        tabBarActiveTintColor:'#6B1687',
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={images.ic_teams}
              style={{
                // width: 24,
                // height: 19,
                tintColor: tabInfo.focused ? '#6B1687' : '#A3A3A3',
              }}
            />
          );
        },
      }}
      />
      <Bottom.Screen name='EventsPage' component={EventsPage}
      options={{
        headerShown: false,
        tabBarActiveTintColor:'#6B1687',
        title:'Events',
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={images.ic_event}
              style={{
                // width: 20,
                // height: 20,
                tintColor: tabInfo.focused ? '#6B1687' : '#A3A3A3',
              }}
            />
          );
        },
      }}
      />
      <Bottom.Screen name='MessagesPage' component={MessagesPage}
      options={{
        headerShown: false,
        tabBarActiveTintColor:'#6B1687',
        title:'Message',
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={images.ic_message}
              style={{
                // width: 20,
                // height: 20,
                tintColor: tabInfo.focused ? '#6B1687' : '#A3A3A3',
              }}
            />
          );
        },
      }}
      />
      <Bottom.Screen name='ProfilePage' component={ProfilePage}
      options={{
        headerShown: false,
        title:'Profile',
        tabBarActiveTintColor:'#6B1687',
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={images.ic_profile}
              style={{
                // width: 20,
                // height: 20,
                tintColor: tabInfo.focused ? '#6B1687' : '#A3A3A3',
              }}
            />
          );
        },
      }}
      />
    </Bottom.Navigator>
  )
}

export default BottomNavigator