import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from '../custom/Text';
import PokeballInverse from '../../assets/pokeball-inverse-opacity.png';
import { getColor } from '../utils/pokemon-type-colors';

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

const PokemonType = ({ type }) => {
    return (
        <View>
            <Text small style={styles.type}>
                {capitalize(type)}
            </Text>
        </View>
    );
};

export const PokemonCard = ({ raw }) => {
    const [pokemon, setPokemon] = useState(parseRaw(raw));

    const { id, name, types, sprites } = pokemon;

    return (
        <View style={{ ...styles.container, backgroundColor: getColor(types[0]) }}>
            <Text style={styles.title} subtitle color="white">
                {capitalize(name)}
            </Text>
            <View>
                {types.map((type) => (
                    <PokemonType key={type} type={type} />
                ))}
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.pokeballBg} source={PokeballInverse} />
                <Image style={styles.pokemonImg} source={{ uri: sprites.front_default }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '45.7%',
        height: 155,
        margin: 10,
        justifyContent: 'flex-start',
        padding: 25,
        borderRadius: 20,
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
        paddingHorizontal: 15,
        paddingVertical: 2.5,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.8)',
        alignSelf: 'flex-start',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
    },
    pokemonImg: {
        bottom: -20,
        right: -50,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 1,
        position: 'absolute',
    },
    pokeballBg: {
        bottom: -60,
        right: -80,
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
        marginTop: 25,
        marginLeft: 25,
    },
});
