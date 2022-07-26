const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const User = require('./models/User')
const db = require('./util/_database')

app.use(express.json())
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
    app.post('/users/login', async (req, res) => {
        const person = users.find(person => person.username = req.body.username)
        if (person == null) {
            return res.status(400).send('Cannot find person')
        } try {
            if(await bcrypt.compare(req.body.password, person.password)) {
                console.log('Success')
                res.send('Success')
            } else {
                console.log('Not Allowed')
                res.send('Not Allowed')
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
