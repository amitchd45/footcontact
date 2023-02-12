import { View, Text, SafeAreaView, FlatList, StyleSheet, Button, Image, StatusBar, ScrollView, TouchableOpacity, Modal, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'

import ListData3 from '../data/ListData3'
import GroupTeamList from '../teams/GroupTeamList'
const { width } = Dimensions.get("window");

import { images } from '../../../constants';

const TeamsPage = () => {
  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor='#6B1687' barStyle="light-content" />
          <View style={styles.appBar}>
            <Text style={{ fontSize: 24, fontWeight: 600, color: '#FFFFFF' }}>Groups</Text>
          </View>

          <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
            <FlatList
              scrollEnabled={false}
              data={ListData3}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <GroupTeamList item={item} />}
              numColumns={2}
              keyExtractor={item => item.id}
            />

            <View style={{
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'center'
            }}>
              <Text style={{ color: 'gray', fontSize: 14, }}>Don't have an account? </Text>

              <TouchableOpacity
                style={{ alignItems: 'center', justifyContent: 'center' }}
                onPress={() => {
                  console.log("okkkkkkk");
                  toggleModalVisibility()
                }}
              >
                <Text
                  style={{
                    color: '#6B1687',

                  }}
                >Enter Code</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </ScrollView>

      <Modal animationType="fade"
        transparent visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}>
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>

            <Text style={styles.title}>Enter Group Code</Text>
          <TextInput placeholder="Enter Code"
            value={inputValue} style={styles.textInput}
            onChangeText={(value) => setInputValue(value)} />
          <TouchableOpacity onPress={toggleModalVisibility}
            style={styles.submit}>
            <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleModalVisibility}
            style={styles.submit}>
            <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    </SafeAreaView >
  )
}

export default TeamsPage

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F2F2F7',
    marginBottom: 50,
    width: '100%',
  },
  submit: {
    backgroundColor: '#6B1687',
    width: "80%",
    height: 50,
    borderRadius: 6,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,

  },
  appBar: {
    height: 66,
    backgroundColor: '#6B1687',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",

  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) },
    { translateY: -90 }],
    height: 260,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  textInput: {
    width: "80%",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 16
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginBottom: 19,
    // marginTop:-30


  }
});