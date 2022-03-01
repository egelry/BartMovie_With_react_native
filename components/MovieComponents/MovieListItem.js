import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MovieDetail from './MovieDetail';
import { StackNavigator } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

export default function MovieListItem({ title, image, rating }) {
    const navigation = useNavigation();

    return (
        <View style={styles.MovieListItem}>
            <Image style={styles.MovieListItemImgContainer}
                source={{ uri: image }}>

            </Image>
            <View style={{
                backgroundColor: "rgb(240,240,240)",
                borderWidth: 1,
                alignSelf: "flex-end",
                width: 130,
                borderColor: "#2F6C74",
                borderRightWidth: 6,
                borderRightColor: "#2F6C74"
            }}>
                <Text style={{ margin: 4, fontWeight: "bold", color: "#225D65", textAlign: "right" }}>
                    {title}
                </Text>
            </View>
            <View style={{ flexDirection: "row", bottom: 4, justifyContent: "space-between", backgroundColor: "#A3374A" }}>

                <View>

                    <Text style={{ left: 4, color: "white", fontWeight: "bold", fontStyle: "italic" }}>
                        IMDb {rating}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: "#2F6C74", borderLeftColor: "white", borderLeftWidth: 1 }}
                    onPress={() => navigation.navigate('MovieDetail')}
                >
                    <Text style={{ left: 4, color: "white", fontStyle: "italic", }}> Details </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    MovieListItem: {
        borderColor: "#225D65",
        borderWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 24,
        marginRight: 20,
        height: 280,
        width: 180,
        display: "flex",
        justifyContent: "space-between"
    },

    MovieListItemImgContainer: {
        height: "70%",
        width: "100%",
    }

});
