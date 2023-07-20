import React from "react";
import { useAppContext } from "../context/appContext";

// import App from "../App";

function Favorites() {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.info("Les favoris sont", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      Mes Favoris
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.cover} alt="#" />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button
                  type="button"
                  onClick={() => removeFromFavorites(book.id)}
                >
                  Supprimer des Favoris
                </button>
              ) : (
                <button type="button" onClick={() => addToFavorites(book)}>
                  Ajouter aux Favoris
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>Vous n'avez pas encore de favoris</h1>
      )}
    </div>
  );
}

export default Favorites;
