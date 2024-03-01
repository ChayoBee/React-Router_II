import { useParams } from "react-router-dom";

export default function Pokemon() {
    const { id } = useParams();

    return (
        <div className="mt-5">
            <h1>Selecciona un Pokemon</h1>
            <main>
                <input 
                type="text"
                placeholder="Selecciona un Pokémon" />
            </main>
            <button>Ver detalles</button>
        </div>
    );
};