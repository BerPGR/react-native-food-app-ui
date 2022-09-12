import React from 'react';
import { Text, Image,  View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

Feather.loadFont()

export default Home = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/profile.png')} style={styles.profileImage}/>
                    <Feather name="menu" size={24} color={colors.textDark}></Feather>
                    {/* Icon */}
                </View>
            </SafeAreaView>

            {/* Titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubtitle}>Food</Text>
                <Text style={styles.titlesTitle}>Delivery</Text>
            </View>

            {/* Search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark}/>
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'
    },

    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },

    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },

    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark
    },

    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5
    },

    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30
    },

    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2
    },

    searchText: {  
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight
    },

})