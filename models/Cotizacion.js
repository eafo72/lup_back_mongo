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
			required: false
		},
		diasDeEntrega : {
			type: String,
			required: false
		},
		diasDeCredito : {
			type: String,
			required: false
		},
		formasPago :{
			type: String,
			required: false
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
