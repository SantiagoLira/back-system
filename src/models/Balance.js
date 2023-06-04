const mongoose = require("mongoose");
const { Schema } = mongoose;

const balance = new Schema({
  fecha: {
    type: String,
  },
  items: [
    {
      nombre: {
        type: String,
        required: true,
      },
      costo: {
        type: Number,
        required: true,
      },
      categoria: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("balance", balance);
