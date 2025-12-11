const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Example API endpoint
app.get("/api/data", (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        name: "Item 1",
        price: 100000,
        image: "https://via.placeholder.com/150?text=Item+1",
      },
      {
        id: 2,
        name: "Item 2",
        price: 250000,
        image: "https://via.placeholder.com/150?text=Item+2",
      },
      {
        id: 3,
        name: "Item 3",
        price: 350000,
        image: "https://via.placeholder.com/150?text=Item+3",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
