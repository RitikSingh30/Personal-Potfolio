const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const MailSender = require('./SendMail')
const app = express();
// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
var cors = require('cors')

const PORT = process.env.PORT || 4001

app.use(cors({
    origin: 'https://personal-potfolio-ten.vercel.app/',
    optionsSuccessStatus: 200
}));

app.post('/RitikSingh30/sendMail', async(req,res) => {
    try{
        const data = req.body ;

        MailSender(data);
        return res.status(200).json({
            sucess:true,
            message:"Message Send"
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            sucess:false,
            message:"Message send failed try again"
        })
    }
})


app.listen(PORT, () => {
    console.log("We are live at " + PORT);
})