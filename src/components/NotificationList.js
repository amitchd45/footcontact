import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { images } from '../../constants'

const NotificationList = ({ item }) => {
    return (
        <View style={styles.container}>

            <View style={{
                height: 120, flexDirection: 'row',
            }}>
                <View style={{ flex: 0.25, backgroundColor: 'white', borderBottomLeftRadius: 8, borderTopLeftRadius: 8, justifyContent: 'center' }}>
                    <Image source={item.img}
                        style={{ marginLeft: 15, width: 50, height: 50 }} />
                </View>
                <View style={{ flex: 0.7, backgroundColor: 'white', justifyContent: 'center' }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.datetime}>{item.datetime}</Text>
                </View>
                <View style={{ flex: 0.1, backgroundColor: 'white', borderBottomRightRadius: 8, borderTopRightRadius: 8, }}>
                    {/* <Image source={images.ic_home}
                    style={{width:20,height:20,color:'#000'}}/> */}

                    <Text style={{ fontSize: 18, marginTop: 10, color: '#DEDEDE' }}>X</Text>

                </View>
            </View>

        </View>
    )
}

export default NotificationList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        backgroundColor: 'white',
        marginHorizontal: 19,
        marginBottom: 15,
        borderRadius: 8,


        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,

    },
    datetime: {
        fontSize: 10,
        fontWeight: 400,
        color: '#A3A3A3',
        marginTop: 10

    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: '#000',
    },
    description: {
        fontSize: 14,
        fontWeight: 400,
        color: '#4C4C4C',



    },
    socialImage: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 15,

    }
});

