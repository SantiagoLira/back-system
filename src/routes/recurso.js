const express = require("express");
const router = express.Router();

const recurso = require("../models/recurso");

router.get("/activo", async (req, res) => {
  try {
    const data = await recurso.find({ categoria: "activo" });
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener datos");
  }
});

router.get("/activoC", async (req, res) => {
  try {
    const data = await recurso.find({ categoria: "activoC" });
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener datos");
  }
});

router.get("/activoD", async (req, res) => {
  try {
    const data = await recurso.find({ categoria: "activoD" });
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener datos");
  }
});

router.get("/pasivo", async (req, res) => {
  try {
    const data = await recurso.find({ categoria: "pasivo" });
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener datos");
  }
});

router.get("/pasivoC", async (req, res) => {
  try {
    const data = await recurso.find({ categoria: "pasivoC" });
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener datos");
  }
});

router.get("/capital", async (req, res) => {
  try {
    const data = await recurso.find({ categoria: "capital" });
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener datos");
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, precio, categoria } = req.body;
    const NewRecurso = new recurso({
      nombre,
      precio,
      categoria,
    });
    await NewRecurso.save();
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
  return res.status(200).json("Guardado exitoso");
});

module.exports = router;
