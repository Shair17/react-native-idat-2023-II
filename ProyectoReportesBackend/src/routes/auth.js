const { Router } = require("express");
const router = Router();
const { registerUser, loginUser } = require("../models/user");
const authenticate = require("../middleware/authenticate");

// Registro de usuario
router.post("/register", async (req, res) => {
  try {
    const result = await registerUser(req.body.username, req.body.password);
    res.json({ message: "Usuario registrado correctamente", ...result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login de usuario
router.post("/login", async (req, res) => {
  try {
    const result = await loginUser(req.body.username, req.body.password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
});

router.get("/me", authenticate, async (req, res) => {
  try {
    const result = req.user;
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
});

module.exports = router;
