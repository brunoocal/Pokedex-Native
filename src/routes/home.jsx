import React from 'react';
import { View, FlatList, Image } from 'react-native';
import PokeballBlack from '../../assets/pokeball-black.png';
import { Bars } from '../svgs/Bars';
import { Text } from '../custom/Text';
import { Style } from './Home.styles';
import { usePokemonList } from '../hooks/usePokemonList';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ITEM_HEIGHT = hp(13.8) + wp(1.8518) * 2;

const KEY_EXTRACTOR = ({ id }) => `${id}`;

const ITEM_LAYOUT = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
});

export const Home = React.memo(({ children, pokedex }) => {
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
                    {pokemons.length >= 1 && (
                        <FlatList
                            data={pokemons}
                            numColumns={2}
                            keyExtractor={KEY_EXTRACTOR}
                            renderItem={children}
                            onEndReached={nextPage}
                            onEndReachedThreshold={0.2}
                            initialNumToRender={12}
                            getItemLayout={ITEM_LAYOUT}
                            maxToRenderPerBatch={6}
                            windowSize={12}
                        />
                    )}
                </View>
            </View>
        </View>
    );
});
