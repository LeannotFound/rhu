import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, TextField, Select, MenuItem, FormControlLabel, Checkbox, FormControl } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import citiesData from './city.json'
import barangaysData from './barangay.json'
import provincesData from './province.json'
import {FilledInput} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function FamilyDetails() {


    const [error, setError] = React.useState({});



    //handle Changes-----


    const [checked, setChecked] = React.useState(false);
    const [patientFname, setPatientFname] = React.useState('');
    const [patientLname, setPatientLname] = React.useState('');
    const [patientMname, setPatientMname] = React.useState('');
    const [extension, setExtension] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [province1, setProvince1] = React.useState('');
    const [province2, setProvince2] = React.useState('');
    const [city1, setCity1] = React.useState('');
    const [city2, setCity2] = React.useState('');
    const [barangay1, setBarangay1] = React.useState('');
    const [barangay2, setBarangay2] = React.useState('');
    const [civilstatus, setCivilStatus] = React.useState('');
    const [bloodtype, setBloodType] = React.useState('');
    const [nationality, setNationality] = React.useState('');
    const [religion, setReligion] = React.useState('');
    const [occupation, setOccupation] = React.useState('');
    const [cpnumber, setCpnumber] = React.useState('');
    const [fblink, setFblink] = React.useState('');


    const handleChange = (setter) => (event) => {
        setter(event.target.value);
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

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


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

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box padding={2} backgroundColor='primary.main'>
                        <Typography color='white'>
                            II. FAMILY COMPONENTS
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} mt={2}>
                    <Box>
                        <Typography> <Box component="span" fontWeight='bold'>12. Name of your spouse -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Please indicate the name of your spouse correclty.</Box></Typography>
                    </Box>
                </Grid>
                <Grid item xs={3} mt={2}>
                    <TextField name="spouseLname" value={patientLname}
                        fullWidth
                        size='small'
                        label="Lastname (Apelyido)"
                        variant="outlined"
                  
                        onChange={handleChange(setPatientLname)}
                        required
                        error={!!error.patientLname}
                        helperText={error.patientLname}
                    />
                </Grid>
                <Grid item xs={3} mt={2}>
                    <TextField name="spouseFname"
                        fullWidth
                        value={patientFname}
                        size='small'
                        label="Firstname (Pangalan)"
                        variant="outlined"
                        onChange={handleChange(setPatientFname)}
                        required
                        error={!!error.patientFname}
                        helperText={error.patientFname}

                    />
                </Grid>
                <Grid item xs={3} mt={2}>

                    <TextField name="spouseMname"
                        fullWidth
                        size='small'
                        value={patientMname}
                        label="Middlename (Gitnang Pangalan)"
                        variant="outlined"
                  
                        onChange={handleChange(setPatientMname)}
                        required
                    />
                </Grid>
                <Grid item xs={1.5} mt={2} >

                    <FormControlLabel
                    name='spouseExtensioncheck'
                        value="top"
                        size='small'
                        control={<Checkbox />}
                        onChange={handleChange(setChecked)}
                        checked={checked}
                        label="I have Extension"
                        labelPlacement="end"
                        inputProps={{ "aria-label": "primary checkbox" }}
                    />
                </Grid>
                <Grid item xs={1.5} mt={2}>
                    <Select
                        fullWidth
                        labelId="extension"
                        name="spouseExtension"
                        size='small'
                        value={extension}
                        onChange={handleChange(setExtension)}
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
                <Grid item xs={3} mt={2} direction='row' textAlign='left' justifyContent='center'>
                    <Box >
                        <TextField name="spouseCpnumber" label="Cellphone number" variant="outlined"
                            labelId="cpnumber"
                            fullWidth
                            size='small'
                            type='number'
                            value={cpnumber}
                            onChange={handleChange(setCpnumber)}
                            required
                            error={!!error.cpnumber}
                            helperText={error.cpnumber}
                        />
                    </Box>
                </Grid>
                <Grid item xs={3} mt={2} direction='row' textAlign='left' justifyContent='center'>
                    <Box sx={{ minWidth: 120 }}>
                        <TextField name="spouseOccupation" label="Occupation" variant="outlined"
                            fullWidth
                            size='small'
                            labelId="spouseOccupation" 
                            value={occupation}
                            onChange={handleChange(setOccupation)} />
                    </Box>
                </Grid>
              
                <Grid item xs={3} mt={2} direction='row' textAlign='left' justifyContent='center'>
                    <Box sx={{ minWidth: 120 }}>
                        <TextField name="spouseEmployedBy" label="Employed by:" variant="outlined"
                            fullWidth
                            size='small'
                            labelId="spouseEmployedBy"
                            value={occupation}
                            onChange={handleChange(setOccupation)} />
                    </Box>
                </Grid>


                <Grid item xs={3} mt={2} direction='row' textAlign='left' justifyContent='center'>
                    <Box sx={{ minWidth: 120 }}>

                        <FormControl sx={{width:'100%' }} variant="outlined">
                            <FilledInput
                                id="salary"
                                name="salary"
                                size='small'
                                endAdornment={<InputAdornment position="end">₱</InputAdornment>}
                                aria-describedby="salary"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                            <FormHelperText id="salaryhelper">Salary</FormHelperText>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={12} mt={2}>
                    <Box>
                        <Typography> <Box component="span" fontWeight='bold'>13. Marriage Details:</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Indicate the Marriage details correctly (select date of marriage, then Select the marriage address  ).</Box></Typography>
                    </Box>
                </Grid>

                <Grid item xs={2} mt={2} direction='row'>
                    <FormControl required>
                        <LocalizationProvider dateAdapter={AdapterDayjs} required>
                            <DatePicker
                                label="Date of Marriage"
                                name='dateofmarriage'
                                size ='small'
                                value={selectedDate}
                                style={{ width: ' 100%' }}
                                onChange={handleDateChange}
                                renderInput={(params) =>
                                    <TextField  {...params} required fullWidth    size='small'
                                    />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
              
                <Grid item xs={3} mt={2} >
                    <Autocomplete
                        options={provincesData}
                        getOptionLabel={(option) => option.province_name}
                        name='marriageprovince'
                        size ='small'
                        style={{ width: '100%' }}
                        onChange={handleProvinceChange}
                        renderInput={(params) => <TextField {...params} label="Province" required variant="outlined"
                        size='small'/>}
                    />
                </Grid>
                <Grid item xs={3} mt={2} >
                    <Autocomplete
                        options={filteredCities}
                        getOptionLabel={(option) => option.city_name}
                        name='marriagecity'
                        size ='small'
                        style={{ width: '100%' }}
                        onChange={handleCityChange}
                        renderInput={(params) => <TextField {...params} label="City" required variant="outlined"    size='small'/>}
                    />
                </Grid>
                <Grid item xs={4} mt={2}>

                    <Autocomplete
                        options={filteredBarangays}
                        name='marriagebarangay'
                        getOptionLabel={(option) => option.brgy_name}
                        style={{ width: '100%' }}
                        onChange={handleBarangayChange}
                        renderInput={(params) => <TextField {...params} label="Barangay" required variant="outlined"     size='small'/>}
                    />
                </Grid>
                <Grid item xs={12} mt={2}>
                    <Box>
                        <Typography> <Box component="span" fontWeight='bold'>14. Name of your Father -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Please indicate the name of your father correclty.</Box></Typography>
                    </Box>
                </Grid>
                <Grid item xs={3} mt={2}>
                    <TextField name="fatherLname" value={patientLname}
                        fullWidth
                        label="Lastname (Apelyido)"
                        variant="outlined"
                        size='small'
                        onChange={handleChange(setPatientLname)}
                        required
                        error={!!error.patientLname}
                        helperText={error.patientLname}
                    />
                </Grid>
                <Grid item xs={3} mt={2}>
                    <TextField name="fatherFname"
                        fullWidth
                        value={patientFname}
                        label="Firstname (Pangalan)"
                        variant="outlined" 
                        size='small'
                        onChange={handleChange(setPatientFname)}
                        required
                        error={!!error.patientFname}
                        helperText={error.patientFname}

                    />
                </Grid>
                <Grid item xs={3} mt={2}>

                    <TextField name="fatherMname"
                        fullWidth
                        value={patientMname}
                        label="Middlename (Gitnang Pangalan)"
                        variant="outlined"
                        size='small'
                        onChange={handleChange(setPatientMname)}
                        required
                    />
                </Grid>
                <Grid item xs={1.5} mt={2} >

                    <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        onChange={handleChange(setChecked)}
                        checked={checked}
                        size='small'
                        label="I have Extension"
                        labelPlacement="end"
                        inputProps={{ "aria-label": "primary checkbox" }}
                    />
                </Grid>
                <Grid item xs={1.5} mt={2}>
                    <Select
                        fullWidth
                        labelId="extension"
                        name="fatherextension"
                        size='small'
                        value={extension}
                        onChange={handleChange(setExtension)}
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
                <Grid item xs={12} mt={2}>
                    <Box>
                        <Typography> <Box component="span" fontWeight='bold'>15. Name of your Mother -</Box><Box component="span" fontWeight='light' fontStyle={'italic'}> Please indicate the name of your mother correclty.</Box></Typography>
                    </Box>
                </Grid>
                <Grid item xs={3} mt={2}>
                    <TextField name="motherLname" value={patientLname}
                        fullWidth
                        label="Lastname (Apelyido)"
                        variant="outlined"
                        size='small'
                        onChange={handleChange(setPatientLname)}
                        required
                        error={!!error.patientLname}
                        helperText={error.patientLname}
                    />
                </Grid>
                <Grid item xs={3} mt={2}>
                    <TextField name="motherFname"
                        fullWidth
                        value={patientFname}
                        label="Firstname (Pangalan)"
                        variant="outlined"  
                          size='small'
                        onChange={handleChange(setPatientFname)}
                        required
                        error={!!error.patientFname}
                        helperText={error.patientFname}

                    />
                </Grid>
                <Grid item xs={3} mt={2}>

                    <TextField name="motherMname"
                        fullWidth
                        value={patientMname}
                        label="Middlename (Gitnang Pangalan)"
                        variant="outlined"
                        size='small'
                        onChange={handleChange(setPatientMname)}
                        required
                    />
                </Grid>
                <Grid item xs={1.5} mt={2} >

                    <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        onChange={handleChange(setChecked)}
                        checked={checked}
                        label="I have Extension"
                        labelPlacement="end"
                        inputProps={{ "aria-label": "primary checkbox" }}
                    />
                </Grid>
                <Grid item xs={1.5} mt={2}>
                    <Select
                        fullWidth
                        labelId="extension"
                        name="motherextension"
                        size='small'
                        value={extension}
                        onChange={handleChange(setExtension)}
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
            </Grid>
        </Box>




    )
}
