const express = require('express')
const app = express.Router()
const Servicio = require('../models/Servicio')  
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middlewares/authorization')
const mailer = require('../controller/mailController')

//app.get('/obtener', auth, async (req, res) => {
app.get('/obtener', async (req, res) => {
	try {
		const servicios = await Servicio.find({})
        res.json({servicios})

	} catch (error) {
		res.status(500).json({ msg: 'Hubo un error obteniendo los datos' })
	}
})

// SINGLE
app.get('/single/:id', async (req, res) => {
			
	try {
		const single = await Servicio.findById(req.params.id) 
		res.json({single})
		

	} catch (error) {
		res.status(500).json({ msg: 'Hubo un error obteniendo los datos del id '+req.params.id+' error: '+error })
	}

})

// CREAR 
app.post('/crear', async (req, res) => {
	const { nombre, descripcion, precio } = req.body 
	
	try {

		const ifExist = await Servicio.find( { nombre: nombre } )

		if(ifExist.length > 0){

			res.status(500).json({
				msg: 'El servicio '+nombre+' ya existe',
			})	

		}else{

					
			const respuestaDB = await Servicio.create({
				nombre,
				descripcion,
				precio
			})

			
   			res.json({respuestaDB})
			
		}
		
	} catch (error) {
		return res.status(400).json({
			msg: error,
		})
	}
})


// ACTUALIZAR
//app.put('/actualizar', auth, async (req, res) => {
app.put('/actualizar', async (req, res) => {
	const { id, nombre, descripcion, precio } = req.body
	try {

		const ifExist = await Servicio.find( { nombre: nombre, _id: { $ne: id } } )

		if(ifExist.length > 0){

			res.status(500).json({
				msg: 'El servicio '+nombre+' ya existe',
			})	

		}else{

			const updateServicio = await Servicio.findByIdAndUpdate(id,{nombre, descripcion, precio},{new:true})
        	res.json({updateServicio})
		
		}

	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error actualizando el Servicio',
		})
	}
})

// BORRAR
app.post('/borrar', async (req, res) => {
	const { id } = req.body
	
	try {
		const deleteServicio = await Servicio.findByIdAndRemove({ _id: id })
		res.json(deleteServicio)
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error borrando el Servicio '+id,
		})
	}
})


module.exports = app
