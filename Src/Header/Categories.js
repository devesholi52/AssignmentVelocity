import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Categories = ({ data, onCategorySelect }) => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.RenderItemcontainer} onPress={() => onCategorySelect(item.id)}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <Text style={styles.Text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            {data && data.length !== 0 ?
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}

                />
                :
                <>
                    <Text style={{ textAlign: "center", paddingBottom: 20 }}>Opps Category not found</Text>
                </>
            }
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: "#ebd8d0"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginHorizontal: 5,
    },
    RenderItemcontainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 4
    },
    Text: {
        fontWeight: "500",
        color: "#000",
        fontSize: 10,
        marginVertical: 2
    }
})