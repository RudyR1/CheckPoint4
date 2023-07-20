const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const booksControllers = require("./controllers/booksControllers");
const authControllers = require("./controllers/authControllers");

const { hashPassword } = require("./services/auth");
const { checkIds, verifyCookie } = require("./middlewares/auth");

// < ------------- Routes Users ------------- >

router.get("/users", usersControllers.browse);
router.get("/users/:id", verifyCookie, usersControllers.read);
router.put("/users/:id", hashPassword, usersControllers.edit);
router.post("/users", hashPassword, usersControllers.add);
router.post("/login", checkIds, authControllers.login);

// < ------------- Routes Books ------------- >

router.get("/books", booksControllers.browse);
router.get("/books/:id", booksControllers.read);
router.put("/books/:id", booksControllers.edit);
router.post("/books", booksControllers.add);
router.delete("/books/:id", booksControllers.destroy);

module.exports = router;
