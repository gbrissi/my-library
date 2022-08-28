import React, { useEffect, useState } from 'react'
import {Button, FormControl, InputLabel, styled, Input, Typography, FormHelperText, TextField, Icon, IconButton} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import axios from 'axios'


/* DATE INPUT
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
<LocalizationProvider dateAdapter={AdapterDateFns}>
<DateTimePicker
    label="DateTime picker"
    value={value}
    onChange={handleChange}
    renderInput={(params) => <TextField {...params} />}
/>
</LocalizationProvider>
*/

export default function RegisterBook() {

    const [value, setValue] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );
    
    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    async function createBook() {

        const username = document.getElementById('user') as HTMLFormElement
        const password = document.getElementById('password') as HTMLFormElement
        const usernamePassword = JSON.stringify({'username': username.value, 'password': password.value}) 

        const options = {
            /* || */
            url: 'https://library-online-webproject.herokuapp.com/books/register' || 'http://localhost:8080/books/register',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*'
            },
        };

        await axios(options).then(res => {

        })
    }

    useEffect(() => {

    })

    return (
        <div>
            <Icon sx={{height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '15px'}}>
                <div style={{backgroundColor: '#00655d', borderRadius: '50%', padding: '15px'}}>
                    <MenuBookIcon sx={{color: 'white', fontSize: '3rem'}}/>
                </div>
            </Icon>
            <Wrapper>
                <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                    <InputLabel>ISBN-10 (only numbers)</InputLabel>
                    <ISBNInput id='isbn' type='number' placeholder='9780439023481'/>
                </FormControl>
                <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                    <InputLabel>Title</InputLabel>
                    <Input id='title' placeholder='Hungry Games'/>
                </FormControl>
                <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                    <InputLabel>Subtitle</InputLabel>
                    <Input id='subtitle' placeholder='The Awakening'/>
                </FormControl>
                <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                    <InputLabel>Author</InputLabel>
                    <Input id='author' placeholder='Katherine Evergreen'/>
                </FormControl>
                <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                    <InputLabel>Publishing Company</InputLabel>
                    <Input id='publishing-company' placeholder='Nova Oracle'/>
                </FormControl>
                <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                    <InputLabel>Quantity</InputLabel>
                    <Input id='quantity' type='number' placeholder='5'/>
                </FormControl>
                <CustomButton variant='contained'>Submit</CustomButton>
            </Wrapper>
        </div>
    )
}

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
    max-width: 100%;
    width: 500px;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 35px;
    border-radius: 5px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`


/*

    const username = document.getElementById('user') as HTMLFormElement
    const password = document.getElementById('password') as HTMLFormElement
    const usernamePassword = JSON.stringify({'username': username.value, 'password': password.value}) 

*/