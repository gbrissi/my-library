process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const User = require('./db/models/User')
const setupDb = require('./db/_database')

const cors = require('cors');
const { reset } = require('nodemon');

setupDb();

const corsOption = {
    origin: ['http://localhost:3000'],
};
//if you want in every domain then
app.use(express.json())
app.use(cors(corsOption));

const port = process.env.PORT || 8080;

async function main() {
    
   //SELECT * FROM users
   const users = await User.query();

   //API
   app.get('/', (req, res) => {
        res.status(200).send(users)
   })

    app.post('/users/login', async (req, res) => {
        const siteUser = users.find(users => users.username = req.body.username)
        if (siteUser == null) {
            return res.status(200).send('Cannot find user')
        } else {
            try {
                bcrypt.compare(req.body.password, siteUser.password, function(error, response) {
                    if(error) {
                        return res.status(200).send('Error')
                    } if (response) {
                        return res.status(200).send('Success')
                    } else {
                        return res.status(200).send('Password does not match')
                    }
                })
            } catch {
                res.status(200).send('error')
            }
        }

    })

}

main()

/*
    main()
    .then(() => db.destroy())
    .catch((err) => {
        console.error(err);
        return db.destroy();
        });
*/

app.listen(port, () => {
    console.log('The server is running in this following port:', port)
})
