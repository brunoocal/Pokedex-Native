import { View, StyleSheet, Image } from 'react-native';
import PokeballBlack from '../../assets/pokeball-black.png';
import { Bars } from '../svgs/Bars';
import { Text } from '../custom/Text';
import { Style } from './Home.styles';
import { usePokemonList } from '../hooks/usePokemonList';

export const Home = ({ children, pokedex }) => {
    const { pokemons, refetch: nextPage } = usePokemonList(pokedex);
    return (
        <View style={Style.Home}>
            <View style={Style.Wrapper}>
                <View style={Style.Icons}>
                    <Image style={Style.Icon} source={PokeballBlack} />
                    <Bars style={[Style.Icon, { color: '#000' }]} />
                </View>
                <View style={Style.Heading}>
                    <Text title color="slate">
                        Pokedex
                    </Text>
                </View>
                <View style={Style.PokemonsWrapper}>
                    {pokemons.length >= 1 && children({ pokemons, endCallback: nextPage })}
                </View>
            </View>
        </View>
    );
};
