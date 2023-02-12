import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const HorizontalView = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', paddingLeft:20,paddingRight:20,paddingTop:15,paddingBottom:10, alignItems: 'center' }}>
                <Image source={item.img} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.socialImage}>
                <Image source={item.socialImage}/>
                <Text style={{fontSize:14,fontWeight:400,color:'#000',left:10}}>2.1k Likes</Text>
            </View>
        </View>
    )
}

export default HorizontalView

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 182,
        backgroundColor: '#FFFFFF',
        marginLeft: 19,
        marginBottom:20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,

    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: '#000',
        left: 10
    },
    description:{
        fontSize: 16,
        fontWeight: 300,
        color: '#4C4C4C',
        marginLeft:20
        
    },
    socialImage:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft:20,
        marginTop:15,

    }
});

