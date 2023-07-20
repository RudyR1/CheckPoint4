import React, { useEffect, useState } from "react";
import axios from "axios";
import "../sass/UpdateBooks.scss";

export default function UpdateBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  // const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: "",
    authors: "",
    description: "",
    cover: "",
    genres: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/books`)
      .then((Response) => {
        console.warn(Response.data);
        setBooks(Response.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  useEffect(() => {
    if (selectedBookId) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/books/${selectedBookId}`)
        .then((res) => {
          setBookData(res.data[0]);
        })
        .catch((err) => console.warn(err));
    }
  }, [selectedBookId]);
  const handleChangeBook = (event) => {
    setSelectedBookId(event.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/books/${selectedBookId}`,
        bookData
      )
      .then((res) => {
        console.info("Modification du livre OK", res.data[0]);
        setBookData({
          title: "",
          authors: "",
          description: "",
          cover: "",
          genres: "",
        });
      })
      .catch((err) => {
        console.error("erreur:", err);
      });
  };

  return (
    <div className="UpdateBook">
      <h2>Modifier un livre</h2>
      <select value={selectedBookId} onChange={handleChangeBook}>
        <option value="">Sélectionnez un livre à modifier</option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title}
          </option>
        ))}
      </select>
      {selectedBookId && (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              required
              name="title"
              value={bookData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Authors:
            <input
              type="text"
              required
              name="authors"
              value={bookData.authors}
              onChange={handleChange}
            />
          </label>
          <label>
            description:
            <input
              type="text"
              required
              name="description"
              value={bookData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            cover:
            <input
              type="text"
              required
              name="cover"
              value={bookData.cover}
              onChange={handleChange}
            />
          </label>
          <label>
            genre:
            <input
              type="text"
              required
              name="genres"
              value={bookData.genres}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Valider</button>
        </form>
      )}
    </div>
  );
}
