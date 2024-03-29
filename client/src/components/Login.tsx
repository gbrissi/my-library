import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


import {styled} from '@mui/material/styles'

import {Button, InputLabel, OutlinedInput, InputAdornment, Fade, Icon} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

var setDisable = false
export default function Login(props: any) {

    const navigate = useNavigate()
    const [isError, setIsError] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    function handleClickLoad() {
        if(setDisable) {
            setDisable = false
        } else {
            setDisable = true
        }
        return setDisable
    }


    function keyDown(e: any) {
        if (e.keyCode === 13) {
            console.log('enter')
            return true
        } else {
            return false
        }
    }

    async function postData(): Promise<boolean> {
        const username = document.getElementById('user') as HTMLFormElement
        const password = document.getElementById('password') as HTMLFormElement
        const usernamePassword = JSON.stringify({'username': username.value, 'password': password.value}) 
        const options = {
            url: 'https://library-online-webproject.herokuapp.com/users/login' || 'http://localhost:8080/users/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*'
            },
            data: usernamePassword
          };

        await axios(options).then(res => {
            if(res.data == 'Success') {
                console.log('Connected')
                async function navigateDash() {
                    await navigate('/dashboard')
                    await function() {
                        const body = document.querySelector('body')
                        if(body != null) {
                            body.style.overflow = 'auto'
                        }
                    }
                }
                props.setIsClosed(false)
                navigateDash();
            } else {
                username.value = ''
                password.value = ''
            }
        })

        if (username.value == '') {
            setIsDisabled(false)
            return false
        } else {
            return true
        }
    }

  return (
    <Fade in>
        <Form>
            <Icon sx={{height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '15px'}}>
                <div style={{backgroundColor: '#00655d', borderRadius: '50%', padding: '15px'}}>
                    <LockIcon sx={{color: 'white', fontSize: '3rem'}}/>
                </div>
            </Icon>
            <FormContainer>
                <CloseContainer>
                    <IconButton onClick={() => {
                        props.setIsClosed(false)
                    }}>
                        <CloseIcon sx={{color: 'gray', fontSize: '1.2rem'}}/>
                    </IconButton>
                </CloseContainer>
                <InputContainer>
                    <InputErrorCode>
                    <InputLabel sx={{alignSelf: 'end'}}>User</InputLabel>
                    {
                    !isValid &&
                    <ErrorCode>User and/or password incorrect(s)</ErrorCode>
                    }
                    </InputErrorCode>
                    <CustomOutlinedInput required={true} error={isError} id='user'/>
                </InputContainer>
                <InputContainer>
                    <InputLabel>Password</InputLabel>
                    <CustomOutlinedInput required={true} error={isError} id='password' type={isVisible ? 'text' : 'password'} endAdornment={
                        <InputAdornment position='end'>
                            <IconButton edge='end' onClick={() => {
                                isVisible ? setIsVisible(false) : setIsVisible(true)
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
                {
                    !isDisabled &&
                    <SubmitButton disabled={false} type='submit' onKeyDown={(e) => {
                        if(keyDown(e)) {
                        async () => {isDisabled ? setIsDisabled(false) : setIsDisabled(true), await setIsValid(await postData()), setIsDisabled(handleClickLoad()), setIsError(true)}
                        }
                    }} onClick={async () => {setIsDisabled(handleClickLoad()), await setIsValid(await postData()), setIsDisabled(handleClickLoad()), setIsError(true)}} variant="contained">ENTER</SubmitButton>
                }
                {
                    isDisabled &&
                    <SubmitButton disabled={true} variant="contained">Enter</SubmitButton>
                }
                <ForgotPassword>Forgot the password?</ForgotPassword>
            </FormContainer>
        </Form>
    </Fade>
  )
}

const CloseContainer = styled('div')`
    position: absolute;
    top: 92px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const InputErrorCode = styled('div')`
    display: flex;
    justify-content: space-between;
`

const ErrorCode = styled('p')`
    margin: 0;
    justify-self: end;
    font-family: 'Roboto' sans-serif;
    font-size: 1.1rem;
    color: red;
`

const CustomOutlinedInput = styled(OutlinedInput)`
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
    cursor: auto;
    position: absolute;
    z-index: 999;
    width: 450px;
    max-width: 100%;
`

const FormContainer = styled('div')`
    background-color: whitesmoke;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    padding: 35px;
    border-radius: 15px;
`

const InputContainer = styled('div')`
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
`

const SubmitButton = styled(Button)`
    height: 50px;
    padding: 8px;
    width: 100%;
    margin: 15px;
    margin-top: 25px;
    text-align: center;
    color: white;
    font-weight: bolder;
    font-family: sans-serif;
    font-size: 1.2rem;
    border-radius: 8px;
    background-color: #00655d;
    cursor: pointer;

    :hover {
        background-color: #007979;
    }
`