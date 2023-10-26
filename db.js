const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config/.env'})


const modeloUser = mongoose.model('usuarios', new mongoose.Schema({
    email: String,
    password: String
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

    }
    


const httpFunc = new HttpFuncs()
module.exports = httpFunc