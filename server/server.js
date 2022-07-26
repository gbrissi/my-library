process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const User = require('./models/User')
const db = require('./util/_database')


const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};
//if you want in every domain then
app.use(express.json())
app.use(cors(corsOption));

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
        let user = false
        for(i=0; i<users.length ;i++) {
            if(req.body.username == users[i].username){
                user = true
            }
        }
        if (user) {
            try {
                bcrypt.compare(req.body.password, user.password, function(error, response) {
                    if(error) {
                        res.send('error')
                    } if(response) {
                        res.send('success')
                    } else {
                        res.send('password does not match')
                    }
                })
            } catch (error) {
                res.send('some shit error fvck')
            }            
            
            /*if () {
                console.log('Success')
                res.status(200).send('Success')
            } else {
                console.log('Not Allowed')
                res.status(200).send('Not Allowed')
            } */
        } else {
            res.status(200).send('Cannot find person')
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
