import { useEffect, useState } from 'react'
import Book from './Book';

import bookImg from '../assets/images/1984-book.jpg'

import { Grid, Skeleton, styled } from '@mui/material';
import axios from 'axios';

export default function Library(props: any) {
  const [booksData, setBooksData] = useState<any[]>([])

  useEffect(() => {
    const options = {
      url: 'https://library-online-webproject.herokuapp.com/books' || 'http://localhost:8080/books',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': '*'
      },
    };

    axios(options).then(res => {
      const books = res.data
      const lowerSearchTerm = props.searchTerm.toLowerCase()
      const filteredBooks = books.filter((book: any) => book.title.toLowerCase().includes(lowerSearchTerm))
      setBooksData(filteredBooks)
    })

    .catch(err => {
      console.log(err)
    })
  })

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
      { booksData.length > 0 ? (booksData.map(book => 
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Book 
            image={bookImg}
            title={book.title}
            subtitle={book.subtitle}
            author={book.author}
            />
        </Grid>
      )) : <><Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant='rectangular' sx={{margin: '10px', height: '350px'}}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant='rectangular' sx={{margin: '10px', height: '350px'}}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant='rectangular' sx={{margin: '10px', height: '350px'}}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant='rectangular' sx={{margin: '10px', height: '350px'}}/>
      </Grid>
      </>
    }
    </Grid>
  )
}
