import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Routes, Route } from 'react-router-native';
import Pokedex from 'pokedex-promise-v2';

import { Home } from './routes/Home.jsx';
import { Pokemon } from './routes/pokemon.jsx';
import { PokemonCard } from './components/PokemonCard.jsx';

import BigList from 'react-native-big-list';

const P = new Pokedex({
    cacheLimit: 60 * 60 * 1000,
});

const ITEM_HEIGHT = hp(13.8) + wp(1.8518) * 2;

const RENDER_ITEM = ({ item }) => <PokemonCard raw={item} />;

const KEY_EXTRACTOR = ({ id }) => `${id}`;

export const Main = () => {
    return (
        <View style={Style.Parent}>
            <Home pokedex={P}>
                {({ pokemons, endCallback }) => (
                    <BigList
                        data={pokemons}
                        numColumns={2}
                        keyExtractor={KEY_EXTRACTOR}
                        renderItem={RENDER_ITEM}
                        onEndReached={endCallback}
                        onEndReachedThreshold={0.2}
                        columnWrapperStyle={{
                            justifyContent: 'center',
                        }}
                        itemHeight={ITEM_HEIGHT}
                        controlItemRender={false}
                        initialNumToRender={12}
                    />
                )}
            </Home>

            <StatusBar style="auto" />
        </View>
    );
};

const Style = StyleSheet.create({
    Parent: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
});
