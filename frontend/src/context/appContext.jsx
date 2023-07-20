import { createContext, useContext, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Appcontext must be within appContextProvider!");
  }
  return context;
};

function AppContextProvider({ children }) {
  const [users, setUsers] = useState(null);
  const [token, setToken] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const contextValue = useMemo(() => {
    const addToFavorites = (book) => {
      setFavorites((prevFavorites) => [...prevFavorites, book]);
    };

    const removeFromFavorites = (id) => {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((book) => book.id !== id)
      );
    };

    return {
      users,
      setUsers,
      token,
      setToken,
      favorites,
      addToFavorites,
      removeFromFavorites,
    };
  }, [users, setUsers, token, setToken, favorites]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
