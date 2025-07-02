const express = require('express');
const funcionariosRoutes = require('./routes/funcionariosRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
const port = process.env.PORT


mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use('/funcionarios', funcionariosRoutes)

app.listen(port, () => {
    console.log("Aplicação rodando...")
})