const mongoose = require('mongoose');
const { Schema } = mongoose;

const recurso = new Schema({
      nombre: {
        type: String,
        required: true
      },
      precio: {
        type: Number,
        required: true
      },
      categoria: {
        type: String,
        required: true
      }
});

module.exports = mongoose.model('recurso',recurso);