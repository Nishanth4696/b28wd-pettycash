import * as React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export function CustomizedTables({rows}) {

  return (
    <TableContainer component={Paper}>
      <Table style={{margin:"20px", width:'1200px'}}  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell >Description</StyledTableCell>
            <StyledTableCell >Voucher No.</StyledTableCell>
            <StyledTableCell >Cost</StyledTableCell>
            <StyledTableCell >Vat/Tax</StyledTableCell>
            <StyledTableCell >Debit</StyledTableCell>
            <StyledTableCell >Credit</StyledTableCell>
            <StyledTableCell align='middle'>Balance</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
         {rows.map((row) =>(
            <StyledTableRow key={row.Voucher_No}>
              <StyledTableCell component="th" scope="row" align='middle'>
                {row.Trans_Date}
              </StyledTableCell>
              <StyledTableCell align='middle'>{row.Description}</StyledTableCell>
              <StyledTableCell align='middle'>{row.Voucher_No}</StyledTableCell>
              <StyledTableCell align='middle'>{row.Cost}</StyledTableCell>
              <StyledTableCell align='middle'>{row.Vat}</StyledTableCell>
              <StyledTableCell align='middle'>{row.Total_Debit}</StyledTableCell>
              <StyledTableCell align='middle'>{row.Total_Credit}</StyledTableCell>
              <StyledTableCell align='middle'>{row.Opening_Balance}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

