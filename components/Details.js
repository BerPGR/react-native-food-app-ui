import React from 'react';
import { Text,  View } from 'react-native';

export default Details = ({ route }) => {

    const { item } = route.params;
    return (
        <View>
            <Text>Details page</Text>
        </View>
    )
}