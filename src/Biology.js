import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

export default function Biology({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableHighlight style={styles.topButton}
                    onPress={() => navigation.navigate('Class')}>
                    <Icon name="arrow-back-ios" size={20} color="#14be75" />
                </TouchableHighlight>
                <Text style={styles.subjectTitle}>Biology</Text>
                <View style={styles.topEndSection}>
                    <Icon style={{ marginLeft: 32, }} name="radio-button-checked" size={20} color="#14be75" />
                    <Text style={{ marginLeft: 5, color: "#14be75", fontWeight: 'bold' }}>Chapter 1</Text>
                    <Icon style={{ marginLeft: 15 }} name="radio-button-checked" size={20} color="#14be75" />
                    <Text style={{ marginLeft: 5, color: "#14be75", fontWeight: 'bold' }} >3 Parts</Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomCards} >
                    <Text style={styles.cardTitle} onPress={() => navigation.navigate('SubjectDetails')}  >Long chapter name can be shown here</Text>
                    <View style={styles.cardBottom}>
                        <Icon style={{ marginLeft: -10, }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }}>Chapter 1</Text>
                        <Icon style={{ marginLeft: 15 }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }} >3 Parts</Text>
                    </View>
                </View>

                <View style={styles.bottomCards}>
                    <Text style={styles.cardTitle} >Long chapter name can be shown here</Text>
                    <View style={styles.cardBottom}>
                        <Icon style={{ marginLeft: -10, }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }}>Chapter 1</Text>
                        <Icon style={{ marginLeft: 15 }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }} >3 Parts</Text>
                    </View>
                </View>

                <View style={styles.bottomCards}>
                    <Text style={styles.cardTitle} >Long chapter name can be shown here</Text>
                    <View style={styles.cardBottom}>
                        <Icon style={{ marginLeft: -10, }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }}>Chapter 1</Text>
                        <Icon style={{ marginLeft: 15 }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }} >3 Parts</Text>
                    </View>
                </View>

                <View style={styles.bottomCards}>
                    <Text style={styles.cardTitle} >Long chapter name can be shown here</Text>
                    <View style={styles.cardBottom}>
                        <Icon style={{ marginLeft: -10, }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }}>12 Chapters</Text>
                        <Icon style={{ marginLeft: 15 }} name="radio-button-checked" size={20} color="grey" />
                        <Text style={{ marginLeft: 5, color: "grey", fontWeight: 'bold' }} >134 Hours</Text>
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
        backgroundColor: '#0c273d',
        flexDirection: 'column'
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
        marginTop: 20,
        fontSize: 20,
        marginLeft: 30,
        fontWeight: 'bold'
    },
    topEndSection: {
        flexDirection: 'row',
        marginTop: 10
    },
    bottomContainer: {
        width: '100%',
        height: '80%',
        flexDirection: 'column',
        alignItems: 'center',

    },
    bottomCards: {
        width: '85%',
        height: 100,
        backgroundColor: 'white',
        marginTop: -20,
        borderRadius: 10,
        elevation: 4,
        alignItems: 'center',
        marginBottom: 40

    },
    cardTitle: {
        color: 'black',
        width: '70%',
        fontSize: 18,
        fontWeight: 'bold',
        elevation: 4,
        marginTop: 15
    },
    cardBottom: {
        flexDirection: 'row',
        paddingTop: 5,
    }
})