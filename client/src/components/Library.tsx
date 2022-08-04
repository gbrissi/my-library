import React from 'react'

import Book from './Book';

import {styled} from '@mui/material/styles';

import { Grid } from '@mui/material';

function Library() {
  return (
    <Grid container sx={{
      padding: '10px',
      ['@media (max-width: 600px)']: {
        width: '80vw',
        alignSelf: 'center',
        marginTop: '15px'
      }
      }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Book/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Book/>
      </Grid>      
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Book/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Book/>
      </Grid>
    </Grid>
  )
}

export default Library