const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const DtataShema = new mongoose.Schema({
    nome_usuario:String,
    idade_usuario:Number,
    estadoc_usuario:String,
    cpf_usuario:Number,
    cidade_usuario:String,
    estado_usuario:String,
},{
timestamps:true
})
