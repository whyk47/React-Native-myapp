import React from "react";

import {
    View,
    Text,
    SafeAreaView,
    useColorScheme,
    StyleSheet,
    ScrollView,
} from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards />
                <ElevatedCards />
                <FancyCards />
                <ActionCard />
                <ContactList />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: 'white',
    },
    darkText: {
        color: 'black',
    }
})

export default AppPro;