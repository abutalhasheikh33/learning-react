const express = require('express')
const app = express();
const cors = require('cors')
const basicRouters = require('./routers/basicRouters')
app.use(cors())
app.use(express.json())
app.use('/api',basicRouters)
app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        status:err.status || 500,
        message:err.message
    })
})

app.listen(3000,()=>{
    console.log('listening')
})