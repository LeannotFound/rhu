import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, TextField, Select, MenuItem, FormControlLabel, Checkbox, FormControl, Button, InputLabel } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function PregnancyHistory() {
  const [rows, setRows] = useState([]);

  const handleChange = (index, field) => (event) => {
    setRows((prevRows) =>
      prevRows.map((row, i) => (i === index ? { ...row, [field]: event.target.value } : row))
    );
  };

  const handleDateChange = (index) => (date) => {
    setRows((prevRows) =>
      prevRows.map((row, i) => (i === index ? { ...row, dateOfDelivery: date } : row))
    );
  };

  const addRow = () => {
    setRows((prevRows) => [...prevRows, { pregnancyNumber: prevRows.length + 1 }]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ padding: 2, backgroundColor: 'primary.main' }}>
            <Typography variant="h6" color="white">
              III. PREGNANCY HISTORY
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Box>
            <Typography>
              <Box component="span" fontWeight="bold">
                16. Pregnancy history-
              </Box>
              <Box component="span" fontWeight="light" fontStyle={'italic'}>
                {' '}
               Add row and then fill up the field.
              </Box>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>

        <Button variant="contained" color="primary" margin={5} onClick={addRow} >
            Add Row
          </Button>
        <Box sx={{ border: '1px solid grey' }}>
          
          <TableContainer>
            <Table sx={{ border: '1px solid grey' }}  size="small" >
              <TableHead>
                <TableRow>
                  <TableCell>Pregnancy Number</TableCell>
                  <TableCell>Date of Delivery</TableCell>
                  <TableCell>Type of Delivery</TableCell>
                  <TableCell>Birth Outcome</TableCell>
                  <TableCell>Name of Child Delivered</TableCell>
                  <TableCell>Pregnancy Related Conditions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.pregnancyNumber}</TableCell>
                    <TableCell>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          disableToolbar
                          variant="standard"
                          margin="normal"
                          size="small" 
                          id={`dateofdelivery${index}`}
                          label="Date of Delivery"
                          value={row.dateOfDelivery}
                          onChange={handleDateChange(index)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </TableCell>
                    <TableCell>
                    <FormControl fullWidth>
                     <InputLabel id="typeofdelivery"></InputLabel>
                      <Select
                      variant='standard'
                        value={row.typeOfDelivery}
                        onChange={handleChange(index, 'typeOfDelivery')}
                        label=""
                      >
                        <MenuItem value={'Normal'}>Normal</MenuItem>
                        <MenuItem value={'Cesarean'}>Cesarean</MenuItem>
                      </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField
                      variant='standard'
                        value={row.birthOutcome}
                        onChange={handleChange(index, 'birthOutcome')}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                      variant='standard'
                        value={row.nameOfChildDelivered}
                        onChange={handleChange(index, 'nameOfChildDelivered')}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                      variant='standard'
                        value={row.pregnancyRelatedConditions}
                        onChange={handleChange(index, 'pregnancyRelatedConditions')}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>

        </Grid>
        
      </Grid>
    </Box>
  );
}
