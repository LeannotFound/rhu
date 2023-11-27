import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, FormControlLabel, TextField } from '@mui/material';



const diseases = ['Tuberculosis', 'Heart Diseases', 'Hypertension', 'Bronchial Asthma', 'Urinary Tract Infection', 'Parasitism', 'Goiter', 'Anemia (pallor)'];



export default function OtherHealthConditions() {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);

const handleChange = (event) => {
  setChecked(event.target.checked);
};
const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  
const behaviors = ['Smoking', 'Alcohol Intake', 'Using of Illegal Drugs', 'Violence from Partner or Spouse', 'Multiple Partners'];

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box padding={2} backgroundColor='primary.main'>
                    <Typography color='white'>
                        IV. OTHER HEALTH RELATED CONDITIONS
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography> <Box component="span" fontWeight='bold'>17. Other health conditions -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Please check the checkbox if applied.</Box></Typography>
                </Box>
            </Grid>
          <Grid item xs={12}>
          <Box sx={{ border: '1px solid grey' }}>
          <TableContainer>
      <Table size="small" >
        <TableHead sx={{ '& .MuiTableCell-head': { color: 'white' } , backgroundColor : 'primary.main'}}>
          <TableRow>
            <TableCell>Diseases</TableCell>
            <TableCell>Personal</TableCell>
            <TableCell>Family</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {diseases.map((disease, index) => (
            <TableRow key={index}>
              <TableCell>{disease}</TableCell>
              <TableCell><Checkbox /></TableCell>
              <TableCell><Checkbox /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Box>
          </Grid>
            <Grid item xs={12}>
            <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label="Genetical Track Infections :"
      />
      {checked && <TextField label="Specify" variant='standard' />}
      </Grid>
            <Grid item xs={12}>
      <FormControlLabel
        control={<Checkbox checked={checked1} onChange={handleChange1} />}
        label="Other Infectious Diseases :"
      />
      {checked1 && <TextField label="Specify" variant='standard'/>}
            </Grid>

            <Grid item xs={12}>
                <Box>
                    <Typography> <Box component="span" fontWeight='bold'>18. High risk behavior (mga gawing mapanganib) -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Please check the checkbox if applied.</Box></Typography>
                </Box>
            </Grid>
        <Grid item xs={12}>
        <Box sx={{ border: '1px solid grey' }}>
        <TableContainer>
      <Table size='small'>
      <TableHead sx={{ '& .MuiTableCell-head': { color: 'white' } , backgroundColor : 'primary.main'}}>
          <TableRow>
            <TableCell>High Risk Behavior</TableCell>
            <TableCell>Personal</TableCell>
            <TableCell>Family</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {behaviors.map((behavior, index) => (
            <TableRow key={index}>
              <TableCell>{behavior}</TableCell>
              <TableCell><Checkbox /></TableCell>
              <TableCell><Checkbox /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
        </Grid>
    </Grid>
    </Box>

  )
}
