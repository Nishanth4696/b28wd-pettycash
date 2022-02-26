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
      <Table style={{margin:"20px", width:'800px'}}  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell >Description</StyledTableCell>
            <StyledTableCell >Voucher No.</StyledTableCell>
            <StyledTableCell >Cost</StyledTableCell>
            <StyledTableCell >Vat/Tax</StyledTableCell>
            <StyledTableCell >Debit</StyledTableCell>
            <StyledTableCell >Credit</StyledTableCell>
            <StyledTableCell >Balance</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
         {rows.map((row) =>(
            <StyledTableRow key={row.Trans_Date}>
              <StyledTableCell component="th" scope="row" >
                {row.Trans_Date}
              </StyledTableCell>
              <StyledTableCell >{row.Voucher_No}</StyledTableCell>
              <StyledTableCell >{row.Description}</StyledTableCell>
              <StyledTableCell >{row.Cost}</StyledTableCell>
              <StyledTableCell >{row.Vat}</StyledTableCell>
              <StyledTableCell >{row.Total_Debit}</StyledTableCell>
              <StyledTableCell >{row.Opening_Balance}</StyledTableCell>
              <StyledTableCell >{row.Cheque_Received}</StyledTableCell>
              <StyledTableCell >{row.Total_Credit}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

