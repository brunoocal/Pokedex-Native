import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { Text } from '../custom/Text';
import { usePokemonList } from '../hooks/usePokemonList';
import { Bars } from '../svgs/Bars.jsx';
import PokeballBlack from '../../assets/pokeball-black.png';
import { getFixedHorizontalPadding } from '../utils/responsiveness';

export const Home = ({ children, pokedex }) => {
    const { pokemons, refetch: nextPage } = usePokemonList(pokedex);
    const { width: w } = useWindowDimensions();
    return (
        <View style={styles.parent}>
            <View style={{ ...styles.container, paddingHorizontal: getFixedHorizontalPadding(w) }}>
                <View style={styles.icons}>
                    <Image style={styles.icon} source={PokeballBlack} />
                    <Bars style={{ ...styles.icon, color: '#000' }} />
                </View>
                <View style={styles.title}>
                    <Text title color="slate">
                        Pokedex
                    </Text>
                </View>
                <View style={styles.pokemonContainer}>
                    {pokemons.length >= 1 && children({ pokemons, endCallback: nextPage })}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderColor: 'red',
    },
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
    },
    pokemonContainer: {
        flex: 1,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        marginBottom: 46,
    },
    icons: {
        width: '100%',
        height: 36,
        marginTop: 36,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 36,
        height: 36,
    },
});
