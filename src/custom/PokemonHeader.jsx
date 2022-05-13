import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Arrow } from '../svgs/Arrow';
import { Heart } from '../svgs/Heart';
import { Style } from './PokemonHeader.styles';
export const PokemonHeader = (props) => {
    const {
        route: {
            params: { pokemon },
        },
        navigation,
    } = props;

    const onBack = () => {
        navigation.goBack();
    };
    return (
        <View style={[Style.Header, { backgroundColor: pokemon.color }]}>
            <TouchableWithoutFeedback onPress={onBack}>
                <Arrow style={Style.Icon} />
            </TouchableWithoutFeedback>
            <Heart style={Style.Icon} />
        </View>
    );
};
