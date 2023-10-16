'use client'

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <img src={require('./hape.jpg')} alt='hape'/>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color: 'white'}}>Apakah Smartphone Ini Direkomendasikan</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="iya" control={<Radio />} label="Iya" />
        <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        <Button variant="outlined"  onClick={() => {alert('ulasan telah diberikan');}}>Submit</Button>
      </RadioGroup>
    </FormControl>
  );
}