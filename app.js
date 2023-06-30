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

// setTimeout(()=>{
//     setcaw()
// },5000)

// async function setcaw(){
//     const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639461991211&sim=2&message=${new Date()}`)
//     console.log(response)
// }

// const rinThin = cron.schedule("01 55 17 * * *",async function(){
 
//         const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639461991211&sim=2&message=${new Date()}`)
//         console.log(response)
//           console.log({awdawd:response , sdasd:new Date()})       
// }, {
//    scheduled: true,
//    timezone: "Asia/Manila"
//  })
// rinThin.start()

// setInterval(()=>{
//     console.log(new Date())
//     console.log('aAa')
// },1000)

console.log('2'+new Date())

cron.schedule("01 35 18 * * *", function(){
    console.log('2sssssssssssssssssssssssssss')
     setcaw()
    // const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639461991211&sim=2&message=${new Date()}`)
    // console.log(response)
    
}, {
   timezone: "Asia/Manila"
 })

const setcaw = async () => {
    const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639461991211&sim=2&message=${new Date()}`)
    console.log(response)
}


// cron.schedule("01 32 16 * * *",async function(){
//     console.log('2s'+ new Date())
//     const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639461991211&sim=2&message=${new Date()}`)
//     console.log(response)

// })

// async function sedndd()  {
//     const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639540941468&sim=2&message=${new Date()}`)
//     console.log(response)
// }



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
