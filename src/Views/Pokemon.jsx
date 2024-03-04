import { useContext, useState } from "react";
import { PokeContext } from "../Context/PokeContext";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const { poke } = useContext(PokeContext);
    //const pokeNames = poke ? poke.map(({ name, id }) => ({ id, name })) : [];

    const navigate = useNavigate();
    const cambioPokemon = (event) => {
        event.preventDefault();
        const {value}=event.target;
        setPokemon(Number(value));
    };

    const pokeDetails = () => {
        if (pokemon) {
            navigate(`/Pokemon/${pokemon}`);
        }else {
            alert('Por favor selecciona un Pokemon');
        }
    };

    return (
        <div className="pokeSelect mt-5">
            <h1>Selecciona un Pokemon</h1>
            <div>
                <select
                    name="Pokemon"
                    id="Pokemon"
                    onChange={cambioPokemon}
                    defaultValue='option'>
                    <option value='option' disabled>
                        Selecciona un Pokemon
                    </option>
                        {poke.length && poke.map(({ id, name }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                        ))}
                </select>
            </div>
            <div className="flex flex-col items-start p-4">
                <button onClick={pokeDetails} className="btn">Ver detalles</button>
            </div>
        </div>
    );
};
export default Pokemon;