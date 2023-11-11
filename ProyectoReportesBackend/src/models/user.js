const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db");

// Crear tabla de usuarios si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
  )
`);

// Registro de usuario
async function registerUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword],
      function (err) {
        if (err) {
          reject(err);
        } else {
          const token = jwt.sign({ id: this.lastID, username }, "secret_key");
          resolve({ id: this.lastID, username, token });
        }
      }
    );
  });
}

// Login de usuario
async function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT * FROM users WHERE username = ?",
      [username],
      async (err, row) => {
        if (err) {
          reject(err);
        } else if (!row || !(await bcrypt.compare(password, row.password))) {
          reject(new Error("Credenciales inválidas"));
        } else {
          const token = jwt.sign(
            { id: row.id, username: row.username },
            "secret_key"
          );
          resolve({ id: row.id, username: row.username, token });
        }
      }
    );
  });
}

module.exports = { registerUser, loginUser };
