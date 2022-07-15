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

export default function Verification({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.logoView} source={require('../assets/logo.png')} />
                <Image style={styles.veriLogo} source={require('../assets/verificationLogo.png')} />

                <Text style={styles.firstText}>Verification Code</Text>
                <Text style={styles.secondText}>Please type the verification code sent to</Text>
                <Text style={styles.thirdText}>+91 9876543210</Text>
            </View>

            <View style={styles.bottomMainContainer}>
                <View style={styles.bottomTopContainer}>
                    <TextInput style={styles.smallBox} />
                    <TextInput style={styles.smallBox} />
                    <TextInput style={styles.smallBox} />
                    <TextInput style={styles.smallBox} />
                    <TextInput style={styles.smallBox} />
                    <TextInput style={styles.smallBox} />

                </View>

                <View style={styles.bottomMiddleContainer}>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Register')}
                        style={styles.bottomButton}>
                        <Text style={styles.buttonText}>Resend OTP</Text>
                    </TouchableHighlight>
                    <Text style={{ color: 'white', marginTop: 10 }}>Resend after 28s</Text>
                </View>
                <View style={styles.footerContainer}>
                    <Icon style={styles.bottomIcon} name="call" size={20} color='#14be75' />
                    <Text style={styles.footerText}>Contact Us</Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    topContainer: {
        height: '70%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40
    },
    logoView: {
        width: 180,
        height: 50
    },
    veriLogo: {
        height: 120,
        width: 120,
        marginTop: 90
    },
    firstText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40
    },
    secondText: {
        fontSize: 16,
        color: 'grey'
    },
    thirdText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 25
    },
    bottomMainContainer: {
        height: '30%',
        width: '100%',
        backgroundColor: '#0c273d',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    },
    bottomTopContainer: {
        flexDirection: 'row',
        width: "100%",
        padding: 10,

    },
    smallBox: {
        height: 50,
        width: 50,
        backgroundColor: '#162d40',
        marginLeft: 15,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey'
    },
    bottomMiddleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomButton: {
        height: 50,
        width: "90%",
        backgroundColor: '#14be75',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    footerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomIcon: {
        marginTop: 7,
        marginRight: 5,

    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#14be75',
        marginTop: 10
    }
})