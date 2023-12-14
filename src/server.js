require('express-async-errors')


const cors = require('cors')
const express = require("express")


const app = new express()

app.use(cors())
app.use(express.json())

const port = 3333


app.listen(port, () => console.log(`Server is running in ${port}`))