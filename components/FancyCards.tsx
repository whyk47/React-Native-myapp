import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.heading}>FancyCards</Text>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image source={{
                        uri: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Three-Towers-and-glacial-lake-at-Torres-del-Paine-National-Park.jpg'
                    }} style={styles.cardImage} />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Torres Del Paine</Text>
                        <Text style={styles.cardLabel}>Southern Patagonia</Text>
                        <Text style={styles.cardText}>Recognised for its monumental mountains, bright blue icebergs and golden grasslands, the Torres del Paine National Park, in Chile’s Patagonia region, is home to three iconic granite towers, from which the park takes its name.</Text>
                        <Text style={styles.cardFooter}>1h away</Text>
                    </View>
                </View>
            </View>
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
    cardImage: {
        height: 180,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginBottom: 8,    
    },
    card: {
        width: 380,
        height: 360,
        backgroundColor: 'white',
        borderRadius: 6,
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    cardLabel: {
        color: 'black',
        fontSize: 14,
        marginBottom: 4,
    },
    cardText: {
        color: 'black',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
    },
    cardFooter: {
        color: 'black',
        fontSize: 14,
        marginBottom: 6,
    },

})