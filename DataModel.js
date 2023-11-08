const mongoose = require('mongoose');

// Esquema de datos
const operacionSchema = new mongoose.Schema({
  gid: String,
  nombre: String,
  fecha_hora: String,
  molde: String,
  ciclo_std: String,
  ciclo_real: String,
  pzs_buena: String,
  pzs_mala: String,
  n_paros: String,
  minutos_paro: String,
  exc_ciclo: String,
  min_ok: String,
  c_molde: String,
  manager: String,
  plas_std: String,
  plas_real: String,
});

// Define el modelo basado en el esquema
const operacionModel = mongoose.model('P1Operacion', operacionSchema);

module.exports = operacionModel;
