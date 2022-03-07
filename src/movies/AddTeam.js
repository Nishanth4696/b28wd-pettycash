import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from 'yup';

const formValidaionSchema= yup.object({
  email:yup.string().min(5).required(),
  name:yup.string().min(5).max(30).required(),
  poster:yup.string().required(),
  summary:yup.string().min(5).max(50).required(),
  brief:yup.string().min(5).max(350).required(),
  History:yup.string().min(5).max(350).required(),
  player:yup.string().min(5).max(350).required(),
  homeground:yup.string().min(5).max(350).required(),
  trailer:yup.string().required()
})

export function AddTeam() {

 
  const [name] = useState("");
  const [poster] = useState("");
  const [summary] = useState(""); 
  const [brief] = useState(""); 
  const [History] = useState("");
  const [player] = useState("");
  const [homeground] = useState("");
  const [trailer] = useState("");
 
 
  const history = useHistory();



  const addTeam = () => {

    console.log("adding");
    const newTeam = {
      name,
      poster,
      summary,
      brief,
      History,
      player,
      homeground,
      trailer,
    
    };
    console.log(newTeam);
    // setMovies([...Movies, newMovie]); 
      fetch("https://620f1911ec8b2ee283336fc9.mockapi.io/IPL",
      {
        method:"POST",
        body:JSON.stringify(newTeam),
        headers:{'Content-Type':'application/json'},
      })
      .then(() => history.push("/iplteams"))
  };

  const formik = useFormik({
    initialValues: {
      name:'', 
      poster:'',
      summary:'',
      brief:'',
      History:'',
      player:'',
      homeground:'',
      trailer:'', 
  
    },
    // validate: validateForm,
    validationSchema: formValidaionSchema,
    onSubmit: (values) => {
      console.log("onSumbit", values)
    }
  });
  return (

    <form className='add-team-form' onSubmit={formik.handleSubmit}>
     <TextField
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the name'
        id="standard-basic"
        variant="standard"
         />
        {formik.errors.name && formik.touched.name && formik.errors.name}

        <TextField
        name="poster"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the poster'
        id="standard-basic"
        variant="standard" />
        {formik.errors.poster && formik.touched.poster && formik.errors.poster}

        <TextField
        name="summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the summary'
        id="standard-basic"
        variant="standard" />
        {formik.errors.summary && formik.touched.summary && formik.errors.summary}


        <TextField
        name="brief"
        value={formik.values.brief}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the brief'
        id="standard-basic"
        variant="standard" />
        {formik.errors.brief && formik.touched.brief && formik.errors.brief}
     

        <TextField
        name="History"
        value={formik.values.History}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the History'
        id="standard-basic"
        variant="standard" />
        {formik.errors.History && formik.touched.History&& formik.errors.History}


        <TextField
        name="player"
        value={formik.values.player}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the player'
        id="standard-basic"
        variant="standard" />
        {formik.errors.player && formik.touched.player && formik.errors.player}

       
        <TextField
        name="homeground"
        value={formik.values.homeground}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the homeground'
        id="standard-basic"
        variant="standard" />
        {formik.errors.homeground && formik.touched.homeground && formik.errors.homeground}


        <TextField
        name="trailer"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the trailer'
        id="standard-basic"
        variant="standard" />
        {formik.errors.trailer && formik.touched.trailer && formik.errors.trailer}


          <Button onClick={addTeam} variant="outlined" type="sumbit">AddMovie</Button>

    </form>

  );
}

