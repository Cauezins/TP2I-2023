    const express = require('express')
    const app = express()

    const db = require("./db")

    app.use(express.json())


    app.get('/usuarios', async (req,res)=>{
        let user = await db.viewUsus()
        res.send(user)
    })
    
    app.post('/post',async (req,res) =>{
        let retorna = await db.registerUsu(req.body.email, req.body.senha);
        res.send(retorna);
    })

    app.post('/login',async (req,res) =>{
        let retorna = await db.loginUsu(req.body.email, req.body.senha);
        res.send(retorna);
    })

    app.put('/put', async (req,res)=>{
        let retorna = await db.updateUsu(req.body.email, req.body.password, req.body.newemail, req.body.newpassword)
        res.send(retorna)
    })
    
    app.delete('/delete', async (req,res)=>{
        const userDeleted = await db.deleteUsu(req.body.email, req.body.senha)
        res.send(userDeleted)
    })  
    app.listen(3000, ()=>console.log(`O servidor está rodando certinho nessa porta aqui: ${3000}`))
