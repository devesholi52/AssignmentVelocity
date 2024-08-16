import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>Welcome</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    Container: {
        justifyContent: "center",
        height: "100%",
        alignItems: "center"
    },
    Text: {
        fontSize: 60,
        fontWeight: "600",
        color: "#000"

    },

})