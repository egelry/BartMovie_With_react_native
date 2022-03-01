import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppBar from './AppBar';
import Body from './Body';

export default function App() {
    return (

        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.appBar}>
                <AppBar />
            </View>

            <View style={styles.bodyContainer}>
                <Body />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({


    mainContainer: {
        backgroundColor: "white",
        flex: 1,
    },
    appBar: {
        flex: 2,
        backgroundColor: "white",
        
    },
    bodyContainer: {
        flex: 7,
        backgroundColor: "white"

    },
});
