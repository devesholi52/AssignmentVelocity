import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import WelcomePage from "../WelcomePage"
import RootHeader from '../Header/RootHeader';

const index = () => {

    const [activeTab, setActiveTab] = useState('1');

    return (
        <View style={styles.Container}>
            <View style={styles.InnerContainer}>
                <TouchableOpacity style={activeTab == "2" ? styles.FirstTextContainer : styles.FirstTextContainerActive} onPress={() => setActiveTab('1')}>
                    <Text>Welcome</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeTab == "1" ? styles.SecondTextContainer : styles.SecondTextContainerActive} onPress={() => setActiveTab('2')}>
                    <Text>Category</Text>
                </TouchableOpacity>
            </View>
            {activeTab == '1' &&
                <>
                    <WelcomePage />
                </>
            }

            {activeTab == '2' &&

                <RootHeader />
            }
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    Container: {
        justifyContent: "space-around",
        paddingTop: 20,
    },
    InnerContainer: {
        flexDirection: "row",
    },
    FirstTextContainer: {
        width: "50%",
        alignItems: 'center',
        borderBottomWidth: 0.7,
        paddingBottom: 10,
        borderBottomColor: "lightgray",
    },
    FirstTextContainerActive: {
        width: "50%",
        alignItems: 'center',
        borderBottomWidth: 0.7,
        borderBottomColor: "red",
        paddingBottom: 10,
        borderBottomColor: "red"
    },
    SecondTextContainer: {
        width: "50%",
        alignItems: 'center',
        borderBottomWidth: 0.7,
        paddingBottom: 10,
        borderBottomColor: "lightgray"
    },
    SecondTextContainerActive: {
        width: "50%",
        alignItems: 'center',
        borderBottomColor: "red",
        borderBottomWidth: 0.7,
        paddingBottom: 10,
        borderBottomColor: "red"
    }
})