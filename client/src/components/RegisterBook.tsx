import React, { useEffect, useState } from 'react'
import {Button, FormControl, InputLabel, styled, Input, Icon,  Fade} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import axios from 'axios'


/* DATE INPUT
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
    const [value, setValue] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );
    
    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
<LocalizationProvider dateAdapter={AdapterDateFns}>
<DateTimePicker
    label="DateTime picker"
    value={value}
    onChange={handleChange}
    renderInput={(params) => <TextField {...params} />}
/>
</LocalizationProvider>
*/

export default function RegisterBook(props: any) {

    async function createBook() {

        const isbn = document.getElementById('isbn') as HTMLFormElement
        const title = document.getElementById('title') as HTMLFormElement
        const subtitle = document.getElementById('subtitle') as HTMLFormElement
        const author = document.getElementById('author') as HTMLFormElement
        const publishingCompany = document.getElementById('publishing-company') as HTMLFormElement
        const quantity = document.getElementById('quantity') as HTMLFormElement

        const bookRegisterObject = JSON.stringify({'title': title.value, 'subtitle': subtitle.value, 'author': author.value, 'publishing_company': publishingCompany.value, 'quantity': quantity.value, 'isbn': isbn.value}) 
        
        const options = {
            url: 'https://library-online-webproject.herokuapp.com/books/register' ||'http://localhost:8080/books/register',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*'
            },
            data: bookRegisterObject
        };

        await axios(options).then(res => {
            console.log(res.data)
        })

        isbn.value = null;
        title.value = ''
        subtitle.value = ''
        author.value = ''
        publishingCompany.value = ''
        quantity.value = null;

    }

    async function editBook(bookId: any) {
        
        const isbn = document.getElementById('isbn') as HTMLFormElement
        const title = document.getElementById('title') as HTMLFormElement
        const subtitle = document.getElementById('subtitle') as HTMLFormElement
        const author = document.getElementById('author') as HTMLFormElement
        const publishingCompany = document.getElementById('publishing-company') as HTMLFormElement
        const quantity = document.getElementById('quantity') as HTMLFormElement

        const bookRegisterObject = JSON.stringify({'bookId': bookId, 'title': title.value, 'subtitle': subtitle.value, 'author': author.value, 'publishing_company': publishingCompany.value, 'quantity': quantity.value, 'isbn': isbn.value}) 
        
        const options = {
            url: 'https://library-online-webproject.herokuapp.com/books/edit' ||'http://localhost:8080/books/edit',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*'
            },
            data: bookRegisterObject
        };

        await axios(options).then(res => {
            console.log(res.data)
        })

        isbn.value = null;
        title.value = ''
        subtitle.value = ''
        author.value = ''
        publishingCompany.value = ''
        quantity.value = null;

    }

    return (
        <Fade in timeout={300}>
            <Wrapper>
                <Icon sx={{height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '15px'}}>
                    <div style={{backgroundColor: '#00655d', borderRadius: '50%', padding: '15px'}}>
                        <MenuBookIcon sx={{color: 'white', fontSize: '3rem'}}/>
                    </div>
                </Icon>
                <Container>
                    <Form>
                        <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                            <InputLabel>ISBN-10 (only numbers)</InputLabel>
                            <ISBNInput required id='isbn' type='number' placeholder='9780439023481'/>
                        </FormControl>
                        <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                            <InputLabel>Title</InputLabel>
                            <Input required id='title' placeholder='Hungry Games'/>
                        </FormControl>
                        <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                            <InputLabel>Subtitle</InputLabel>
                            <Input required id='subtitle' placeholder='The Awakening'/>
                        </FormControl>
                        <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                            <InputLabel>Author</InputLabel>
                            <Input required id='author' placeholder='Katherine Evergreen'/>
                        </FormControl>
                        <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                            <InputLabel>Publishing Company</InputLabel>
                            <Input required id='publishing-company' placeholder='Nova Oracle'/>
                        </FormControl>
                        <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                            <InputLabel>Quantity</InputLabel>
                            <Input required id='quantity' type='number' placeholder='5'/>
                        </FormControl>
                        <CustomButton onClick={async () => {
                            console.log(props.submit)
                            if (props.submit == 'create') {
                                createBook();
                            }
                            else if (props.submit == 'edit') {
                                editBook(props.bookInfo);
                            }
                            else {
                                console.log('No parameters')
                            }
                        }}variant='contained'>Submit</CustomButton>
                    </Form>
                </Container>
            </Wrapper>
        </Fade>
    )
}

const Form = styled('form')`
    width: 100%;
`

const CustomButton = styled(Button)`
    width: 100%;
    margin-top: 15px;
    height: 60px;
    background-color: #00655d;
    color: white;
    border-radius: 10px;
    font-size: 1.2rem;
    :hover {
        background-color: #007272;
    }
`
const ISBNInput = styled(Input)`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const Wrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Container = styled('div')`
    width: 500px;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 35px;
    border-radius: 5px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    @media (max-width: 600px) {
        width: 100%;
    }
`


/*

    const username = document.getElementById('user') as HTMLFormElement
    const password = document.getElementById('password') as HTMLFormElement
    const usernamePassword = JSON.stringify({'username': username.value, 'password': password.value}) 

*/