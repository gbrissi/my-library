import React from 'react'

import {styled} from '@mui/material/styles';

import { Container, OutlinedInput, InputLabel, InputAdornment } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';


function SearchField() {
  return (
    <SearchContainer>
        <BarLabel>Search for the book name</BarLabel>
        <InputBar placeholder='Hungry Games: The Apocalypse of Tomorrow' id="outlined-input" endAdornment={
            <InputAdornment position='end'>
                <SearchIcon/>
            </InputAdornment>
        }/>
    </SearchContainer>
  )
}

const SearchContainer = styled(Container)`
  margin-bottom: 2rem;
`

const BarLabel = styled(InputLabel)`

`

const InputBar = styled(OutlinedInput)`
  background-color: white;
    width: 100%;
`

export default SearchField
