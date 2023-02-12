import { StyleSheet, Text, Image, View, Dimensions, ImageBackground, FlatList, StatusBar, SafeAreaView, ScrollView, VirtualizedList } from 'react-native'
import React from 'react'

import { images } from '../../../constants';
const { width, height } = Dimensions.get("screen");
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import HorizontalView from './HorizontalView';
import NotificationList from '../NotificationList';
import UpcomingEventList from '../UpcomingEventList';
import ListData from '../data/ListData';
import ListData1 from '../data/ListData1';
import ListData2 from '../data/ListData2';

const HomePage = () => {
    return (
        <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar backgroundColor='#FFFFFF' barStyle="dark-content" />
                    <View style={{ height: 326, backgroundColor: '#6B1687', }}>

                        <ImageBackground source={images.ic_whitebackground} style={{ height: 125 }}>

                            <View style={styles.header}>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={images.ic_Scoreimage} />
                                    <Text style={styles.headerText}>
                                        {"Soccer<br/>Champion".split("<br/>").join("\n")}
                                    </Text>
                                </View>

                                <Image source={images.ic_userimage} />
                            </View>

                        </ImageBackground>

                        <View style={{ margin: 19 }}>
                            <Text style={{ fontSize: 24, color: 'white', fontWeight: '600' }}>Hi, John Smith</Text>
                            <Text style={{ fontSize: 16, color: '#FAEAFF', fontWeight: '300' }}>Lorem Ipsum is simply dummy</Text>
                        </View>

                    </View>

                    <View style={{ top: -110, }}>
                        <FlatList
                            horizontal
                            // pagingEnabled
                            scrollEnabled={true}
                            snapToAlignment='center'
                            showsHorizontalScrollIndicator={false}
                            data={ListData}
                            renderItem={({ item }) => <HorizontalView item={item} />}
                        />

                        <View style={styles.head_notification}>
                            <Text style={styles.notifications}>Latest Notifications</Text>
                            <Text style={styles.viewall}>View All</Text>
                        </View>

                        <View style={{marginTop:10}}>

                            <FlatList
                                snapToAlignment='center'
                                showsHorizontalScrollIndicator={false}
                                scrollEnabled={false}

                                data={ListData1}
                                renderItem={({ item }) => <NotificationList item={item} />}
                            />
                        </View>

                        <View style={styles.head_notification}>
                            <Text style={styles.notifications}>Upcoming Events</Text>
                            <Text style={styles.viewall}>View All</Text>
                        </View>

                        <View style={{marginTop:10}}>

                            <FlatList
                                snapToAlignment='center'
                                showsHorizontalScrollIndicator={false}
                                scrollEnabled={false}

                                data={ListData2}
                                renderItem={({ item }) => <UpcomingEventList item={item} />}
                            />
                        </View>

                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5F5F5',
        // width,
        // height,
        marginBottom: 50,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        alignItems: 'center',
        top: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        color: '#000'

    },
    head_notification: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 19
    },
    viewall: {
        fontSize: 16,
        fontWeight: 400,
        color: '#6B1687',
    },
    notifications: {
        fontSize: 20,
        fontWeight: 600,
        color: '#000',
    }

})