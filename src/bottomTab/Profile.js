import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    TouchableOpacity
} from "react-native";

export default function Profile({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.ProfileText}>Profile</Text>
                <Icon style={styles.topIcon} name="notifications" size={24} color='#14be75' />
                <TouchableHighlight style={styles.topButton}
                    onPress={() => navigation.navigate('Chatbar')}>
                    <Icon name="apps" size={24} color="#14be75" />
                </TouchableHighlight>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomProfileView}>
                    <View style={styles.imgView}>
                        <Image style={styles.image} source={require('../../assets/profileImage.png')} />
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: "bold" }}>Alan Joe</Text>
                            <Text style={{ color: 'black', marginTop: 3, fontSize: 16 }}>ID: 1234</Text>
                        </View>
                    </View>
                    <Text style={{ color: 'black', marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>Personal Info</Text>

                    <View style={styles.bottomCardContainer}>
                        <TouchableOpacity style={styles.bottomCards1}>
                            <Text style={styles.cardTitle1}>Account Settings</Text>
                            <Text style={styles.cardSubtitle1}>Alan Joe</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomCards}>
                            <Text style={styles.cardTitle}>Email</Text>
                            <Text style={styles.cardSubtitle} >AlanJoe@gmail.com</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomCards}>
                            <Text style={styles.cardTitle}>Number</Text>
                            <Text style={styles.cardSubtitle}>+91 9876543210</Text>
                        </TouchableOpacity>

                        <Text style={{ color: 'black', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 15, marginBottom: 15 }}>Course Info</Text>

                        <TouchableOpacity style={styles.bottomCards}>
                            <Text style={styles.cardTitle}>Centre</Text>
                            <Text style={styles.cardSubtitle}>Inmakes Edu</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomCards}>
                            <Text style={styles.cardTitle}>Course</Text>
                            <Text style={styles.cardSubtitle}>Plustwo Biology</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomCards}>
                            <Text style={styles.cardTitle}>Payment status</Text>
                            <Text style={styles.cardSubtitle}>Free</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomCards}>
                            <Text style={styles.cardTitle}>Expiry Date</Text>
                            <Text style={styles.cardSubtitle}>Not Applicable</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon style={styles.buttonIcon} name="credit-card" size={24} color="black" />
                    <Text style={styles.buttonText}>Custom Payment</Text>
                    <Icon style={styles.buttonSecondIcon} name="chevron-right" size={24} />
                </TouchableOpacity>
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
        height: '40%',
        width: '100%',
        backgroundColor: '#0c273d',
        flexDirection: 'row',
        paddingTop: 20
    },
    ProfileText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        marginLeft: '40%'

    },
    topIcon: {
        marginTop: 3,
        marginLeft: 90,
        marginRight: -10
    },
    topButton: {
        height: 30,
        width: 30,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    bottomContainer: {
        height: '75%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',


    },
    bottomProfileView: {
        height: '100%',
        width: '85%',
        backgroundColor: 'white',
        marginTop: -170,
        borderRadius: 10,
        elevation: 4,
        flexDirection: 'column'
    },
    imgView: {
        flexDirection: 'row',
        height: 90,
        width: '100%',
        alignItems: 'center',

    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 20,
        borderRadius: 25
    },
    bottomCardContainer: {
        width: '100%',
        height: "70%",
        marginLeft: 20,
        marginTop: 5
    },
    bottomCards1: {
        height: '13%',
        width: '90%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardTitle1: {
        fontSize: 16,
        fontWeight: '500',
        color: 'grey',
        width: '40%'
    },
    cardSubtitle1: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        marginLeft: 30
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'grey',
        width: '40%'
    },
    cardSubtitle: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        marginLeft: 30
    },
    bottomCards: {
        height: '13%',
        width: '90%',
        borderBottomWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerButton: {
        width: "85%",
        height: 50,
        backgroundColor: '#14be75',
        elevation: 4,
        borderColor: 'grey',
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonIcon: {
        marginLeft: 50
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    buttonSecondIcon: {
        marginLeft: 80
    }

})