import React from 'react';
import { capitalize } from '../utils/misc';
import { View } from 'react-native';
import { Text } from '../custom/Text';
const Type = ({ type, style }) => {
    return (
        <View>
            <Text small style={style}>
                {capitalize(type)}
            </Text>
        </View>
    );
};

export const PokemonType = React.memo(Type);
