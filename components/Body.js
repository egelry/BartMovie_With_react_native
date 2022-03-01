import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import FavouriteList from './MovieComponents/FavouriteList';
import MovieCategories from './MovieComponents/MovieCategories';
import MovieList from "./MovieComponents/MovieList"



export default function AppBar() {
    return (


        <ScrollView >
            <View style={{ flexDirection: "row" }}>

                <View style={{
                    left: 24,
                    top: 10,
                    width: 101,
                    borderTopColor: "#A3374A",
                    borderTopWidth: 2,

                }}>
                    <Text style={styles.categoriesText}>
                        CATEG-ORIES
                    </Text>
                </View>

                <View style={{ top: 15 }}>
                    <MovieCategories />
                </View>
            </View>
            <View style={styles.popularContainer}>
                <Text style={styles.popularText}>WHAT'S POPULAR?¿</Text>
            </View>
            <View >
                <MovieList />
            </View>
            <View style={styles.popularContainer2}>
                <Text style={styles.favouritesText}>FAVOURITES</Text>
            </View>
            <View style={{ marginTop : 15}}>

                <FavouriteList />

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    categoriesText: {
        fontSize: 20,
        color: "#225D65",
        fontWeight: "bold",
        letterSpacing: 5,
    },
    popularText: {
        fontSize: 20,
        color: "#225D65",
        fontWeight: "bold",
        letterSpacing: 5,
    },
    favouritesText: {
        fontSize: 18,
        color: "#225D65",
        fontWeight: "bold",
        letterSpacing: 5
    },
    popularContainer: {
        top: 40,
        left: 24,

    },
    
    popularContainer2: {
        top: 79,
        left: 24,

    }

});
