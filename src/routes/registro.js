const express = require("express");
const router = express.Router();

const registro = require("../models/registro");

router.get("/", async (req, res) => {
  try {
    const data = await registro.find();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener datos");
  }
});

router.post("/", async (req, res) => {
  try {
    const { fecha, activos, pasivos, patrimonioNeto } = req.body;
    const Newregistro = new registro({
      fecha,
      activos,
      pasivos,
      patrimonioNeto
    });
    await Newregistro.save();
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
  return res.status(200).json("Guardado exitoso");
});

module.exports = router;
