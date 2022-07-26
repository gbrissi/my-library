process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const User = require('./models/User')
const db = require('./util/_database')

app.use(express.json())
app.use(cors(corsOptions)) // Use this after the variable declaration

const port = process.env.PORT || 3001;

async function main() {

    //INSERTING A "FICTIONAL ROW" IN users TABLE.
    /* 
    await User.query().insert({
        username: 'KellyG',
        password: await bcrypt.hash('tomatoes', 10)
    })
    */

   //SELECT * FROM users
   const users = await User.query();

   //API

   app.get('/', (req, res) => {
        res.status(200).send(users)
   })

    app.post('/users/login', async (req, res) => {
        const user = users.find(user => users.username = req.body.username)
        console.log(user)
        if (user == null) {
            return res.status(200).send('Cannot find person')
        } try {
            if(await bcrypt.compare(req.body.password, user.password)) {
                res.status(200).send('Success')
            } else {
                res.status(200).send('Not Allowed')
            }
        } catch {
            res.status(500).send()
        }
    })

}

main()
    .then(() => db.destroy())
    .catch((err) => {
        console.error(err);
        return db.destroy();
        });

app.listen(port, () => {
    console.log('the server is running in port', port)
})
