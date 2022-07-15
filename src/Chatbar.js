import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";

export default function Chatbar() {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <ImageBackground style={styles.imgBg}
                    source={require('../assets/teacher.jpg')}>
                    <Icon name="replay" size={50} color="black" />
                </ImageBackground>
                <View style={styles.secondContainer}>
                    <Text style={styles.secondText} >Long chapter name can be shown here</Text>
                    <Icon name="more-vert" size={40} color="grey" />
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                        <Icon name="file-download" size={24} color="white" />
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Download</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                    <View style={{ width: '33%', marginLeft: 20, flexDirection: 'row' }}>
                        <Icon name="arrow-back-ios" size={20} color="white" />
                        <Text style={{ color: 'white' }}>Previous</Text>
                    </View>

                    <View style={{ width: '33%', flexDirection: 'row' }}>
                        <Icon name="radio-button-checked" color="#14be75" />
                        <Text style={{ color: '#14be75', marginLeft: 5 }}>Part 1</Text>
                    </View>

                    <View style={{ width: '33%', flexDirection: 'row' }}>
                        <Text style={{ color: 'white', marginLeft: 30, marginRight: 5 }}>Next</Text>
                        <Icon name="arrow-forward-ios" size={20} color="white" />
                    </View>

                </View>
            </View>

            <View style={styles.bottomContainer}>

                <View style={styles.bottomFirstView}>
                    <Text style={styles.bottomFirstTitle}>Your sample question can be shown here no matter how long</Text>
                    <Image style={styles.bottomFirstImage} source={require('../assets/profileImage.png')} />
                </View>

                <View style={styles.bottomSecondView}>
                    <Text style={styles.bottomSecondTitle}>Ask a question?</Text>
                    <TouchableHighlight style={styles.bottomSecondImage}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Post</Text>
                    </TouchableHighlight>
                </View>

                <TouchableOpacity style={styles.footerButton}>
                    <Icon style={styles.buttonIcon} name="group" size={30} />
                    <Text style={styles.buttonText}>Chat with Teacher</Text>
                </TouchableOpacity>

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
    topContainer: {
        height: '30%',
        width: '100%',
    },
    imgBg: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        height: 80,
        alignItems: 'center'
    },
    secondText: {
        color: 'white',
        fontSize: 16,
        width: '50%',
        marginLeft: 20
    },
    bottomContainer: {
        width: '100%',
        height: '40%',
        marginTop: 230,
        alignItems: 'center'
    },
    bottomFirstView: {
        width: '90%',
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 70,
        borderRadius: 10,
        alignItems: 'center'
    },
    bottomFirstTitle: {
        color: 'white',
        width: '80%',
        marginLeft: 10,
        fontSize: 16
    },
    bottomFirstImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop: 5,
        marginLeft: 5
    },
    bottomSecondView: {
        width: '90%',
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15

    },
    bottomSecondTitle: {
        color: 'white',
        width: '80%',
        marginLeft: 10,
        fontSize: 16

    },
    bottomSecondImage: {
        width: 60,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 5,
        marginLeft: -10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerButton: {
        width: "90%",
        height: 50,
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#14be75',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonIcon: {
        color: "#14be75"
    },
    buttonText: {
        color: "#14be75",
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5
    }
})