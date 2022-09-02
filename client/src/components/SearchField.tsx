import React, { useState } from 'react'

import {styled} from '@mui/material/styles';

import {OutlinedInput, InputLabel, InputAdornment } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';


export default function SearchField(props: any) {

  return (
    <SearchContainer>
        <BarLabel>{props.label}</BarLabel>
        <InputBar onChange={event => {props.setSearchTerm(event.target.value)}} placeholder={props.placeholder} id="outlined-input" endAdornment={
            <InputAdornment position='end'>
                <SearchIcon/>
            </InputAdornment>
        }/>
    </SearchContainer>
  )
}

const SearchContainer = styled('div')`
  margin-bottom: 2rem;
`

const BarLabel = styled(InputLabel)`

`

const InputBar = styled(OutlinedInput)`
  background-color: white;
    width: 100%;
`