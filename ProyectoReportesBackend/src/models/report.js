const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db");

// Crear tabla de reportes si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    userId INTEGER,
    FOREIGN KEY(userId) REFERENCES users(id)
  )
`);

// Crear un reporte
async function createReport(title, content, userId) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO reports (title, content, userId) VALUES (?, ?, ?)",
      [title, content, userId],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, title, content });
        }
      }
    );
  });
}

// Obtener todos los reportes de un usuario
async function getReports(userId) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM reports WHERE userId = ?", [userId], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// Eliminar un reporte por ID
async function deleteReport(reportId, userId) {
  return new Promise((resolve, reject) => {
    db.run(
      "DELETE FROM reports WHERE id = ? AND userId = ?",
      [reportId, userId],
      function (err) {
        if (err) {
          reject(err);
        } else if (this.changes === 0) {
          reject(
            new Error(
              "No se encontró el reporte o no tienes permisos para eliminarlo"
            )
          );
        } else {
          resolve({ id: reportId });
        }
      }
    );
  });
}

module.exports = { createReport, getReports, deleteReport };
