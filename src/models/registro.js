const mongoose = require('mongoose');
const { Schema } = mongoose;

const registro = new Schema({
    fecha: {
        type: Date,
        default: Date.now,
        required: true
      },
      activos: {
        type: Number,
        required: true
      },
      pasivos: {
        type: Number,
        required: true
      },
      patrimonioNeto: {
        type: Number,
        required: true
      }
});

module.exports = mongoose.model('registro',registro);