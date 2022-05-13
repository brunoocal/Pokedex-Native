import React, { useState, useCallback } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { Style } from './PokemonCard.style';
import { capitalize } from '../utils/misc';
import { getColor } from '../utils/pokemon-type-colors';
import { Text } from '../custom/Text';
import { PokemonType } from './PokemonType';
import PokeballInverse from '../../assets/pokeball-inverse-opacity.png';

const parseRaw = (raw) => {
    return {
        id: raw.id,
        name: raw.name,
        types: raw.types.map((type) => type.type.name),
        sprites: { front_default: raw.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default },
        color: getColor(raw.types[0].type.name),
    };
};

const Card = ({ raw, navigation }) => {
    const [pokemon] = useState(parseRaw(raw));
    const { color, name, types, sprites } = pokemon;

    const onPress = () => {
        navigation.navigate('Pokemon', { pokemon });
    };

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[Style.Card, { backgroundColor: color }]}>
                <Text style={Style.Name} subtitle color="white">
                    {useCallback(capitalize(name), [name])}
                </Text>
                <View>
                    {types.map((type) => (
                        <PokemonType style={Style.Type} key={type} type={type} />
                    ))}
                </View>
                <View style={Style.AbsoluteContainer}>
                    <Image style={Style.PokeballBackground} source={PokeballInverse} />
                    <Image style={Style.Sprite} source={{ uri: sprites.front_default }} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

Card.displayName = 'PokemonCard';

export const PokemonCard = React.memo(Card);
