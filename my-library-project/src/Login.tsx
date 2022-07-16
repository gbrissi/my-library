import React from 'react';

import {styled} from '@mui/material/styles'

import {Button, TextField} from '@mui/material'

function Login() {
  return (
    <Form>
        <Legend>
            <h1 id='title'>LOGIN</h1>
        </Legend>
        <FormContainer>
            <InputContainer>
                <Input placeholder='Nome do usuário' id="outlined-basic" label="Usuário" variant="outlined" />
            </InputContainer>
            <InputContainer>
                <Input placeholder='Senha do usuário' id="outlined-basic" label="Senha" variant="outlined" />
            </InputContainer>
            <SubmitButton variant="contained">Entrar</SubmitButton>
            <ForgotPassword>Esqueceu a senha?</ForgotPassword>
        </FormContainer>
    </Form>
  )
}

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
const Form = styled('div')`
    background-color: whitesmoke;
    background-color: whitems;
    width: 450px;
    max-width: 100%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 5px;
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
    background-color: #3CB371;
    width: 100%;
    border-radius: 5px;

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

const Input = styled(TextField)`
    margin-bottom: 15px;
    flex: 1;
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
    background-color: #3CB371;
    cursor: pointer;

    :hover {
        background-color: #369460;
    }
`

export default Login