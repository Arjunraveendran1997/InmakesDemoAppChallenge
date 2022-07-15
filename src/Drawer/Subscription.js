import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

export default function Subscription() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Subscription Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'blue'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    }
})