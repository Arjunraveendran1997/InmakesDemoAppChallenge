import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

export default function Exam() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Exam Corner Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'yellow'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    }
})