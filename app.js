const express = require("express");

const PORT = process.env.PORT || 3500;

const router = express.Router();

const app = express();


const cron = require('node-cron')

app.get('/',(req, res)=> {

    res.json({
        'hello':'his!'
    });
});


cron.schedule("01 50 15 * * *",async function(){
    console.log('2s'+ new Date())
    const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639461991211&sim=2&message=${new Date()}`)
    console.log(response)
})

cron.schedule("01 59 15 * * *",async function(){
    console.log('2s'+ new Date())
    const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639461991211&sim=2&message=${new Date()}`)
    console.log(response)

})

// async function sedndd()  {
//     const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639540941468&sim=2&message=${new Date()}`)
//     console.log(response)
// }



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));