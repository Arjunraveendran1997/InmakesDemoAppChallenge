import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight
} from "react-native";

export default function Register({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <Image style={styles.mainLogo} source={require('../assets/logo.png')} />
                <Image style={styles.subLogo} source={require('../assets/verificationLogo.png')} />
                <Text style={styles.topText}>Student Details</Text>
            </View>

            <View style={styles.bottomContainer}>
                <TextInput style={styles.inputView} placeholder="Full Name" placeholderTextColor="grey" />
                <TextInput style={styles.inputView} placeholder="Email" placeholderTextColor="grey" />
                <TextInput style={styles.inputView} placeholder="Select State" placeholderTextColor="grey" />
                <TextInput style={styles.inputView} placeholder="Pin code" placeholderTextColor="grey" />

                <TouchableHighlight style={styles.buttonView}
                    onPress={() => navigation.navigate('School')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    topContainer: {
        height: '50%',
        width: '100%',
        borderStartColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },
    mainLogo: {
        height: 40,
        width: 150
    },
    subLogo: {
        height: 100,
        width: 90,
        marginTop: 30
    },
    topText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 50
    },
    bottomContainer: {
        height: '50%',
        width: '100%',
        backgroundColor: '#0c273d',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    },
    inputView: {
        width: '90%',
        height: 40,
        backgroundColor: '#162d40',
        alignItems: 'center',
        paddingLeft: 20,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey'
    },
    buttonView: {
        width: '90%',
        height: 50,
        backgroundColor: '#14be75',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})