import React from 'react'

import Book from './Book';

import {styled} from '@mui/material/styles';

import { Container } from '@mui/material';

function Library() {
  return (
    <BooksContainer disableGutters>
        <Book/>
        <Book/>
        <Book/>     
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </BooksContainer>
  )
}

export default Library

const BooksContainer = styled(Container)`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`