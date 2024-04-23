import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.heading}>ActionCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>What's new?</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://miro.medium.com/v2/resize:fit:1024/1*xDi2csEAWxu95IEkaNdFUQ.png'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardBodyText} numberOfLines={3}>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.</Text>
                </View>
                <View style={styles.cardFooter}>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://reactnative.dev')}
                    >
                        <Text style={styles.footerText}>Read more</Text>
                    </TouchableOpacity>
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
    card: {
        width: 380,
        height: 340,
        backgroundColor: 'darkslategrey',
        borderRadius: 6,
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        marginVertical: 8,
        marginHorizontal: 6,

    },
    elevatedCard: {
        elevation: 4,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: 'black',
        shadowOpacity: 1,
    },
    headingContainer: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    cardImage: {
        width: 380,
        height: 200,
    },
    cardBody: {
        padding: 8,
    },
    cardBodyText: {
        color: 'white',
    },
    cardFooter: {
        paddingHorizontal: 8,
    },
    footerText: {
        fontSize: 16,
        color: 'aqua',
    },
})