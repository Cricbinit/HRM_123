const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Database Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
