import { useState, useEffect, useCallback } from 'react';

export const usePokemonList = (Pokedex) => {
    const [data, setData] = useState({
        pokemonList: [],
        offset: 0,
    });

    const queryFunction = async () => {
        const response = await Pokedex.getPokemonsList({ limit: 12, offset: data.offset });
        const loadPokemonData = async (data) => {
            return Promise.all(data.map((poke) => fetch(poke.url).then((res) => res.json())));
        };

        const allData = await loadPokemonData(response.results);

        setData({
            pokemonList: [...data.pokemonList, ...allData],
            offset: data.offset + 12,
        });
    };

    const refetch = useCallback(() => {
        queryFunction();
    }, [data.offset]);

    useEffect(() => {
        refetch();
    }, []);

    return { pokemons: data.pokemonList, refetch };
};
