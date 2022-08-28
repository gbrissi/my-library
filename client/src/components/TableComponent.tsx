import React, {useEffect, useState} from 'react'
import axios from 'axios';

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TableComponent() {

  const [booksData, setBooksData] = useState<any[]>([])

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

  useEffect(() => {
    axios(options).then(res => {
      setBooksData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  async function delBook(bookId: any){
    const bookIdInfo = JSON.stringify({'bookId': bookId})
    const options = {
      url: 'https://library-online-webproject.herokuapp.com/books/delete' || 'http://localhost:8080/books/delete',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': '*'
      },
      data: bookIdInfo
    };
    await axios(options).then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  async function editBook(bookId: any) {
    
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{padding: '5px', width: '100%'}} aria-label="a data table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>ISBN</TableCell>
            <TableCell align='center'>Title</TableCell>
            <TableCell align='center'>Subtitle</TableCell>
            <TableCell align='center'>Author</TableCell>
            <TableCell align='center'>Quantity</TableCell>
            <TableCell align='right'></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {
            booksData.map(book => 
              <TableRow key={book.isbn}>
                <TableCell align='left'>{book.isbn}</TableCell>
                <TableCell align='center'>{book.title}</TableCell>
                <TableCell align='center'>{book.subtitle}</TableCell>
                <TableCell align='center'>{book.author}</TableCell>
                <TableCell align='center'>{book.quantity}</TableCell>
                <TableCell align='center'><div><EditIcon onClick={() => editBook(book.id)} sx={{marginRight: '36px', cursor:'pointer', fontSize: '1.8rem', backgroundColor:'#DAA520', color:'white', borderRadius: '7px', "&:hover": {background: "#fcbf26", transform: "scale(1.1)"}}}/><DeleteIcon onClick={() => {delBook(book.id)}} sx={{cursor:'pointer', backgroundColor: '#C70039', color:'white', fontSize: '1.8rem', borderRadius: '7px', "&:hover": {background: "#ff0048", transform: "scale(1.1)"}}}/></div></TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>  
    </TableContainer>
  )
}