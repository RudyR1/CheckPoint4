import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

export default function BookList() {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/books`)
      .then((Response) => {
        console.warn(Response.data);
        setBooks(Response.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            {/* <img
              src={book.cover}
              alt="cover"
              onClick={() => navigate(`/books/${book.id}`)}
            /> */}
            <button type="submit" onClick={() => navigate(`/books/${book.id}`)}>
              <img src={book.cover} alt="cover" />
            </button>
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
      ))}
    </div>
  );
}
