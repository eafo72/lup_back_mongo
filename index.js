const express = require('express')
const app = express()

const userRoutes = require('./routes/users')
const userTypesRoutes = require('./routes/usertypes')
const seoRoutes = require('./routes/seo')
const companyRoutes = require('./routes/company')

const cors = require('cors')

const connectDB = require('./config/db')

require('dotenv').config()
connectDB()

app.use(cors())
app.use(express.json({limit: '25mb'}));  //sirve para recibir base64 largos
app.use(express.urlencoded({limit: '25mb'})); //sirve para recibir base64 largos

//3. Rutas
app.use('/usuario', userRoutes)
app.use('/tipos_usuario', userTypesRoutes)
app.use('/seo', seoRoutes)
app.use('/empresa', companyRoutes)


app.get('/', (req, res) => res.send('LUP API'))

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log('El servidor está corriendo en 4000')
})

