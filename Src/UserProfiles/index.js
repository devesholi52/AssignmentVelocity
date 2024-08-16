import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={styles.RenderItemcontainer}>
            <Image
                source={item.image}
                style={styles.image}
            />
            <Text style={styles.Text}>{item.name}</Text>
            <Image
                source={item.flag}
                style={styles.smallimage}
            />
        </View>
    );


    return (
        <View style={styles.container}>
            {data && data.length !== 0 ?
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={4}
                />
                :
                <>
                    <Text style={{ textAlign: "center" }}>No Data Available</Text>
                </>
            }
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        objectFit: "cover",
        marginHorizontal: 10,
    },
    RenderItemcontainer: {
        alignItems: "center",
        gap: 10,
        marginBottom: 20,
        position: "relative",
    },
    smallimage: {
        position: "absolute",
        width: 25,
        height: 25,
        right: 1,
        top: 3,
        borderRadius: 50,
    },
    Text: {
        fontWeight: "600",
        color: "#000",
        fontSize: 16
    }
})