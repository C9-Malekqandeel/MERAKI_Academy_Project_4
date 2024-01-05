const express = require("express");
const cors = require("cors");
require('dotenv').config();
const db = require('./models/db')
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const itemRoutes = require("./routes/item");
//const orderRoutes = require("./routes/order");
const roleRoutes = require("./routes/role");
const userRoutes = require ("./routes/user");
const categoryRoutes = require("./routes/category")

app.use("/items",itemRoutes);
//app.use("/order",orderRoutes);
app.use("/roles",roleRoutes);
app.use("/users",userRoutes);
app.use("/category", categoryRoutes);


// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
