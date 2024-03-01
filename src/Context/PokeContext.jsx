import { createContext, useState } from "react";

export const PokeContext = createContext();

const UserProvider = ({ children }) => {
    const [poke, setPoke] = useState();

    return (
        <PokeContext.Provider value={{ poke, setPoke }}>
            {children}
        </PokeContext.Provider>
    );
};
export default UserProvider;