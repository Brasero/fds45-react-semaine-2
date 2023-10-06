const express = require('express');
const cors = require("cors")
const router = require("./Routes");
const bodyParser = require("body-parser")

const app = express()

const corsOptions = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.raw())

app.use((req,res,next) => {
    const method = req.method
    const path = req.path

    console.group()
        console.info(`Chemin: ${path}`)
        console.log(`METHOD : ${method}`)
        console.log(`Charge utile : `)
        console.log(req.body)
        console.log(`Params : `)
        console.log(req.params)
        console.log("--------------------------------")
    console.groupEnd()
    next()
})

app.use('/', router)


// catch 404

app.use(function(req,res){
    res.status(404).send('Not found')
})

// err handler
app.use(function(req,res, next) {
    res.locals.message = req.errored.message
    res.locals.error = req.app.get('env') === 'development' ? req.errored : {};
    console.log(req.errored)

    res.status(500);
    res.send(req.errored)
})

module.exports = app