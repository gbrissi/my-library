process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const User = require('./db/models/User')
const db = require('./db/_database')


const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};

//if you want in every domain then
app.use(express.json())
app.use(cors(corsOption));

const port = process.env.PORT || 8080;

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

}

main()
    .then(() => db.destroy())
    .catch((err) => {
        console.error(err);
        return db.destroy();
        });

app.listen(port, () => {
    console.log('The server is running in this following port:', port)
})
