import React from 'react'
import Book from './Book';

import bookImg from '../assets/images/1984-book.jpg'

import {styled} from '@mui/material/styles';
import { Grid } from '@mui/material';

export default function Library() {
  return (
    <Grid container sx={{
      padding: '10px',
      ['@media (max-width: 1200px)']: {
        width: '85vw',
        alignSelf: 'center',
        marginTop: '15px'
      },
      ['@media (max-width: 900px)']: {
        width: '70vw',
        alignSelf: 'center',
        marginTop: '15px'
      },
      ['@media (max-width: 680px)']: {
        width: '85vw',
        alignSelf: 'center',
        marginTop: '15px'
      },
      ['@media (max-width: 600px)']: {
        width: '57vw',
        alignSelf: 'center',
        marginTop: '15px'
      },
      ['@media (max-width: 470px)']: {
        width: '75vw',
        alignSelf: 'center',
        marginTop: '15px',
        height: '260px'
      },
      ['@media (max-width: 380px)']: {
        width: '80vw',
        alignSelf: 'center',
        marginTop: '15px',
        height: '260px'
      }
      }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Book 
          image={bookImg}
          title='1984' 
          subtitle='The War Among Us' 
          author='George Orwell'
          genre='Fantasy'
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <Book 
          image={bookImg}
          title='1984' 
          subtitle='The War Among Us' 
          author='George Orwell'
          genre='Fantasy'
         />
      </Grid>      
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <Book 
          image={bookImg}
          title='1984' 
          subtitle='The War Among Us' 
          author='George Orwell'
          genre='Fantasy'
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <Book 
          image={bookImg}
          title='1984' 
          subtitle='The War Among Us' 
          author='George Orwell'
          genre='Fantasy'
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <Book 
          image={bookImg}
          title='1984' 
          subtitle='The War Among Us' 
          author='George Orwell'
          genre='Fantasy'
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <Book 
          image={bookImg}
          title='1984' 
          subtitle='The War Among Us' 
          author='George Orwell'
          genre='Fantasy'
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <Book 
          image={bookImg}
          title='1984' 
          subtitle='The War Among Us' 
          author='George Orwell'
          genre='Fantasy'
         />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <Book 
          image={bookImg}
          title='1984' 
          subtitle='The War Among Us' 
          author='George Orwell'
          genre='Fantasy'
         />
      </Grid>
    </Grid>
  )
}
