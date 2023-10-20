const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cliente_schema = new Schema({
    nombre: String,
    telefono: String
})

const model = mongoose.model('Cliente', cliente_schema)
module.exports = model