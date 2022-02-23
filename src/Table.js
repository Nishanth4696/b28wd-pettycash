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

function createData(date, description, voucherno,cost , tax, debit, credit, balance) {
  return { date, description, voucherno, cost , tax, debit, credit, balance };
}

const rows = [
  createData("12-05-2021","hello nishanth","12431","18000","233","123","3231","2131231","12323" ),
  createData("12-05-2021","hello nishanth","12431","18000","233","123","3231","2131231","12323" ),
//   createData("","","","","","","","","" ),
//   createData("","","","","","","","","" ),
//   createData("","","","","","","","","" ),
createData("12-05-2021","hello nishanth","12431","18000","233","123","3231","2131231","12323" )
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
          {rows.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell >{row.description}</StyledTableCell>
              <StyledTableCell >{row.voucherno}</StyledTableCell>
              <StyledTableCell >{row.cost}</StyledTableCell>
              <StyledTableCell >{row.tax}</StyledTableCell>
              <StyledTableCell >{row.debit}</StyledTableCell>
              <StyledTableCell >{row.credit}</StyledTableCell>
              <StyledTableCell >{row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
