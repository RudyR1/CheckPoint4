const AbstractManager = require("./AbstractManager");

class BooksManager extends AbstractManager {
  constructor() {
    super({ table: "books" });
  }

  findFavorites(id) {
    return this.database.query(
      `select * from ${this.table}
    inner join favorites on books.id = favorites.video_id
    where favorites.user_id = ?`,
      [id]
    );
  }

  insert(data) {
    return this.database.query(
      `insert into ${this.table} (title, cover, description, authors, genres) 
      values (?, ?, ?, ?, ?)`,
      [
        data.title,
        data.cover,
        data.description,
        data.authors,
        data.genres,
        `/uploads/images/${data.thumbnail}`,
        `/uploads/books/${data.video}`,
      ]
    );
  }

  update(books) {
    return this.database.query(
      `update ${this.table} set title = ?, cover = ?, description = ?, authors = ?, genres = ? where id = ?`,
      [
        books.title,
        books.cover,
        books.description,
        books.authors,
        books.genres,
        books.id,
      ]
    );
  }
}

module.exports = BooksManager;
