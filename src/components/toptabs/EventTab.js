import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ListData2 from '../data/ListData2'
import UpcomingEventList from '../UpcomingEventList'
import { images } from '../../../constants'

const EventTab = () => {
    return (
        <View style={{ marginTop: 10 }}>

            <View style={styles.add_event}>

                <TouchableOpacity>
                    <Text style={{ fontWeight: 400, fontSize: 18, color: '#6B1687' }}>+ Add New Event</Text>
                </TouchableOpacity>


                <View style={styles.filter}>
                    <Image source={images.ic_filter} />
                    <TouchableOpacity><Text style={{marginLeft:5}}>Sort</Text></TouchableOpacity>

                </View>


            </View>

            <FlatList
                // snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}

                data={ListData2}
                renderItem={({ item }) => <UpcomingEventList item={item} />}
            />
        </View>
    )
}

export default EventTab

const styles = StyleSheet.create({
    filter: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: 75,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,

    },
    add_event: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
        marginHorizontal: 19,

    }
})