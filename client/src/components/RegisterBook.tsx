import React, { useState } from 'react'
import {Button, FormControl, InputLabel, styled, OutlinedInput, Typography, FormHelperText} from '@mui/material'
import axios from 'axios'
import { color } from '@mui/system'

export default function RegisterBook() {

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

    return (
        <Wrapper>
            <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                <InputLabel>Title</InputLabel>
                <OutlinedInput placeholder='Hungry Games'/>
            </FormControl>
            <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                <InputLabel>Subtitle</InputLabel>
                <OutlinedInput placeholder='Hungry Games'/>
            </FormControl>
            <FormControl sx={{width: '100%', marginBottom: '25px'}}>
                <InputLabel>Author</InputLabel>
                <OutlinedInput placeholder='Hungry Games'/>
            </FormControl>
            <CustomButton variant='contained'>Submit</CustomButton>
        </Wrapper>
    )
}

const CustomButton = styled(Button)`
    width: 100%;
    margin-top: 15px;
    height: 60px;
    background-color: teal;
    color: white;
    border-radius: 10px;
    :hover {
        background-color: #02adad;
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
    border-radius: 10px;
`


/*

    const username = document.getElementById('user') as HTMLFormElement
    const password = document.getElementById('password') as HTMLFormElement
    const usernamePassword = JSON.stringify({'username': username.value, 'password': password.value}) 

*/