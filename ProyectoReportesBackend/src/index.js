const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const reportsRoutes = require("./routes/reports");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/reports", reportsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
