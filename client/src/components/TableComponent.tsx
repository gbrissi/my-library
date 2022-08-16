import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'

export default function TableComponent(props: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{padding: '5px', width: '100%'}} aria-label="a data table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align='center'>Subtitle</TableCell>
            <TableCell align='center'>Author</TableCell>
            <TableCell align='right'>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1984</TableCell>
            <TableCell align='center'>The War Among Us</TableCell>
            <TableCell align='center'>George Orwell</TableCell>
            <TableCell align='right'>5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1984</TableCell>
            <TableCell align='center'>The War Among Us</TableCell>
            <TableCell align='center'>George Orwell</TableCell>
            <TableCell align='right'>5</TableCell>
          </TableRow>          <TableRow>
            <TableCell>1984</TableCell>
            <TableCell align='center'>The War Among Us</TableCell>
            <TableCell align='center'>George Orwell</TableCell>
            <TableCell align='right'>5</TableCell>
          </TableRow>          <TableRow>
            <TableCell>1984</TableCell>
            <TableCell align='center'>The War Among Us</TableCell>
            <TableCell align='center'>George Orwell</TableCell>
            <TableCell align='right'>5</TableCell>
          </TableRow>          <TableRow>
            <TableCell>1984</TableCell>
            <TableCell align='center'>The War Among Us</TableCell>
            <TableCell align='center'>George Orwell</TableCell>
            <TableCell align='right'>5</TableCell>
          </TableRow>          <TableRow>
            <TableCell>1984</TableCell>
            <TableCell align='center'>The War Among Us</TableCell>
            <TableCell align='center'>George Orwell</TableCell>
            <TableCell align='right'>5</TableCell>
          </TableRow>          <TableRow>
            <TableCell>1984</TableCell>
            <TableCell align='center'>The War Among Us</TableCell>
            <TableCell align='center'>George Orwell</TableCell>
            <TableCell align='right'>5</TableCell>
          </TableRow>
        </TableBody>
      </Table>  
    </TableContainer>
  )
}