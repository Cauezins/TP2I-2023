const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config/.env'})


const modeloUser = mongoose.model('usuarios', new mongoose.Schema({
    email: String,
    password: String
}))

const cateTarefas = mongoose.model('categoria', new mongoose.Schema({
    idUser: String,
    nomeCategoria: String
}))

const tarefas = mongoose.model('tarefas', new mongoose.Schema({
    idCate: String,
    terefa: String,
    feito: String,
}))


mongoose.connect(process.env.CONX)
    
class HttpFuncs{
        async registerUsu(email, senha){
            return await modeloUser.create({email: email, password: senha})
        }
        async updateUsu(email, senha, emailNovo, senhaNova){
            return await modeloUser.findOneAndUpdate({email: email, password: senha}, {email: emailNovo, password: senhaNova})
        }
        async loginUsu(email, senha){
            return await modeloUser.findOne({email: email, password: senha})
        }
        async deleteUsu(id){
            return await modeloUser.deleteOne({id: id})
        }
        async viewUsus(){
            return await modeloUser.find()
        }
        async createCategoria(idUser, nome){
            return await cateTarefas.create({idUser: idUser, nomeCategoria: nome})
        }

    }
    


const httpFunc = new HttpFuncs()
module.exports = httpFunc