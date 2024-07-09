// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const quoteSchema = mongoose.Schema(
	{
		cliente: {
			type: String,
			required: true
		},
		atencion: {
			type: String,
			required: true
		},
		diasDeEntrega : {
			type: String,
			required: true
		},
		diasDeCredito : {
			type: String,
			required: true
		},
		formasPago :{
			type: String,
			required: true
		},
		vigencia: {
			type: String,
			required: true
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
