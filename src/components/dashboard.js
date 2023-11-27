import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Calendar from './Calendar';





function dashboard() {

  const items = [50, 90, 38, 26, 25];

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={8}>
      <Stack spacing={3} direction={'row'}>
        <Card sx={{ maxWidth: 345 }}>
                 
                    <CardContent>
                    <Stack spacing={2} direction={'row'}> 
                    <CalendarMonthIcon fontSize='large'/>
                        <Typography >
                         Appointments
                        </Typography>
    
                    </Stack>
                    <Stack direction={'column'}>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
                           Prenatal
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
                         Lying-in
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
                          Lying-in
                        </Typography>
                        </Stack>
                    </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                    <Stack spacing={2} direction={'row'}> 
                        <PregnantWomanIcon fontSize='large'/>
                        <Typography >
                        Registered User
                        </Typography>
                     </Stack>
                     <Stack direction={'column'}>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
                           number
                        </Typography>
                    
                        </Stack>
                   
                    </CardContent>
                    </Card>
                    
                    
                    <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Stack spacing={2} direction={'row'}>
                         <VaccinesIcon fontSize='large'/>
                        <Typography >
                        Immunization
                        </Typography>
                        </Stack>
                        <Stack direction={'column'}>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
                    Male
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
                    Female
                        </Typography>
                        </Stack>
                    </CardContent>
                    </Card>

        </Stack>

      </Grid>
      <Grid item xs={4} sx={{height:60}}>

      <Card sx={{height:85 + 'vh', justifyContent:'center'}}>
                    <CardContent>
                    </CardContent>
                    <Calendar/>
                    </Card>
        
      </Grid>
      <Grid item xs={8}>
      
      <Card sx={{height:50 + 'vh'}}>
                    <CardContent>
                    
                    
                    </CardContent>
                    </Card>
      </Grid>
     
    </Grid>
  </Box>
  )
}

export default dashboard;
