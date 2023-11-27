import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FamilyDetails from './FamilyDetails';
// import PersonalDetails from './PersonalDetails';
import PersonalDetails2 from './PersonalDetails2';
import PregnancyHistory from './PregnancyHistory';
import OtherHealthConditions from './OtherHealthConditions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PatientRegistrationForm() {
  return (

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} textAlign={'left'}>
      <Grid item xs={12}>
      <PersonalDetails2/>
      </Grid>
      <Grid item xs={12}>
      <FamilyDetails/>
      </Grid>
      <Grid item xs={12}>
        <PregnancyHistory/>
      </Grid>
      <Grid item xs={12}>
       <OtherHealthConditions/>
      </Grid>
    </Grid>
  </Box>


  )
}
