import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from "react-native";

export default function Image({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <Text style={styles.topText}>Images/Illustrations</Text>
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.bottomTitle}>App tour title</Text>
                <Text style={styles.bottomSubTitle}>The app tour description goes here.</Text>

                <View style={styles.footerContainer}>
                    <TouchableHighlight style={styles.inputView}
                        onPress={() => navigation.navigate('Class')}
                    >
                        <Icon name="arrow-forward" size={30} color="white" />
                    </TouchableHighlight>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
    },
    topContainer: {
        height: '70%',
        width: '95%',
        backgroundColor: '#cfd1d0',
        marginLeft: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700'
    },
    bottomContainer: {
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40
    },
    bottomTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    bottomSubTitle: {
        fontSize: 16
    },
    footerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        backgroundColor: 'grey',
        marginTop: 30,
        borderRadius: 10
    },
    inputView: {
        backgroundColor: '#14be75',
        height: 67,
        width: 67,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'white'
    }
})