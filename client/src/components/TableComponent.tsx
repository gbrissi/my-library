import React, {useEffect, useState} from 'react'
import axios from 'axios';

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'

export default function TableComponent() {

  const [booksData, setBooksData] = useState<any[]>([])

  const options = {
    /* || */
    url: 'https://library-online-webproject.herokuapp.com/books' || 'http://localhost:8080/books',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*'
    },
  };

  useEffect(() => {
    axios(options).then(res => {
      setBooksData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{padding: '5px', width: '100%'}} aria-label="a data table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>ISBN</TableCell>
            <TableCell align='center'>Title</TableCell>
            <TableCell align='center'>Subtitle</TableCell>
            <TableCell align='center'>Author</TableCell>
            <TableCell align='right'>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            booksData.map(book => 
              <TableRow>
                <TableCell align='left'>{book.isbn}</TableCell>
                <TableCell align='center'>{book.title}</TableCell>
                <TableCell align='center'>{book.subtitle}</TableCell>
                <TableCell align='center'>{book.author}</TableCell>
                <TableCell align='right'>{book.quantity}</TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>  
    </TableContainer>
  )
}