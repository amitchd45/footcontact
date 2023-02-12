import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';


const UpcomingEventList = ({ item }) => {
    const navigate=useNavigation();
    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <View style={{
                    height: 120, flexDirection: 'row',
                }}>
                    <View style={{ flex: 0.03, backgroundColor: 'white', borderBottomLeftRadius: 8, borderTopLeftRadius: 8, justifyContent: 'center' }}>
                        <LinearGradient colors={['#008D56', '#73D45F']}>
                            <View style={{ height: 120, }}>

                            </View>
                        </LinearGradient>

                    </View>

                    <View style={{ flex: 0.25, backgroundColor: 'white', borderBottomLeftRadius: 8, borderTopLeftRadius: 8, justifyContent: 'center' }}>
                        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={styles.count}>{item.count}</Text>
                            <Text style={styles.month}>June</Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.5, backgroundColor: 'white', justifyContent: 'center' }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                        <Text style={styles.datetime}>{item.datetime}</Text>
                    </View>
                    <View style={{ flex: 0.2, backgroundColor: 'white', borderBottomRightRadius: 8, borderTopRightRadius: 8, }}>
                        <Image source={item.img}
                            style={{ marginLeft: 15, marginTop: 20, width: 40, height: 40 }} />

                    </View>
                </View>
            </TouchableOpacity>


        </View>
    )
}

export default UpcomingEventList

const styles = StyleSheet.create({
    count: {
        fontSize: 44,
        fontWeight: 700,
        color: '#484848'
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 400,
        color: '#4C4C4C'
    },
    month: {
        fontSize: 21,
        fontWeight: 700,
        color: '#484848'
    },
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
        fontSize: 14,
        fontWeight: 400,
        color: '#4C4C4C',
        marginTop: 10

    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        color: '#000',
    },
    description: {
        fontSize: 18,
        fontWeight: 600,
        color: '#000000',



    },
    socialImage: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 15,

    }
});
