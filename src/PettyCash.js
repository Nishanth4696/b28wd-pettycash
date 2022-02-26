import Button from '@mui/material/Button';
import './App.css';
import TextField from '@mui/material/TextField';
import {CustomizedTables} from './Table'
import { useHistory } from 'react-router-dom';
// import { useFormik } from 'formik';
import { useState } from 'react';
// import * as yup from 'yup';


// const formValidaionSchema= yup.object({})

export function PettyCash(){
  const [Trans_Date,setTrans_Date] = useState("");
  const [Voucher_No, setVoucher_No] = useState("");
  const [Description, setDescription] = useState(""); 
  const [Cost,setCost] = useState(""); 
  const [Vat,setVat ] = useState("");
  const [Total_Debit, setTotal_Debit] = useState("");
  const [Opening_Balance, setOpening_Balance] = useState("");
  const [Cheque_Received, setCheque_Received] = useState("");
  const [Total_Credit,setTotal_Credit] = useState("");

  const [trans, setTrans] = useState('')

 

const rows = [...trans];

  const addTrans = () => {

    console.log("adding");
    const newTrans = {
      Trans_Date,
      Voucher_No,
      Description,
      Cost,
      Vat,
      Total_Debit,
      Opening_Balance,
      Cheque_Received,
      Total_Credit,
    
    };
    console.log(newTrans);
    setTrans([ ...trans, newTrans]) 

   
  }

 

    // const formik = useFormik({
    //     initialValues: {
    //       Trans_Date:'', 
    //       Voucher_No:'',
    //       Description:'',
    //       Cost:'',
    //       Vat:'',
    //       Total_Debit:'',
    //       Opening_Balance:'',
    //       Cheque_Received:'',
    //       Total_Credit:'', 
      
    //     },
    //     // validate: validateForm,
    //     validationSchema: formValidaionSchema,
    //     onSubmit: (values) => {
    //       console.log("onSumbit", values)
    //     }
    //   });
    const [box, setBox] = useState("");
    const history = useHistory();
  const styles = {display: box};
  
    return(
        <section>

        
        <div>
            <h1 className='head'>PETTY CASH</h1>
        </div>
        <div className='button_group'>
            <div className='button'>
            
                <Button 
                    variant="contained" 
                    color="success" 
                    
                    onClick={() =>setBox((box ==="show") ? "none" : "show")} >
                      Entry</Button>
            </div>
            <div>
            <Button  style={{margin:"10px"}}  type="submit" variant="contained" onClick={addTrans}>Save Transaction</Button>
            <Button  style={{margin:"10px"}}variant="contained" color='error'>Delete Transaction</Button>
            <Button  style={{margin:"10px"}}variant="contained" onClick={()=> history.push("./report")}>Report</Button>
            </div>
        </div>

        <div className='textbox ' style={styles}>
                <TextField
                
                name="Trans_Date"
                onChange={(event) => setTrans_Date(event.target.value)}
                id="Trans_Date"
                label="Trans_Date"
                />

                <TextField
                
                 name="Voucher_No"
                 onChange={(event) => setVoucher_No(event.target.value)}
                id="Voucher_No."
                label="Voucher No."
                />
                <TextField
                
                 name="Description"
                 onChange={(event) => setDescription(event.target.value)}
                id="outlined-Description"
                label="Description"
                />
                <TextField
                
                 name="Cost"
                 onChange={(event) => setCost(event.target.value)}
                id="outlined-Cost"
                label="Cost"
                />
                <TextField
                
                 name="Vat"
                 onChange={(event) => setVat(event.target.value)}
                id="outlined-Vat"
                label="Vat @5%"
                />
                <TextField
                
                 name="Total_Debit"
                 onChange={(event) => setTotal_Debit(event.target.value)}
                id="outlined-name"
                label="Total Debit"
                />
                <TextField
                
                 name="Opening_Balance"
                 onChange={(event) => setOpening_Balance(event.target.value)}
                id="outlined-Opening Balance"
                label="Opening Balance"
                />
                <TextField
                
                 name="Cheque_Received"
                 onChange={(event) => setCheque_Received(event.target.value)}
                id="outlined-Cheque Received"
                label="Cheque Received"
                />
                <TextField
                
                 name="Total_Credit"
                 onChange={(event) => setTotal_Credit(event.target.value)}
                id="outlined-Total Credit"
                label="Total Credit"
                />

        </div>
        <div>
       <CustomizedTables rows={rows}/>
        </div>
        
        </section>
       
    );
}

export function createData(trans) {
  return(trans);
  
}