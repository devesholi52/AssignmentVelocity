import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import IconFilter from 'react-native-vector-icons/Ionicons';
import IconCMicro from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ searchText, onSearch }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.IconContainer}>
                <Image
                    source={require('../Assets/Search.webp')}
                    style={styles.Searchimage}
                />
                <TextInput placeholder='Search'
                    style={styles.TextInput}
                    value={searchText}
                    onChangeText={onSearch} />
                <IconCMicro name="microphone" size={20} color="black" style={styles.Mic} />
            </View>
            <View style={styles.FilterImageView}>
                <IconFilter name="filter" size={20} color="black" />

            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    Container: {
        paddingLeft: 20,
        flexDirection: "row",
        alignItems: 'center',
        gap: 10,
        marginVertical: 10,
        marginTop: 20
    },
    IconContainer: {
        flexDirection: "row",
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#ebd8d0"

    },
    Searchimage: {
        width: 20,
        height: 20,
        marginHorizontal: 10,
    },
    TextInput: {
        width: "85%",
    }
    , Mic: {
        position: "relative",
        right: "13%",
        marginHorizontal: 10,


    },
    FilterImageView: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: "#ebd8d0",
        alignItems: "center"

    }
})