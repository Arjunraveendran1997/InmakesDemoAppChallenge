import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    Button,
    TextInput
} from "react-native";

export default function DrawerContent() {

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.topButton}>
                <Icon name="close" size={24} color="#14be75" />
            </TouchableHighlight>

            <View style={styles.profileSection}>
                <TouchableHighlight style={styles.imageSection}>
                    <Image style={styles.profileImg} source={require('../../assets/profileImage.png')} />
                </TouchableHighlight>
                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginTop: 10 }}>Aron Taylor</Text>
                    <Text style={{ color: 'grey', marginTop: 1 }}>ID: 1234</Text>
                </View>
                <Icon style={styles.profileIcon} name="chevron-right" color='#14be75' />
            </View>

            <View style={styles.middleSection}>
                <View style={styles.pages}>
                    <TextInput style={styles.pageBox} />
                    <Text style={styles.pageTitle}>Exam Corner</Text>
                </View>
                <View style={styles.pages}>
                    <TextInput style={styles.pageBox} />
                    <Text style={styles.pageTitle}>Subscriptions</Text>
                </View>
                <View style={styles.pages}>
                    <TextInput style={styles.pageBox} />
                    <Text style={styles.pageTitle}>Analytics</Text>
                </View>
                <View style={styles.pages}>
                    <TextInput style={styles.pageBox} />
                    <Text style={styles.pageTitle}>Downloads</Text>
                </View>
                <View style={styles.pages}>
                    <TextInput style={styles.pageBox} />
                    <Text style={styles.pageTitle}>Notifications</Text>
                </View>
                <View style={styles.pages}>
                    <TextInput style={styles.pageBox} />
                    <Text style={styles.pageTitle}>Share App</Text>
                </View>
                <View style={styles.pages}>
                    <TextInput style={styles.logoutBox} />
                    <Text style={styles.logoutTitle}>LogOut</Text>
                </View>
                <TouchableHighlight style={styles.footerButton}>
                    <Text style={styles.buttonText}>Enquire now</Text>
                </TouchableHighlight>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0c273d'
    },
    topButton: {
        width: 40,
        height: 40,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        marginLeft: 25,
        marginTop: 30,
        borderColor: 'grey'
    },
    profileSection: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        backgroundColor: 'transparent',
        marginTop: 10
    },
    imageSection: {
        height: 60,
        width: 60,
        backgroundColor: 'black',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    profileImg: {
        height: 55,
        width: 55,
        borderRadius: 29,
    },
    profileIcon: {
        marginLeft: 50,
        marginTop: 15,
        fontSize: 30,

    },
    middleSection: {
        flexDirection: 'column',
        width: '100%',
        height: "70%"
    },
    pages: {
        flexDirection: 'row',
        height: 50,
        width: '90%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingLeft: 10
    },
    pageBox: {
        height: 30,
        width: 30,
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#14be75',
        marginLeft: 20
    },
    pageTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        marginLeft: 30
    },
    logoutBox: {
        height: 30,
        width: 30,
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'red',
        marginLeft: 20
    },
    logoutTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'red',
        marginLeft: 30
    },
    footerButton: {
        height: 50,
        width: '80%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#14be75'
    },
    buttonText: {
        color: '#14be75',
        fontSize: 16,
        fontWeight: '500'
    }

})
