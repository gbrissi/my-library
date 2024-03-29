process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const port = process.env.PORT || 8080;

const express = require('express')
const app = express()
app.use(express.json())

const bcrypt = require('bcrypt')
const {authUser} = require('./auth.js')

const User = require('./db/models/User')
const Book = require('./db/models/Book');
const LoanReturn = require('./db/models/LoanReturn');

const setupDb = require('./db/_database')
setupDb();

const cors = require('cors');
const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));


async function main() {
    
   const loansReturns = await LoanReturn.query();
   const books = await Book.query();
   const users = await User.query();

   app.get('/', (req, res) => {
        try {
            res.status(200).send(users)
        } catch (error) {
            res.send(error)
        }
   })

    app.post('/users/login', async (req, res) => {
        const siteUser = users.find(userFind => userFind.username === req.body.username)
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

    app.get('/books', async (req, res) => {
        const bookData = await Book.query()
        try {
            res.send(bookData)
        } catch (error) {
            res.send(error)
        }
    })

    app.post('/books/register', async (req, res) => {
        try {
            await Book.query().insert({
                title: req.body.title,
                subtitle: req.body.subtitle,
                author: req.body.author,
                publishing_company: req.body.publishing_company,
                quantity: parseInt(req.body.quantity),
                isbn: req.body.isbn,
                book_image: 01010101
            }).then(() => {
                console.log('Created')
                res.status(200).send('Book created with success!')
            })
        } catch (error) {
            console.log('Here is the error:', error)
            res.send(error)
        }
    })

    app.post('/books/delete', async(req, res) => {
        try {
            await Book.query().deleteById(req.body.bookId)
            .then(res.status(200).send('Book deleted with success!'));
        } catch (error) {
            console.log('Erro aqui: ', error)
            res.send(error)
        }
    })

    app.post('/books/edit', async (req, res) => {
        try {
            await Book.query()
            .findById(req.body.bookId)
            .patch({
                title: req.body.title,
                subtitle: req.body.subtitle,
                author: req.body.author,
                publishing_company: req.body.publishing_company,
                quantity: parseInt(req.body.quantity),
                isbn: req.body.isbn,
                book_image: 01010101
            }).then(() => {
                console.log('Updated')
                res.status(200).send('Book updated with success!')
            })
        } catch (error) {
            console.log('Here is the error:', error)
            res.send(error)
        }
    })

}

main()

app.listen(port, () => {
    console.log('The server is running in this following port:', port)
})
