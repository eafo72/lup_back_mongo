// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const clientSchema = mongoose.Schema(
	{
		id_cliente: {
			type: Number,
			required: true
		},
		vigencia: {
			type: String,
			required: false
		},
		descripcion:{
			type:Array
		}
	},
	{
		timestamps: true, 
	}
)

// 3. MODELO
const Cliente = mongoose.model('Cliente', clientSchema)

// 4. EXPORTACIÓN
module.exports = Cliente
