import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './PersonaDetails.css'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import citiesData from './city.json'
import barangaysData from './barangay.json'
import provincesData from './province.json'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';




//code for asterisk to be red
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#db3131',
        },
      },
    },
  },
});


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function PersonalDetails() {




//handle Changes-----
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [extension, setExtension] = React.useState('');

  const handleChange1 = (event) => {
    setExtension(event.target.value);
  };

  const [civilstatus, setCivilStatus] = React.useState('');

  const handleChange2 = (event) => {
    setCivilStatus(event.target.value);
  };

  const [bloodtype, setBloodType] = React.useState('');

  const handleChange3 = (event) => {
    setBloodType(event.target.value);
  };
  const [nationality, setNationality] = React.useState('');

  const handleChange4 = (event) => {
    setNationality(event.target.value);
  };
  
  const [religion, setReligion] = React.useState('');

  const handleChange5 = (event) => {
    setReligion(event.target.value);
  };

  const [occupation, setOccupation] = React.useState('');

  const handleChange6 = (event) => {
    setOccupation(event.target.value);
  };

  const [cpnumber, setCpnumber] = React.useState('');

  const handleChange8 = (event) => {
    setCpnumber(event.target.value);
  };

  const [fblink, setFblink] = React.useState('');

  const handleChange9 = (event) => {
    setFblink(event.target.value);
  };

  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [barangay, setBarangay] = useState('');
  
  useEffect(() => {
    // Reset city and barangay when province changes
    setCity('');
    setBarangay('');
  }, [province]);

  useEffect(() => {
    // Reset barangay when city changes
    setBarangay('');
  }, [city]);


  //handle different autocomplete and set to clear
  
  const handleProvinceChange = (event, value) => {
    setProvince(value ? value : '');
  };
  
  const handleCityChange = (event, value) => {
    setCity(value ? value : '');
  };
  
  const handleBarangayChange = (event, value) => {
    setBarangay(value ? value : '');
  };
  
  //filter province to equal in barangays and cities
  const filteredCities = citiesData.filter((city) => city.province_code === province.province_code);
  const filteredBarangays = barangaysData.filter((barangay) => barangay.city_code === city.city_code);
  
  const [value, setValue] = React.useState(dayjs('2022-04-17'));



  //Calculate Age
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return '';

    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };


  return (
<ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
       <Box  padding={2} backgroundColor='primary.main'>
          <Typography color='white'>
            I. PERSONAL IDENTIFIERS
          </Typography>
       </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography> <Box component="span" fontWeight='bold'>1. Name -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Please enter your name correctly.</Box></Typography>
        </Box>
      </Grid>
      <Grid item xs={3} mt={2}>
      <TextField name="patientLname" label="Lastname (Apelyido)" variant="outlined"  size='large' required/>
      </Grid>
      <Grid item xs={3} mt={2}>
      <TextField name="patientFname" label="Firstname (Pangalan)" variant="outlined"  size='large' required/>
      </Grid>
      <Grid item xs={3} mt={2}>
      
      <TextField name="patientMname" label="Middlename (Gitnang Pangalan)" variant="outlined"  size='large' required/>
      </Grid>
      <Grid item xs={1.5} mt={2} >

      <FormControlLabel
          value="top"
          control={<Checkbox />}
          onChange={handleChange}
          checked={checked}
          label="I have Extension"
          labelPlacement="end"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
       </Grid>
       <Grid item xs={1.5} mt={2}>
            <Select
          labelId="extension"
          name="extension"
          fullWidth
          value={extension}
          onChange={handleChange1}
          disabled={!checked}>

          <MenuItem value='JR'>JR</MenuItem>
          <MenuItem value='SR'>SR</MenuItem>
          <MenuItem value='I'>I</MenuItem>
          <MenuItem value='II'>II</MenuItem>
          <MenuItem value='III'>III</MenuItem>
          <MenuItem value='IV'>IV</MenuItem>
          <MenuItem value='V'>V</MenuItem>
          <MenuItem value='VI'>VI</MenuItem>
        </Select>
        </Grid>

        <Grid item xs={12}mt={2}>
        <Box>
          <Typography> <Box component="span" fontWeight='bold'>2. Address -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Select province first, then city and finally your barangay.</Box></Typography>
        </Box>
      </Grid>
  <Grid item xs={4}mt={2} >
  <Autocomplete
        options={provincesData}
        getOptionLabel={(option) => option.province_name}
        name='province'
        style={{ width: '100%' }}
        onChange={handleProvinceChange}
        renderInput={(params) => <TextField {...params} label="Province"  required variant="outlined" />}
      />
</Grid>
<Grid item xs={4}mt={2} >
      <Autocomplete
        options={filteredCities}
        getOptionLabel={(option) => option.city_name}
        name='city'
        style={{ width: '100%' }}
        onChange={handleCityChange}
        renderInput={(params) => <TextField {...params} label="City"  required variant="outlined" />}
      />
</Grid>
<Grid item xs={4}mt={2}>

      <Autocomplete 
        options={filteredBarangays}
        name='barangay'
        getOptionLabel={(option) => option.brgy_name}
        style={{ width: '100%' }}
        onChange={handleBarangayChange}
        renderInput={(params) => <TextField {...params} label="Barangay"  required variant="outlined" />}
      />
</Grid>

<Grid item xs={12}mt={2}>
        <Box>
          <Typography> <Box component="span" fontWeight='bold'>3. Birth Date -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Indicate your birth date correctly</Box></Typography>
        </Box>
      </Grid>
<Grid item xs={3}mt={2} direction='row'>
<FormControl required>
      <LocalizationProvider dateAdapter={AdapterDayjs} required>
        <DatePicker
          label="Date of birth"
          name = 'dateofbrith'
          value={selectedDate}
          style ={{width :' 100%'}}
          onChange={handleDateChange}
          renderInput={(params) => <TextField  {...params} required/>}
        />
      </LocalizationProvider>
 </FormControl>
</Grid>
<Grid item xs={2}mt={2} direction='row' textAlign='left' justifyContent='center'>
  
      <Typography>Your are <Box component="span" fontSize= '18px'fontWeight='bold' color={'primary.main'}><br/>{calculateAge(selectedDate)} </Box> years old</Typography>
</Grid>
<Grid item xs={3}mt={2} direction='row' textAlign='left' justifyContent='center'>
  
<FormControl>
      <FormLabel name="demo-radio-buttons-group-label" sx ={{ fontWeight:'bold'}}>4.Gender</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
   
</Grid>
<Grid item xs={4}mt={2} direction='row' textAlign='left' justifyContent='center'>

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel name="civilstatus"> 5. Civil Status</InputLabel>
        <Select
          labelId="civilstatus"
          name="civilstatus"
          value={civilstatus}
          label="5. Civil Status"
          onChange={handleChange2}
        >
            <MenuItem value='Single'>Single</MenuItem>
          <MenuItem value='Married'>Married</MenuItem>
          <MenuItem value='Widowed'>Widowed</MenuItem>
          <MenuItem value='Legally Separated'>Legally Separated</MenuItem>
        </Select>
      </FormControl>
    </Box>

</Grid>

<Grid item xs={2.3}mt={2} direction='row' textAlign='left' justifyContent='center'>

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel name="bloodtype">6. Blood Type</InputLabel>
        <Select
          labelId="bloodtype"
          name="bloodtype"
          value={bloodtype}
          label="6. Blood Type"
          onChange={handleChange3}
        >
         <MenuItem value='A+'>A+</MenuItem>
          <MenuItem value='A-'>A-</MenuItem>
          <MenuItem value='B-'>B-</MenuItem>
          <MenuItem value='AB+'>AB+</MenuItem>
 	         <MenuItem value='AB-'>AB-</MenuItem>
          <MenuItem value='O+'>O+</MenuItem>
          <MenuItem value='O-'>O-</MenuItem>
        </Select>
      </FormControl>
    </Box>

</Grid> 
<Grid item xs={5}mt={2} direction='row' textAlign='left' justifyContent='center'>

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel name="religion">7. Religion</InputLabel>
        <Select
          labelId="religion"
          name="religion"
          value={religion}
          label="7. Religion"
          onChange={handleChange5}
        >
             <MenuItem value='Roman Catholic'>Roman Catholic</MenuItem>
          <MenuItem value='Islam'>Islam</MenuItem>
          <MenuItem value='Iglesia ni Cristo'>Iglesia ni Cristo</MenuItem>
          <MenuItem value='Philippine Independent Church'>Philippine Independent Church</MenuItem>
 	         <MenuItem value='Seventh-day Adventist-'>Seventh-day Adventist-</MenuItem>
          <MenuItem value='Bible Baptist Church'>Bible Baptist Church</MenuItem>
          <MenuItem value='United Church of Christ in the Philippines'>United Church of Christ in the Philippines</MenuItem>
          <MenuItem value="Jehovah's Witnesses">Jehovah's Witnesses</MenuItem>
          <MenuItem value='Church of Christ'>Church of Christ</MenuItem>
          <MenuItem value='None'>None</MenuItem>
        </Select>
      </FormControl>
    </Box>

</Grid>
<Grid item xs={2.5}mt={2} direction='row' textAlign='left' justifyContent='center'>

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel name="nationality">8. Nationality</InputLabel>
        <Select
          labelId="nationality"
          name="nationality"
          value={nationality}
          label="8. Nationality"
          onChange={handleChange4}
        >
  
        </Select>
      </FormControl>
    </Box>

</Grid> 
<Grid item xs={2.2}mt={2} direction='row' textAlign='left' justifyContent='center'>

<Box sx={{ minWidth: 120 }}>
      
   
    <TextField name="occupation" label="9. Occupation" variant="outlined" 
       labelId="occupation"
       value={occupation}
       onChange={handleChange6}/>
  
    </Box>

</Grid> 
<Grid item xs={12}mt={2}>
        <Box>
          <Typography> <Box component="span" fontWeight='bold'>10. Contact Information -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Please provide your contact number accurately.</Box></Typography>
        </Box>
</Grid>
<Grid item xs={6}mt={2} direction='row' textAlign='left' justifyContent='center'>

<Box >
      
   
    <TextField name="cpnumber" label="Cellphone number" variant="outlined" 
       labelId="cpnumber"
       fullWidth
       type='number'
       value={cpnumber}
       onChange={handleChange8}
       required/>


  
    </Box>

</Grid> 
<Grid item xs={6}mt={2} direction='row' textAlign='left' justifyContent='center'>

<Box >
      
   
    <TextField name="fblink" label="Facebook Messenger" variant="outlined" 
       labelId="fblink"
       fullWidth
       value={fblink}
       onChange={handleChange9}/>
  
    </Box>
</Grid> 

<Grid item xs={12}mt={2}>
        <Box>
          <Typography> <Box component="span" fontWeight='bold'>11. Birth Place -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Please indicate your place of birth correclty.</Box></Typography>
        </Box>
</Grid>


<Grid item xs={4}mt={2} >
  <Autocomplete
        options={provincesData}
        name='province2'
        getOptionLabel={(option) => option.province_name}
        style={{ width: '100%' }}
        onChange={handleProvinceChange}
        renderInput={(params) => <TextField {...params} label="Province"  required variant="outlined" />}
      />
</Grid>
<Grid item xs={4}mt={2} >
      <Autocomplete
        options={filteredCities}
        name='city2'
        getOptionLabel={(option) => option.city_name}
        style={{ width: '100%' }}
        onChange={handleCityChange}
        renderInput={(params) => <TextField {...params} label="City"  required variant="outlined" />}
      />
</Grid>
<Grid item xs={4}mt={2}>

      <Autocomplete 
        options={filteredBarangays}
        name='barangay2'
        getOptionLabel={(option) => option.brgy_name}
        style={{ width: '100%' }}
        onChange={handleBarangayChange}
        renderInput={(params) => <TextField {...params} label="Barangay"  required variant="outlined" />}
      />
</Grid>

    </Grid>
  </Box>
   </ThemeProvider>
  )
}
