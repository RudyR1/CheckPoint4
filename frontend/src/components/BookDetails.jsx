import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../sass/BookDetails.scss";

function BookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/books/${id}`)
      .then((res) => {
        setBook(res.data[0]);
      })
      .catch((err) => console.warn(err));
  }, [id]);

  console.warn(book);
  return (
    <div className="bookdetails">
      <div className="book-title-img">
        <h2>{book.title}</h2>
        <img src={book.cover} alt="cover" />
      </div>
      <div className="book-description">
        <h2>Description:</h2>
        <p>{book.description}</p>
        <h2>Auteurs:</h2>
        <p>{book?.authors}</p>
        <h2>Genres:</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
}

export default BookDetails;
