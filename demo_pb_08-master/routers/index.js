const express = require("express");
const router = express.Router();
const productsRoutes = require("./products/products.routes");
const usersRoutes = require("./users/users.routes");
const filesRoutes = require("./files/files.routes");
// Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
//Routers
router.use("/products", productsRoutes);
router.use("/user", usersRoutes);
router.use("/files", filesRoutes);

module.exports = router;
