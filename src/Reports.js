import React from "react";
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export function Reports() {
  const [trans, setTrans] = useState([])
const history = useHistory();
  const getTrans = () =>{
    fetch(`https://61b7499a64e4a10017d18a29.mockapi.io/transaction`,{method:"GET"})
    .then((data) => data.json())
    .then((trs) => setTrans(trs))
  }
  useEffect(getTrans,[])
  const rows = [...trans];
  return (
     <Paper elevation={1} style={{backgroundColor:'white', color:'black', height:'100vh', width:'70vw',margin:'40px'}}>
      
      <Button style={{margin:"20px"}} onClick={()=> history.goBack()} variant="contained" startIcon={<ArrowBackIcon />}>
  Back
</Button>
       <table className="datatable" border='1'>
         <thead>
           <th>Date</th>
           <th>Description</th>
           <th>Voucher No</th>
           <th>Cost</th>
           <th>Vat/Tax</th>
           <th>Debit</th>
           <th>Credit</th>
           <th>Balance</th>

         </thead>
         <tbody style={{textAlign:'center'}}>
         {rows.map((row) =>(
           
           <tr>
             <td>{row.Trans_Date}</td>
             <td>{row.Description}</td>
             <td>{row.Voucher_No}</td>
             <td>{row.Cost}</td>
             <td>{row.Vat}</td>
             <td>{row.Total_Debit}</td>
             <td>{row.Total_Credit}</td>
             <td>{row.Opening_Balance}</td>
           </tr>
           
         
         ))}
         </tbody>
       </table>
       </Paper> 
  );
};
