import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import TextField from '@mui/material/TextField';
import Header from "../header/header";

import {
  selectCount,
} from './registrationSlice';
import styles from './Registration.module.css';

export function Registration() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  const options = ['Insurance1', 'Insurance2'];

  return (
    <div className='regContainer'>
      <Header />
      <div className={styles.formContainer}>
        <Container maxWidth="sm">
          <div>
            <h4 className={styles.title}>Member Information</h4>
            <span className={styles.titleContent}>Enter the information as it is on your insurance card(s) to see if your plan is eligible. </span>
          </div>
          <div>
            <span className={styles.formlabel}>My Insurance Company</span>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
          </div>
          <div>
            <h3 className={styles.formCheckBoxLable}>Primary Insurance Holder Information</h3>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="I am not the primary insurance policy holder. I am a dependent." />
            </FormGroup>
          </div>
          <FormControl fullWidth>
              <span className={styles.titleContent}>Insurance ID Number </span>
              <TextField id="fullWidth" />
          </FormControl>
          <div>
          <FormControl className={styles.FormControl}>
              <span className={styles.titleContent}>First Name </span>
              <TextField id="fullWidth" />
          </FormControl>
          <FormControl>
              <span className={styles.titleContent}>Last Name </span>
              <TextField id="fullWidth" />
          </FormControl>
          </div>
          <FormControl className={styles.FormControl}>
              <span className={styles.titleContent}>Preferred Name </span>
              <TextField id="fullWidth" />
              <span className={styles.titleContentSuggestion}>If different from your firstname</span>
          </FormControl>
          <FormControl>
              <span className={styles.titleContent}>Date of Birth </span>
              <TextField id="fullWidth" />
              <span className={styles.titleContentSuggestion}>Type (MM-DD-YYYY) or use calendar icon to select.</span>
          </FormControl>
          <FormControl fullWidth>
          <span className={styles.titleContent}>Gender</span>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Male"
          >
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
              </Select>
          </FormControl>
          <FormControl>
              <span className={styles.titleContent}>Please Self-describe </span>
              <TextField id="fullWidth" />
          </FormControl>
          </Container>
      </div>
    </div>
  );
}
