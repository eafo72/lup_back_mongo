// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const clientSchema = mongoose.Schema(
	{
		nombre: {
			type: String,
			required: [true,'El nombre es obligatorio']
		},
		correo: {
			type: String,
			required: [true,'El correo es obligatorio'],
			match: [/\S+@\S+\.\S+/, 'Correo inválido' ],
		},
		direccion: {
			type: String,
			required: false,
		},
		telefono: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true, 
	}
)

// 3. MODELO
const Cliente = mongoose.model('Cliente', clientSchema)

// 4. EXPORTACIÓN
module.exports = Cliente
