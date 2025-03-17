const express = require('express');
const aiRoutes= require('./routes/routes')
const app=express()
app.use(express.json())
const cors= require('cors')
app.use(cors())

app.get('/', (req, res) => {
res.send('Hello World!')


}
)
app.use('/ai',aiRoutes)

module.exports = app;
