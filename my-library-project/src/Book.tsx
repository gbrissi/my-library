import React from 'react'

import bookImg from './images/catching-fire.jpg'

import {styled} from '@mui/material/styles';

import { Card, Container } from '@mui/material';

function Book() {
  return (
    <BookCard>
        <BookImg src={bookImg} alt='Book Image'/>
        <Title>Book Title</Title>
        <Subtitle>Book Subtitle</Subtitle>
    </BookCard>
  )
}

export default Book

const BookCard = styled(Card)`
    width: 200px;
    height: 350px;
    margin: 10px;
    background-color: #fcfafa;
    
    @media(max-width: 700px) {
        width: 175px;
        height: 270px;
    }

    @media(max-width: 460px) {
        width: 125px;
        height: 175px;
    }
`

const BookImg = styled('img')`
    width: 100%;
    height: 60%;
`

const Subtitle = styled('p')`
    margin-top: -18px;
    color: #3c3c3c;
    font-family: sans-serif;
    font-weight: bolder;
    font-size: 1rem;
    font-weight: 400;
    padding: 2px;
`

const Title = styled('p')`
    margin-top: -2px;
    color: #3c3c3c;
    font-family: sans-serif;
    font-weight: bolder;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 2px;
`