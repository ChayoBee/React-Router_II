import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokeContext } from "../Context/PokeContext";

const PokeDetalles = () => {
    const { poke } = useContext(PokeContext);
    const { id } = useParams();

    const pokeDetalles = poke.find((pokemon) => pokemon.id === Number(id));

    return (
        <div>
            {pokeDetalles ? (
                <>
                    <h1 className="nombreID">{pokeDetalles.name} / {id}</h1>
                    <div className="stats flex flex-col gap-3 p-3">
                        <figure className="imagen">
                            <img loading="lazy" src={pokeDetalles.img} alt={pokeDetalles.type} />
                        </figure>
                        <ul>
                            <li>Hp: {pokeDetalles.hp}</li>
                            <li>Attack: {pokeDetalles.atk}</li>
                            <li>Defense: {pokeDetalles.def}</li>
                            <li>Special-Attack: {pokeDetalles.spatk}</li>
                            <li>Special-Defense: {pokeDetalles.spdef}</li>
                            <li>Speed: {pokeDetalles.speed}</li>
                        </ul>
                    </div>
                        <div className="tipo">
                            <p>
                                Tipo: {''}
                                {pokeDetalles.type}
                            </p>
                        </div>
                </>
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    );
};

export default PokeDetalles;