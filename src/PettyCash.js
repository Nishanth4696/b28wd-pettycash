import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {CustomizedTables} from './Table'


export function PettyCash(){
    return(
        <section>

        
        <div>
            <h1 className='head'>PETTY CASH</h1>
        </div>
        <div className='button_group'>
            <div classname='button'>
                <Button   variant="contained" color="success">Hide Entry</Button>
            </div>
            <div>
            <Button  style={{margin:"10px"}} variant="contained">Save Transaction</Button>
            <Button  style={{margin:"10px"}}variant="contained" color='error'>Delete Transaction</Button>
            <Button  style={{margin:"10px"}}variant="contained">Report</Button>
            </div>
        </div>

        <div className='textbox'>
                <TextField
                id="outlined-Trans_Date"
                label="Trans_Date"
                />
                <TextField
                id="outlined-Voucher No."
                label="Voucher No."
                />
                <TextField
                id="outlined-Description"
                label="Description"
                />
                <TextField
                id="outlined-Cost"
                label="Cost"
                />
                <TextField
                id="outlined-Vat @5%"
                label="Vat @5%"
                />
                <TextField
                id="outlined-name"
                label="Total Debit"
                />
                <TextField
                id="outlined-Opening Balance"
                label="Opening Balance"
                />
                <TextField
                id="outlined-Cheque Received"
                label="Cheque Received"
                />
                <TextField
                id="outlined-Total Credit"
                label="Total Credit"
                />

        </div>
        <div>
       <CustomizedTables />
        </div>
        
        </section>
       
    );
}

