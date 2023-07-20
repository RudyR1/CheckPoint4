import React, { useState } from "react";
import axios from "axios";
import "../sass/AddBooks.scss";

export default function AddBooks() {
  const [bookData, setBookData] = useState({
    title: "",
    authors: "",
    description: "",
    cover: "",
    genres: "",
  });

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
      .post(`${import.meta.env.VITE_BACKEND_URL}/books`, bookData)
      .then((res) => {
        console.info("livre ok", res.data);
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
    <div className="AddBooks">
      <h2>Ajouter un livre</h2>
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
    </div>
  );
}
