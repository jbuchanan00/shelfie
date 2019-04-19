const express = require("express")
const massive = require("massive")
require("dotenv").config()
const {CONNECTION_STRING, SERVER_PORT} = process.env
const app = express()
const invCtrl = require("./controller")
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on ${SERVER_PORT}`)
    })
})

app.get("/api/inventory", invCtrl.getInventory)
app.post("/api/inventory", invCtrl.create)
app.delete("/api/inventory/:id", invCtrl.delete)
app.put("/api/inventory/:id", invCtrl.update)
