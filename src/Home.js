import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight
} from "react-native";

export default function Home({ navigation }) {

    return (
        <View style={styles.container} >
            <View style={styles.topContainer}>
                <Image style={styles.logoView} source={require('../assets/logo.png')} />
                <Text style={styles.middleTextTitle}>Enter your mobile number</Text>
                <Text>We will send you an OTP to verify</Text>
            </View>

            <View style={styles.bottomMainContainer}>
                <TextInput style={styles.bottomFirstBox}
                    placeholder="+91"
                    placeholderTextColor="#a9aaab" >
                </TextInput>

                <TextInput style={styles.bottomSecondBox}
                    placeholder="Mobile Number"
                    placeholderTextColor="#a9aaab" />
                <View style={styles.bottomContainer}>
                    <TouchableHighlight style={styles.bottomButton}
                        onPress={() => navigation.navigate('Verification')}>
                        <Text style={styles.buttonText}>Continue</Text>
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

        backgroundColor: "#fff",

    },
    topContainer: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logoView: {
        height: "10%",
        width: '40%',
        marginTop: 200
    },
    textContainer: {
        width: '100%',
        marginTop: 100,
        alignItems: 'center'
    },
    middleTextTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 150
    },
    bottomMainContainer: {
        backgroundColor: '#0c273d',
        width: '100%',
        height: "30%",
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    bottomFirstBox: {
        width: 50,
        height: 50,
        backgroundColor: '#162d40',
        marginTop: 20,
        borderRadius: 10,
        paddingLeft: 10,
        marginLeft: 30,

    },
    bottomSecondBox: {
        height: 50,
        width: 180,
        marginTop: 20,
        backgroundColor: '#162d40',
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 10
    },
    bottomContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10

    },
    bottomButton: {
        width: 250,
        height: 50,
        backgroundColor: "#fff",
        marginLeft: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14be75'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'

    }
})