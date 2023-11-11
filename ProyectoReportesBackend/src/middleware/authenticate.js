const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ error: "Token de autenticación no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, "secret_key");
    req.user = { ...decoded, token };
    next();
  } catch (error) {
    res.status(401).json({ error: "Token de autenticación inválido" });
  }
}

module.exports = authenticate;
