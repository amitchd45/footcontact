import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GroupTeamList = ({ item }) => {
    const navigate = useNavigation();
    return (
        <View
            style={styles.container}>
            <TouchableOpacity
                onPress={() => navigate.navigate("GroupDetailsScreen")}>
                <View style={styles.setAlignment}>
                    <Image
                        style={styles.imageThumbnail}
                        source={item.img}
                    />
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default GroupTeamList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center',
        flexDirection: 'column',
        margin: 10,
        height: 162,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    setAlignment: {
        // justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    imageThumbnail: {
        // justifyContent: 'center',
        // alignItems:'center',
        // alignContent:'center',
        width: 64,
        height: 66,

    },
    title: {
        fontSize: 14,
        // fontWeight:400,
        color: '#4C4C4C'
    },
    type: {
        fontSize: 16,
        // fontWeight: 600,
        marginTop: 5,
        color: '#000000'
    }
});