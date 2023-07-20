const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  findUser(user) {
    return this.database.query(
      `SELECT id, firstname, lastname, email, hpassword, role_id FROM ${this.table} WHERE email = ?`,
      [user.email]
    );
  }

  selectByEmail(email) {
    return this.database.query(
      "select id, firstname, lastname, hashedPassword, role_id from users where email = ?",
      [email]
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, role_id, hpassword) values (?, ?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.role_id, user.hpassword]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, hashedPassword = ?, role_id = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.role_id,
        user.id,
      ]
    );
  }
}

module.exports = UsersManager;
