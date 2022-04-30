import { useState } from 'react';
import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { Text } from '../custom/Text';
import PokeballInverse from '../../assets/pokeball-inverse-opacity.png';
import { getColor } from '../utils/pokemon-type-colors';
import {
    getFixedHeight,
    getFixedWidth,
    getFixedMargin,
    getFixedPadding,
    getFixedTopLeftMargin,
    getFixedTypePadding,
} from '../utils/responsiveness';

const parseRaw = (raw) => {
    return {
        id: raw.id,
        name: raw.name,
        types: raw.types.map((type) => type.type.name),
        sprites: { front_default: raw.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default },
    };
};

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonType = ({ type, dimensions }) => {
    const { h, w } = dimensions;

    return (
        <View>
            <Text
                small
                style={{
                    ...styles.type,
                    ...getFixedTypePadding(w, h),
                    borderRadius: getFixedPadding(w, h).paddingHorizontal,
                    marginBottom: getFixedMargin(w, h).marginVertical,
                }}
            >
                {capitalize(type)}
            </Text>
        </View>
    );
};

export const PokemonCard = ({ raw }) => {
    const { height: h, width: w } = useWindowDimensions();

    const [pokemon, setPokemon] = useState(parseRaw(raw));

    const { id, name, types, sprites } = pokemon;

    return (
        <View
            style={{
                ...styles.container,
                ...getFixedMargin(w, h),
                ...getFixedPadding(w, h),
                width: getFixedWidth(w),
                height: getFixedHeight(h),
                backgroundColor: getColor(types[0]),
                borderRadius: getFixedPadding(w, h).paddingHorizontal / 1.2,
            }}
        >
            <Text style={styles.title} subtitle color="white">
                {capitalize(name)}
            </Text>
            <View>
                {types.map((type) => (
                    <PokemonType dimensions={{ w, h }} key={type} type={type} />
                ))}
            </View>
            <View style={{ ...styles.imgContainer, ...getFixedTopLeftMargin(w, h) }}>
                <Image style={styles.pokeballBg} source={PokeballInverse} />
                <Image style={styles.pokemonImg} source={{ uri: sprites.front_default }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
    },
    title: {
        marginBottom: 5,
        position: 'relative',
        zIndex: 2,
    },
    type: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.8)',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
    },
    pokemonImg: {
        bottom: '-20%',
        right: '-35%',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 1,
        position: 'absolute',
    },
    pokeballBg: {
        bottom: '-50%',
        right: '-60%',
        width: '140%',
        height: '140%',
        resizeMode: 'contain',
        zIndex: 1,
        position: 'absolute',
        opacity: 0.6,
    },
    imgContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
