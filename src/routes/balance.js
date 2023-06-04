const express = require("express");
const router = express.Router();

const Balance = require("../models/Balance");

router.get("/", async (req, res) => {
  const queryDate = req.query.fecha;
  try {
    const data = await Balance.find({ fecha: queryDate });
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(data);
  }
});

router.post("/", async (req, res) => {
  const fecha = req.body.fecha;
  const NewRecurso = {
    nombre: req.body.nombre,
    costo: req.body.costo,
    categoria: req.body.categoria,
  };

  try {
    let balance = await Balance.findOne({ fecha: fecha });

    if (!balance) {
      newbalance = new Balance({
        fecha: fecha,
        items: [
          {
            nombre: req.body.nombre,
            costo: req.body.costo,
            categoria: req.body.categoria,
          },
        ],
      });
      await newbalance.save();
    } else {
      balance.items.push(NewRecurso);
      await balance.save();
    }
    console.log(newbalance);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
  return res.status(200).json("Guardado exitoso");
});

module.exports = router;
