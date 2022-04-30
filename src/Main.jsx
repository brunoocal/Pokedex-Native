import { View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Home } from './routes/home.jsx';
import { Routes, Route } from 'react-router-native';
import { Pokemon } from './routes/pokemon.jsx';
import Pokedex from 'pokedex-promise-v2';
import { PokemonCard } from './components/PokemonCard.jsx';
import Constants from 'expo-constants';
import BigList from 'react-native-big-list';

const P = new Pokedex({
    cacheLimit: 60 * 60 * 1000,
});

export const Main = () => {
    return (
        <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
            {/* <Routes>
                <Route path="/" exact> */}

            {/* </Rouate>
                <Route path="/pokemon/:id" exact></Route> */}
            {/* </Routesasda> */}

            <Home pokedex={P}>
                {({ pokemons, endCallback }) => (
                    <BigList
                        data={pokemons}
                        numColumns={2}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={({ item }) => <PokemonCard raw={item} />}
                        onEndReached={() => endCallback()}
                        onEndReachedThreshold={0.2}
                        columnWrapperStyle={{
                            justifyContent: 'center',
                        }}
                        itemHeight={175}
                        controlItemRender={false}
                        initialNumToRender={12}
                    />
                )}
            </Home>

            <StatusBar style="auto" />
        </View>
    );
};
