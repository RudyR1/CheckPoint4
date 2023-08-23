const models = require("../models");

const browse = (req, res) => {
  models.books
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readFavorites = (req, res) => {
  models.books
    .findFavorites()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.books
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
        console.info(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getByIds = (req, res) => {
  models.books
    .getMultiplebooks(req.body.ids)
    .then(([rows]) => {
      if ([rows] === null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getBySection = (req, res) => {
  models.books
    .findbySection(req.body)
    .then(([rows]) => {
      if ([rows] === null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getByCategory = (req, res) => {
  models.books
    .findbyCategory(parseInt(req.params.id, 10))
    .then(([rows]) => {
      if ([rows] === null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const book = req.body;

  // TODO validations (length, format...)

  book.id = parseInt(req.params.id, 10);

  models.books
    .update(book)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const video = req.body;
  // TODO validations (length, format...)
  models.books
    .insert(video)
    .then(([result]) => {
      res.status(201).send(`${result.insertId}`);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.books
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  readFavorites,
  read,
  getByIds,
  getBySection,
  getByCategory,
  edit,
  add,
  destroy,
};
