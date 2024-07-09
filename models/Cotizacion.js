// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const quoteSchema = mongoose.Schema(
	{
		id_cliente: {
			type: mongoose.Schema.Types.ObjectId,
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
const Cotizacion = mongoose.model('Cotizacion', quoteSchema)

// 4. EXPORTACIÓN
module.exports = Cotizacion
