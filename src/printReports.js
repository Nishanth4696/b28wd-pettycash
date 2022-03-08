import { Button } from "@mui/material";
import React, { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { useEffect } from "react";


const ComponentToPrint = forwardRef((props, ref) => {
    return <div ref={ref}></div>;
  });


export function PrintReports() {
    const ref = useRef();
  const [trans, setTrans] = useState([])

  const getTrans = () =>{
    fetch(`https://61b7499a64e4a10017d18a29.mockapi.io/transaction`,{method:"GET"})
    .then((data) => data.json())
    .then((trs) => setTrans(trs))
  }
  useEffect(getTrans,[])
  const rows = [...trans];
  return (
     <Paper elevation={1} style={{backgroundColor:'white', color:'black', height:'90vh', width:'90%',margin:'20px'}}>
         <div>
      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({ handlePrint }) => (
            <Button variant="contained" onClick={handlePrint}>Print</Button>
          )}
        </PrintContextConsumer>
      </ReactToPrint>
      <ComponentToPrint ref={ref} />
    </div>
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
