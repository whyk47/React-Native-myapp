import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.heading}>Elevated Cards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>right</Text>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8,
    },
    elevatedCard: {
        backgroundColor: 'grey',
        elevation: 4,
        shadowOffset: {
            width: 1, 
            height: 1,
        },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
    },
})