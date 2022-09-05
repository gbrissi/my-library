import React, {useEffect, useState} from 'react'
import axios from 'axios';


import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Skeleton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RegisterBook from './RegisterBook';

export default function TableComponent(props: any) {
  const [booksData, setBooksData] = useState<any[]>([])
  const [bookValue, setBookValue] = useState({})

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            booksData.length > 0 ? (booksData.map(book => 
              <TableRow key={book.isbn}>
                <TableCell align='left'>{book.isbn}</TableCell>
                <TableCell align='center'>{book.title}</TableCell>
                <TableCell align='center'>{book.subtitle}</TableCell>
                <TableCell align='center'>{book.author}</TableCell>
                <TableCell align='center'>{book.quantity}</TableCell>
                <TableCell align='center'><div style={{display: 'flex', justifyContent: 'center'}}>
                    <EditIcon onClick={() => {setBookValue(book), console.log(bookValue), handleOpen()}} sx={{marginRight: '24px', cursor:'pointer', fontSize: '1.8rem', backgroundColor:'#DAA520', color:'white', borderRadius: '7px', "&:hover": {background: "#fcbf26", transform: "scale(1.1)"}}}/>
                    <DeleteIcon onClick={() => {delBook(book.id)}} sx={{cursor:'pointer', backgroundColor: '#C70039', color:'white', fontSize: '1.8rem', borderRadius: '7px', "&:hover": {background: "#ff0048", transform: "scale(1.1)"}}}/>
                </div></TableCell>
              </TableRow>
            )) : (
              <TableRow key={'none'}>
                <TableCell align='left'><Skeleton variant="rectangular" sx={{width: '100%'}}/></TableCell>
                <TableCell align='center'><Skeleton variant="rectangular" sx={{width: '100%'}}/></TableCell>
                <TableCell align='center'><Skeleton variant="rectangular" sx={{width: '100%'}}/></TableCell>
                <TableCell align='center'><Skeleton variant="rectangular" sx={{width: '100%'}}/></TableCell>
                <TableCell align='center'><Skeleton variant="rectangular" sx={{width: '100%'}}/></TableCell>
                <TableCell align='center'><div style={{display: 'flex', justifyContent: 'center'}}>
                    <EditIcon sx={{marginRight: '24px', fontSize: '1.8rem', backgroundColor:'lightgray', color:'white', borderRadius: '7px'}}/>
                    <DeleteIcon sx={{backgroundColor: 'lightgray', color:'white', fontSize: '1.8rem', borderRadius: '7px'}}/>
                </div></TableCell>
              </TableRow>
            )
          }
          { bookValue &&
              <Modal
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              open={open}
              onClose={handleClose}
              children={<RegisterBook setIsActive={setOpen} bookInfo={bookValue} submit='edit'/>}
              aria-labelledby="modal-register-book"
            />
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}