import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Recent from "./bottomTab/Recent";
import Exam from "./bottomTab/Exam";
import Profile from "./bottomTab/Profile";
import Contact from "./bottomTab/Contact";

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableHighlight,
    TextInput
} from "react-native";

const Tab = createBottomTabNavigator();

export default function Class({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <ImageBackground style={styles.imgBack}
                    source={require('../assets/mainBg.jpg')}>
                    <TouchableHighlight style={styles.topButton}
                        onPress={() => navigation.navigate('Drawer')}>
                        <Icon name="apps" size={35} color="#14be75" />
                    </TouchableHighlight>
                    <Image style={styles.mainLogo} source={require('../assets/logo.png')} />

                    <TextInput style={styles.topEndButton}>
                        <Icon style={styles.endButtonIcon} name="radio-button-checked" size={17} />
                        <Text style={styles.endButtonText}>Classes</Text>
                    </TextInput>
                </ImageBackground>
            </View>

            <View style={styles.middleSection}>
                <ImageBackground style={styles.darkBg}
                    source={require('../assets/darkbg.jpg')}>
                    <Text style={{ color: 'white', marginLeft: 20, fontWeight: 'bold' }}>Class</Text>
                    <Text style={{ color: 'white', marginLeft: 20 }}>Plus Two Science</Text>
                    <Icon style={styles.middleIcon} name="expand-more" size={20} color="white" />
                </ImageBackground>
            </View>

            <View style={styles.subjectSection}>
                <TouchableHighlight style={styles.subjectButton}
                    onPress={() => navigation.navigate('Biology')}>
                    <Text style={styles.subjectText}>Biology</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.subjectButton}>
                    <Text style={styles.subjectText}>Physics</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.subjectButton}>
                    <Text style={styles.subjectText}>Chemistry</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.subjectButton}>
                    <Text style={styles.subjectText}>Maths</Text>
                </TouchableHighlight>
            </View>
            <Text style={{ color: 'black', marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>Recent Cources</Text>
            <View style={styles.courseSection}>
                <Image style={styles.courseImg} source={require('../assets/courseImg.jpg')} />
                <Image style={styles.courseImg} source={require('../assets/courseImg.jpg')} />
            </View>

            <View style={styles.footerSection}>
                <View style={styles.footerButtons}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Target Live Classes</Text>
                    <Text style={{ color: 'white', fontSize: 14, }}>Live classes by Best Trainers</Text>
                </View>
                <View style={styles.footerButtons}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Welcome</Text>
                    <Text style={{ color: 'white', fontSize: 14, }}> to Inmakes Learning Hub</Text>
                </View>
            </View>

            <View style={{ height: 50, width: '100%', position: 'absolute', bottom: 15 }}>

                <Tab.Navigator screenOptions={{
                    tabBarColor: 'white'
                }}>
                    <Tab.Screen name="Recent" component={Recent} options={{
                        tabBarLabel: 'Recent',
                        tabBarIcon: ({ color }) => (
                            <Icon name="play-arrow" color='grey' size={26} onPress={() => navigation.navigate('Recent')} />
                        ),
                        tabStyle: {
                            marginTop: (Platform.OS === 'ios') ? 0 : 0,
                            height: 40,
                            flexDirection: 'row'
                        }
                    }} />
                    <Tab.Screen name="Exam" component={Exam} options={{
                        tabBarLabel: 'Exams',
                        tabBarIcon: ({ color }) => (
                            <Icon name="description" color='grey' size={26} />
                        ),
                    }} />
                    <Tab.Screen name="Profile" component={Profile} options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <Icon name="accessibility-new" color='grey' size={26} onPress={() => navigation.navigate('Profile')} />
                        ),
                    }} />
                    <Tab.Screen name="Contact" component={Contact} options={{
                        tabBarLabel: 'Contact',
                        tabBarIcon: ({ color }) => (
                            <Icon name="mail" color='grey' size={26} />
                        ),
                    }} />

                </Tab.Navigator>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
    topContainer: {
        height: '25%',
        width: '100%'
    },
    imgBack: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    topButton: {
        height: 40,
        width: 40,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    mainLogo: {
        width: 110,
        height: 30,
        marginLeft: 10
    },
    topEndButton: {
        height: 40,
        width: 100,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        borderWidth: 1,
        marginLeft: 100,
        borderRadius: 10,
        paddingTop: 5,
        borderColor: 'green'
    },
    endButtonIcon: {
        marginRight: 4,
        color: '#14be75',
    },
    endButtonText: {
        color: '#14be75',
        fontWeight: 'bold',
        marginLeft: 5
    },
    middleSection: {
        width: "80%",
        height: 60,
        backgroundColor: 'red',
        marginTop: -30,
        marginLeft: 50,
        borderRadius: 10
    },
    darkBg: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',

    },
    middleIcon: {
        marginLeft: 270,
        marginTop: -30
    },
    subjectSection: {
        flexDirection: 'row',
        height: "20%",
        width: '100%',
        alignItems: 'center',
        paddingLeft: 10

    },
    subjectButton: {
        width: 100,
        height: 30,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#14be75',
        marginRight: 10
    },
    subjectText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },
    courseSection: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 10
    },
    courseImg: {
        height: 100,
        width: 180,
        marginRight: 20
    },
    footerSection: {
        height: '30%',
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10
    },
    footerButtons: {
        height: "80%",
        width: 250,
        backgroundColor: '#0c273d',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 10
    }

})