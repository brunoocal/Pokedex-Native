import React from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList } from 'react-native';
import Pokedex from 'pokedex-promise-v2';

import { Home } from './routes/Home';
import { Pokemon } from './routes/Pokemon';
import { PokemonCard } from './components/PokemonCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokemonHeader } from './custom/PokemonHeader';

const MainStack = createNativeStackNavigator();

const P = new Pokedex({
    cacheLimit: 60 * 60 * 1000,
});

const RENDER_ITEM = ({ item, navigation }) => <PokemonCard raw={item} navigation={navigation} />;

const HomeReturn = ({ navigation }) => <Home pokedex={P}>{({ item }) => RENDER_ITEM({ item, navigation })}</Home>;

export const Main = () => {
    return (
        <View style={Style.Parent}>
            <MainStack.Navigator>
                <MainStack.Screen
                    name="Pokedex"
                    options={{
                        headerShown: false,
                    }}
                >
                    {HomeReturn}
                </MainStack.Screen>
                <MainStack.Screen
                    name="Pokemon"
                    component={Pokemon}
                    options={{
                        header: (props) => <PokemonHeader {...props} />,
                    }}
                />
            </MainStack.Navigator>

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
