import * as React from 'react';
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

function createData({trans}) {
  return
   {trans.map(() =>>) date, description, voucherno, cost , tax, debit, credit, balance };
}

const rows = [
  createData(),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export function CustomizedTables() {

  return (
    <TableContainer component={Paper}>
      <Table style={{margin:"20px"}} sx={{ minWidth: '700px' }} aria-label="customized table">
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
        <TableBody>
         {rows.map((row) =>(
            <StyledTableRow key={row.Trans_Date}>
              <StyledTableCell component="th" scope="row">
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
