import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
    const [poke, setPoke] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = async () => {
        const pokeApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=576&offset=494');
        const pokeData = await pokeApi.json();
        const { results } = pokeData;

        const pokeDetails = await Promise.all(results.map(async (poke) => {
            const pokeApi2 = await fetch(poke.url);
            const poketoMonsta = await pokeApi2.json();

            return {
                id: poketoMonsta.id,
                name: poketoMonsta.name,
                hp: poketoMonsta.stats.find(stat => stat.stat.name === 'hp').base_stat,
                atk: poketoMonsta.stats.find(stat => stat.stat.name === 'attack').base_stat,
                def: poketoMonsta.stats.find(stat => stat.stat.name === 'defense').base_stat,
                spatk: poketoMonsta.stats.find(stat => stat.stat.name === 'special-attack').base_stat,
                spdef: poketoMonsta.stats.find(stat => stat.stat.name === 'special-defense').base_stat,
                speed: poketoMonsta.stats.find(stat => stat.stat.name === 'speed').base_stat,
                type: poketoMonsta.types[0].type.name,
                img: poketoMonsta.sprites.other.dream_world.front_default,
            };
        }));
        setPoke(pokeDetails);
    };

    return (
        <PokeContext.Provider value={{ poke, setPoke }}>
            {children}
        </PokeContext.Provider>
    );
};