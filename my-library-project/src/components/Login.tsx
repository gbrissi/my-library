import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import {styled} from '@mui/material/styles'

import {Button, InputLabel, OutlinedInput, InputAdornment, Input} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

var visibility = false
function Login() {

  let navigate = useNavigate()

  const [isVisible, setIsVisible] = useState(false);
    var handleClickShowPassword = function(arg: boolean) {
        if(arg === false) {
        visibility = true;
        } else {
        visibility = false;
        }
        return visibility;
    }

    function postData() {
        const username = document.getElementById('user') as HTMLFormElement
        const password = document.getElementById('password') as HTMLFormElement
        const usernamePassword = {'username': username.value, 'password': password.value} 
        
        console.log(usernamePassword)
        axios.post('https://library-online-webproject.herokuapp.com/users/login', usernamePassword).then(res => {
            console.log(res)
        })
        
    }

  return (
    <Form>
        <Legend>
            <h1 id='title'>LOGIN</h1>
        </Legend>
        <FormContainer>
            <InputContainer>
                <InputLabel>Usuário</InputLabel>
                <CustomOutlinedInput id='user'/>
            </InputContainer>
            <InputContainer>
                <InputLabel>Senha</InputLabel>
                <CustomOutlinedInput id='password' type={visibility ? 'text' : 'password'} endAdornment={
                    <InputAdornment position='end'>
                        <IconButton edge='end' onClick={() => {
                            setIsVisible(handleClickShowPassword(visibility))
                        }}>
                            { isVisible &&
                                <Visibility/>
                            }
                            { !isVisible &&
                                <VisibilityOff/>
                            }
                        </IconButton>
                    </InputAdornment>
                }/>
            </InputContainer>
            <SubmitButton onClick={() => {postData()}} variant="contained">Entrar</SubmitButton>
            <ForgotPassword>Esqueceu a senha?</ForgotPassword>
        </FormContainer>
    </Form>
  )
}

const CustomOutlinedInput = styled(OutlinedInput)`
    height: 35px;
`

const ForgotPassword = styled('a')`
    color: blue;
    width: 100%;
    font-family: sans-serif;
    text-decoration: underline;
    font-size: 1.1rem;
    text-align: center;
    cursor: pointer;

    :hover {
        color: #0000c9;
    }

`
const Form = styled('form')`
    position: absolute;
    z-index: 999;
    background-color: whitesmoke;
    width: 450px;
    max-width: 100%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`

const FormContainer = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 25px;
`

const Legend = styled('legend')`
    padding: 5px 15px 5px 15px;
    background-color: #00655d;
    width: 100%;

    #title {
        text-align: center;
        font-weight: bolder;
        font-family: 'Roboto', sans-serif;
        line-height: 1.2rem;
        letter-spacing: 1px;
        font-size: 1.4rem;
        color: white;
    }
`;

const InputContainer = styled('div')`
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
`

const SubmitButton = styled(Button)`
    padding: 8px;
    width: 100%;
    margin: 15px;
    margin-top: 0;
    text-align: center;
    color: white;
    font-weight: bolder;
    font-family: sans-serif;
    font-size: 1.2rem;
    border-radius: 8px;
    background-color: #00655d;
    cursor: pointer;

    :hover {
        background-color: #004d46;
    }
`

export default Login