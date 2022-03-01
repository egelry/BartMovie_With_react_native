import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AppBar() {
    return (
        <View style={styles.mainContainer}>
            <View style={{
                flexDirection: "row", width: "55%",
                justifyContent: "space-between"
            }}>
                <View style={styles.logoContainer}>

                    <Image style={styles.tinyLogo} source={require('./dev/static/logo.png')} />

                </View>

            </View>


            <View style={{ flexDirection: "row" }}>

                <View style={{
                    width: 65, backgroundColor: "#2F6C74",
                    height: 65,
                    top:60, left: 20, justifyContent: "center", alignItems: "center"
                }}>
                    <View style={styles.menuContainer}>
                        <Icon name="gear" size={24} color="#A49235" />
                    </View>
                </View>
                <View style={{
                    height: 65,
                    width: 65, backgroundColor: "#2A676F",
                    top: 60, left : 5, justifyContent: "center", alignItems: "center"
                }}>
                    <View style={styles.menuContainer}>
                        <Icon name="user" size={24} color="#A49235" />
                    </View>
                </View>

                <View style={{
                    height: 65,
                    width: 65, backgroundColor: "#25626A",
                    top: 60, right: 10, justifyContent: "center", alignItems: "center"
                }}>
                    <View style={styles.menuContainer}>
                        <Icon name="bars" size={24} color="#A49235" />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    tinyLogo: {
        height: 90,
        width: 90,

    },

    logoContainer: {
        backgroundColor: "#A49235",
        height: 100,
        width: 100,
        top: 30,
        left: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop:18
    },
    logoBackContainer: {
        backgroundColor: "red",
        height: 100,
        width: 100,
        top: 80,
        left: 20,
    },
    menuContainer: {
        justifyContent: "center",

    },

    menu: {
        height: 120,
        width: 90,
        backgroundColor: "white",
        justifyContent: "center",

    },
    mainContainer: {
        display: "flex",
        backgroundColor: "#225D65",
        flexDirection: "row",
        justifyContent: "space-between",

        height: 70
    },

});
