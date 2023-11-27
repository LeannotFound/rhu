import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, TextField , Typography, Divider} from '@mui/material';
import PatientTable from './PatientTable';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import './patientTable.css'
import CustomizedDialogs from './CustomizedDialogs';



export default function Patient() {



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
   
    <Box sx={{
        height: '100vh',
        width: '100%'

    }}>
         <Typography variant='h2' fontWeight='600'fontSize={28} mb={1}>
  Patient
</Typography>
<Divider sx={{marginBottom:5}}></Divider>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          
          <Box sx={{ '& > :not(style)': { m: 0 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 2, my: .5 }} />
        <TextField id="search" label="Search Patient" variant='standard' fullWidth />
      </Box>
    </Box>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        <Stack spacing={4} direction='row'sx={{flexDirection:'row', justifyContent:'flex-end'}}>
        <Tooltip title="Register" arrow>
        <CustomizedDialogs/>
          </Tooltip>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{height:70 + 'vh', padding:2}}>
            <PatientTable/>

          </Card>
        </Grid>
      </Grid>

        
         </Box>

    



  )
}
