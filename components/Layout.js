import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Layout = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    
    box1: {
        height: 50,
        width: 50,
        backgroundColor: 'royalblue'
    },

    box2: {
        height: 50,
        width: 50,
        backgroundColor: 'indianred'
    },

    box3: {
        height: 50,
        width: 50,
        backgroundColor: 'lemonchiffon'
    }
})

export default Layout;