import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image
} from "react-native";

export default function SubjectDetails() {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableHighlight style={styles.topButton}>
                        <Icon name="arrow-back-ios" size={20} color="#14be75" />
                    </TouchableHighlight>
                    <Text style={styles.subjectTitle}>Biology</Text>
                </View>
                <Text style={styles.subTitle}>Long chapter name can be shown here</Text>
                <View style={styles.topEndSection}>
                    <Icon style={{ marginLeft: 32, }} name="radio-button-checked" size={20} color="#14be75" />
                    <Text style={{ marginLeft: 5, color: "#14be75", fontWeight: 'bold' }}>Chapter 1</Text>
                    <Icon style={{ marginLeft: 15 }} name="radio-button-checked" size={20} color="#14be75" />
                    <Text style={{ marginLeft: 5, color: "#14be75", fontWeight: 'bold' }} >3 Parts</Text>
                </View>

                <View style={styles.topNavTitles}>
                    <TouchableHighlight style={styles.navButton1}>
                        <Text style={styles.navText1}>Videos</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navText}>Chapter Test</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navText}>Resources</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navText}>QN Bank</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomCard}>
                    <Image style={styles.cardImg} source={require('../assets/teacher.jpg')} />
                    <Text style={styles.cardTitle}>Long Chapter name can be shown here.</Text>
                    <View style={styles.bottomEndSection}>
                        <Icon style={{ marginLeft: 5, }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }}>Chapter 1</Text>
                        <Icon style={{ marginLeft: 15 }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }} >3 Parts</Text>
                    </View>
                </View>

                <View style={styles.bottomCard}>
                    <Image style={styles.cardImg} source={require('../assets/teacher.jpg')} />
                    <Text style={styles.cardTitle}>Long Chapter name can be shown here.</Text>
                    <View style={styles.bottomEndSection}>
                        <Icon style={{ marginLeft: 5, }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }}>Chapter 1</Text>
                        <Icon style={{ marginLeft: 15 }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }} >3 Parts</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    topContainer: {
        height: '30%',
        width: '100%',
        backgroundColor: '#0c273d'
    },
    topButton: {
        width: 40,
        height: 40,
        marginTop: 30,
        marginLeft: 30,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'grey',
        paddingLeft: 5
    },
    subjectTitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 100,
        marginTop: 25
    },
    subTitle: {
        color: 'white',
        width: '60%',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 5
    },
    topEndSection: {
        flexDirection: 'row',
        marginTop: 10
    },
    topNavTitles: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    navButton1: {
        width: '25%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        borderBottomWidth: 5,
        borderBottomColor: '#14be75'
    },

    navText1: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    navButton: {
        width: '25%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
    },

    navText: {
        color: 'white',
        fontSize: 16,

    },
    bottomContainer: {
        height: '70%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bottomCard: {
        width: '85%',
        height: 250,
        flexDirection: 'column',
        marginTop: 20,
        borderRadius: 10,
        elevation: 4,
        alignItems: 'center'
    },
    cardImg: {
        width: '95%',
        height: 150,
        borderRadius: 10
    },
    cardTitle: {
        fontSize: 20,
        color: 'black',
        marginTop: 10,
        width: '80%',
        fontWeight: 'bold'
    },
    bottomEndSection: {
        flexDirection: 'row',
        marginTop: 5
    }
})