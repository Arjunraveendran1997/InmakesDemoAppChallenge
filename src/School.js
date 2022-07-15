import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight
} from "react-native";

export default function School({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <Image style={styles.mainLogo} source={require('../assets/logo.png')} />
                <Image style={styles.subLogo} source={require('../assets/verificationLogo.png')} />
                <Text style={styles.topText}>Select Your School board</Text>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomInputContainer}>
                    <TextInput style={styles.inputView} placeholder="Select Board" placeholderTextColor="grey" />
                    <Icon style={styles.inputIcon} name="expand-more" size={20} />
                </View>

                <View style={styles.bottomInputContainer}>
                    <TextInput style={styles.inputView} placeholder="Select Class" placeholderTextColor="grey" />
                    <Icon style={styles.inputIcon} name="expand-more" size={20} />
                </View>

                <TouchableHighlight style={styles.buttonView}
                    onPress={() => navigation.navigate('Image')}>
                    <Text style={styles.buttonText}>Continue</Text>
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
        height: '70%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    mainLogo: {
        height: 50,
        width: 180
    },
    subLogo: {
        height: 100,
        width: 90,
        marginTop: 50
    },
    topText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginTop: 50
    },
    bottomContainer: {
        backgroundColor: '#0c273d',
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    bottomInputContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 30,
        alignItems: 'center',

    },
    inputView: {
        width: '90%',
        height: 40,
        backgroundColor: '#162d40',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey'

    },
    inputIcon: {
        marginLeft: -50,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'grey'
    },
    buttonView: {
        width: '85%',
        height: 50,
        backgroundColor: '#14be75',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})