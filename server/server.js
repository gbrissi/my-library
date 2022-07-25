const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const User = require('./models/User')
const db = require('./util/_database')

app.use(express.json())

async function main() {

    /* INSERTING A "FICTIONAL ROW" IN users TABLE.
    await User.query().insert({
        username: 'KellyG',
        password: await bcrypt.hash('tomatoes', 10)
    })
    */

   //SELECT * FROM users
   const users = await User.query();

   //API

   //IS IT GETTING THE QUERY AS A RESPONSE?
   app.get('/users', (req, res) => {
    res.json(users)
   })

   app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
   })

    app.post('/users/login', async (req, res) => {
        const person = users.find(person => person.username = req.body.username)
        if (person == null) {
            return res.status(400).send('Cannot find person')
        } try {
            if(await bcrypt.compare(req.body.password, person.password)) {
                res.send('Success')
            } else {
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



app.listen(3001)