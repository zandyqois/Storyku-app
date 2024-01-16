const express = require ('express')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const route = require('./routes/route.js')

//middleware
app.use(express.json())
app.use(cors())
app.use(fileUpload())

//route app
app.use("/stories", route)

//server
const port = 5000
app.listen(port, () => {
    console.log("stories app listen to port 5000")
})