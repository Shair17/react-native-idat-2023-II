const { Router } = require("express");
const router = Router();
const { createReport, getReports, deleteReport } = require("../models/report");
const authenticate = require("../middleware/authenticate");

// Crear un reporte (requiere autenticación)
router.post("/", authenticate, async (req, res) => {
  try {
    const result = await createReport(
      req.body.title,
      req.body.content,
      req.user.id
    );
    res.json({ message: "Reporte creado correctamente", data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los reportes (requiere autenticación)
router.get("/", authenticate, async (req, res) => {
  try {
    const result = await getReports(req.user.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un reporte por ID (requiere autenticación)
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const result = await deleteReport(req.params.id, req.user.id);
    res.json({ message: "Reporte eliminado correctamente", data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
