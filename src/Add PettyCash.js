import Button from '@mui/material/Button';
import './App.css';
import TextField from '@mui/material/TextField';
import { API_URL } from './global-constants.js';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const formValidaionSchema= yup.object({
  Trans_Date:yup.date().required(),
  Voucher_No:yup.string().required(),
  Description:yup.string().min(10).required(),
  Cost:yup.string().required(),
  Vat:yup.string(),
  Total_Debit:yup.string().required(),
  Opening_Balance:yup.string().required(),
  Cheque_Received:yup.string().required(),
  Total_Credit:yup.string().required()
})

export function AddPettyCash(){
  

  
  const formik = useFormik({
    initialValues: {
      Trans_Date:'', 
      Voucher_No:'',
      Description:'',
      Cost:'',
      Vat:'',
      Total_Debit:'',
      Opening_Balance:'',
      Cheque_Received:'',
      Total_Credit:'', 
  
    },
    // validate: validateForm,
    validationSchema: formValidaionSchema,
    onSubmit: (newTrans) => {
      console.log("onSumbit", newTrans)
      addTrans(newTrans)
    }
  });
 



  const addTrans = (newTrans) => {

    console.log("adding");
   
    console.log(newTrans);
    fetch(`${API_URL}/pettycash`,
      {
        method:"POST",
        body:JSON.stringify(newTrans),
        headers:{'Content-Type':'application/json'},
      })
      .then(() => history.push('./pettycash'))
   
    
   
  }

  
 

    


    const [box, setBox] = useState("");
    const history = useHistory();
  const styles = {display: box, fontWeight:'bold'};

  const [isDisabled, setIsDisabled] = useState(true)
  const handleClick = () => {
    setIsDisabled(!isDisabled)
  };


  
  
    return(
        <section>

        
       
        <div className='button'>
            
                <Button 
                    variant="contained" 
                    color="success" 
                    
                    onClick={() =>setBox((box ==='none') ? 'block' : 'none')} >
                      {box === 'none'? 'show' : 'hide'} Entry</Button>
            </div>
       
   <div className='hide' style={styles} >
        <form className='textbox' onSubmit={formik.handleSubmit}>
       
        
        
              <TextField
                name="Trans_Date"
                value={formik.values.Trans_Date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="Trans_Date"
                label="Trans_Date"
                error={formik.errors.Trans_Date && formik.touched.Trans_Date}
                helperText={formik.errors.Trans_Date && formik.touched.Trans_Date && formik.errors.Trans_Date}
              />
                

              <TextField
                name="Voucher_No"
                value={formik.values.Voucher_No}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="Voucher_No."
                label="Voucher No."
                error={formik.errors.Voucher_No && formik.touched.Voucher_No}
                helperText={formik.errors.Voucher_No && formik.touched.Voucher_No && formik.errors.Voucher_No}
                />
                 
               
              <TextField                
                  name="Description"
                  value={formik.values.Description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-Description"
                  label="Description"
                  error={formik.errors.Description && formik.touched.Description}
                  helperText={formik.errors.Description && formik.touched.Description && formik.errors.Description}
              />
                

              <TextField                
                 name="Cost"
                 value={formik.values.Cost}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                id="outlined-Cost"
                label="Cost"
                error={formik.errors.Cost && formik.touched.Cost}
                helperText={formik.errors.Cost && formik.touched.Cost && formik.errors.Cost}
              />
                

              <div className='clicktax'>
                <TextField                
                  name="Vat"
                  value={formik.values.Vat}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-Vat"
                  label="Vat"
                  disabled={isDisabled}
                  error={formik.errors.Vat && formik.touched.Vat}
                  helperText={formik.errors.Vat && formik.touched.Vat && formik.errors.Vat}
                
              />
                
        
                <Button  
               
                type="button" onClick={handleClick}
                startIcon ={(isDisabled === false) ?< CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>   } >click for tax</Button>
                </div>

              <TextField                
                  name="Total_Debit"
                  value={formik.values.Total_Debit}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-name"
                  label="Total Debit"
                  error={formik.errors.Total_Debit && formik.touched.Total_Debit}
                  helperText={formik.errors.Total_Debit && formik.touched.Total_Debit && formik.errors.Total_Debit}
              />
                

              <TextField                
                  name="Opening_Balance"
                  value={formik.values.Opening_Balance}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-Opening Balance"
                  label="Opening Balance"
                  error={formik.errors.Opening_Balance && formik.touched.Opening_Balance}
                  helperText= {formik.errors.Opening_Balance && formik.touched.Opening_Balance && formik.errors.Opening_Balance}
              />
                

              <TextField                
                  name="Cheque_Received"
                  value={formik.values.Cheque_Received}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-Cheque Received"
                  label="Cheque Received"
                  error={formik.errors.Cheque_Received && formik.touched.Cheque_Received}
                  helperText={formik.errors.Cheque_Received && formik.touched.Cheque_Received && formik.errors.Cheque_Received}
              />
                

              <TextField                
                  name="Total_Credit"
                  value={formik.values.Total_Credit}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-Total Credit"
                  label="Total Credit"
                  error={formik.errors.Total_Credit && formik.touched.Total_Credit}
                  helperText={formik.errors.Total_Credit && formik.touched.Total_Credit && formik.errors.Total_Credit}
              />
                
                <div className='button_group'>
            
            <div>
                
                <Button  className='addbutton'  type="submit" variant="contained">Save Transaction</Button>
                <Button  style={{margin:"10px"}} variant="contained" color='error' onClick={()=> history.push("./report")}>Report</Button>
                </div>
            </div>
       
        </form>
        </div>
        
        
        </section>
       
    );
}

export function createData(trans) {
  return(trans);
  
}

