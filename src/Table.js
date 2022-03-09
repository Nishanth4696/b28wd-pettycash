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
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';



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





export function CustomizedTables({rows, deleteTrans, }) {
const history = useHistory();
  return (
    <TableContainer component={Paper}>
      <Table style={{marginTop:'20px', width:'100vw'}}  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Date</StyledTableCell>
            <StyledTableCell align='center' >Description</StyledTableCell>
            <StyledTableCell align='center' >Voucher No.</StyledTableCell>
            <StyledTableCell align='center' >Cost</StyledTableCell>
            <StyledTableCell align='center' >Vat/Tax</StyledTableCell>
            <StyledTableCell align='center' >Debit</StyledTableCell>
            <StyledTableCell align='center' >Credit</StyledTableCell>
            <StyledTableCell align='center' >Balance</StyledTableCell>
            <StyledTableCell align='center' ></StyledTableCell>
            <StyledTableCell align='center' ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
         {rows.map((row) =>(
            <StyledTableRow key={row.Voucher_No}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.Trans_Date}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.Description}</StyledTableCell>
              <StyledTableCell align='center'>{row.Voucher_No}</StyledTableCell>
              <StyledTableCell align='center'>{row.Cost}</StyledTableCell>
              <StyledTableCell align='center'>{row.Vat}</StyledTableCell>
              <StyledTableCell align='center'>{row.Total_Debit}</StyledTableCell>
              <StyledTableCell align='center'>{row.Total_Credit}</StyledTableCell>
              <StyledTableCell align='center'>{row.Opening_Balance}</StyledTableCell>
              <StyledTableCell align='center'>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>history.push("/pettycash/edit/" + row._id)}>
                  <EditIcon />
                </IconButton></StyledTableCell>
              <StyledTableCell align='center'>
                <IconButton color="error" aria-label="upload picture" component="span" onClick={() =>deleteTrans(row._id)}>
                  <DeleteIcon />
                </IconButton></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

