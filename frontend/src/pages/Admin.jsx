import { useState, useEffect } from "react";
import axios from "axios";
import AddBooks from "../components/AddBooks";
import UpdateBooks from "../components/UpdateBooks";

import "../sass/Admin.scss";

export default function Admin() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/books`)
      .then((Response) => {
        console.warn(Response.data);
        setBooks(Response.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  const handleDeleteBook = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/books/${id}`)
      .then((Response) => {
        console.info("Livre supprimé avec succès: ", Response.data);
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      })
      .catch((error) => {
        console.error("Le livre n'a pas pu être supprimé: ", error);
      });
  };

  return (
    <>
      <div className="intro">
        Bienvenue dans votre portail de gestions de vos livres. Vous pourrez
        ajouter, modifier ou supprimer vos livres.
      </div>
      <div className="addbooks">
        <AddBooks />
      </div>
      <div className="Updatebooks">
        <UpdateBooks />
      </div>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.cover} alt="cover" />
            </div>
            <div>
              <button
                className="delbooks"
                type="button"
                onClick={() => handleDeleteBook(book.id)}
              >
                Supprimer le livre
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
