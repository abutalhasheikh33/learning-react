const client_id = '740943179065-hnnmkes56fmr1bsufv9e76suj7tfr4e0.apps.googleusercontent.com'
const client_secret = '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'
const {google} = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    'http://localhost:5173'
)

exports.welcomeController = (req,res,next)=>{
    res.status(200).json({
        message:"Hello world",
        status:200
    })
}


exports.createToken = async (req,res,next)=>{
    try{
        const {code} = req.body;
        const response = await oauth2Client.getToken(code)
        console.log(response)
        res.send(response)
    }catch(error){
        next(error)
    }
   
}