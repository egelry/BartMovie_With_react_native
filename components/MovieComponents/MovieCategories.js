import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovieCategories() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.itemContainer}>
                <Icon name="shield" size={24} color="#A49235" />

            </View>
            <View style={styles.itemContainer}>

                <Icon name="soccer-ball-o" size={24} color="#A49235" />

            </View>
            <View style={styles.itemContainer}>

            <Icon name="heart" size={24} color="#A49235" />

            </View>
            <View style={styles.itemContainer}>
            <Icon name="magic" size={24} color="#A49235" />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "75%",
        alignSelf: "center",
        justifyContent: "space-between",
        backgroundColor: "#A3374A",
        flexDirection: "row",
        bottom : 7,
        left : 10
    },
    itemContainer: {
        margin: 10,
        height: 40,
        width: 40,
        backgroundColor: "#1F5860", justifyContent: "center", alignItems: "center"
    }
});
