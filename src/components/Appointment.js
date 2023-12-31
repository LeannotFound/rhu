
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Paper, Grid, Divider, Typography , Box} from '@mui/material';


export default function Appoinment() {
  const columns = [
    { field: 'date', headerName: 'DATE AND TIME', flex:.5},
    { field: 'patient', headerName: 'PATIENT', flex:.5 },
    { field: 'purpose', headerName: 'PURPOSE', flex:.5 },
    { field: 'address', headerName: 'ADDRESS', flex:1},
    {
      field: 'status',
      headerName: 'STATUS', flex:.5,
      renderCell: (params) => {
        if (params.value === 'Pending') {
          return <div><PendingActionsIcon color="action" /> {params.value}</div>;
        } else if (params.value === 'Denied') {
          return <div><CancelIcon color="error" /> {params.value}</div>;
        } else {
          return <div><CheckCircleIcon color="success" /> {params.value}</div>;
        }
      },
    },
    {
      field: 'action',
      headerName: 'ACTION', flex:.7,
      renderCell: (params) => (
        params.row.status === 'Pending' ? (
          <div>
            <Button variant="contained" color="primary" onClick={() => handleApprove(params.row.id)}>Approve</Button>
            <Button variant="contained" color="error" onClick={() => handleReject(params.row.id)}>Reject</Button>
          </div>
        ) : null
      ),
    },
  ];
  
  const allRows = [
    { id: 1, date: '2023-11-26 15:55', patient: 'Doe, John', purpose: 'Prenatal Checkup', address: 'Barangay 1, Municipality 1, Province 1', status: 'Pending' },
    { id: 2, date: '2023-11-27 10:00', patient: 'Smith, Jane', purpose: 'Referral', address: 'Barangay 2, Municipality 2, Province 2', status: 'Scheduled' },
    { id: 3, date: '2023-11-28 14:30', patient: 'Brown, Bob', purpose: 'Checkup', address: 'Barangay 3, Municipality 3, Province 3', status: 'Pending' },
    { id: 4, date: '2023-11-26 15:55', patient: 'Doe, John', purpose: 'Prenatal Checkup', address: 'Barangay 1, Municipality 1, Province 1', status: 'Pending' },
    { id: 5, date: '2023-11-27 10:00', patient: 'Smith, Jane', purpose: 'Referral', address: 'Barangay 2, Municipality 2, Province 2', status: 'Scheduled' },
    { id: 6, date: '2023-11-28 14:30', patient: 'Brown, Bob', purpose: 'Checkup', address: 'Barangay 3, Municipality 3, Province 3', status: 'Denied' },
  
  
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showPending, setShowPending] = useState(true);
  const [showScheduled, setShowScheduled] = useState(true);
  const [showAll, setShowAll] = useState(true);
  const [rows, setRows] = useState(allRows);

  const filteredRows = rows.filter((row) => {
    return (
      (showAll) ||
      (showPending && row.status === 'Pending') ||
      (showScheduled && row.status === 'Scheduled')
    );
  }).filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });


  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const handleApprove = (id) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, status: 'Scheduled' } : row)));
    setSnackbarMessage('Appointment Approved');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleReject = (id) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, status: 'Denied' } : row)));
    setSnackbarMessage('Appointment Rejected');
    setSnackbarSeverity('error');
    setSnackbarOpen(true);
  };

  return (
    <Box>
      <Typography variant='h2' fontWeight='600'fontSize={28} mb={1}>
  Appoinment
</Typography>
<Divider sx={{marginBottom:5}}></Divider>

    
    <Paper  style={{ maxHeight: '90%', maxWidth: '98%' , padding:'3%'}} >


        <Grid container >
<Grid xs={4} mb={2}>
<TextField
  label="Search"
  variant="standard"
  value={searchTerm}
  fullWidth
  onChange={(e) => setSearchTerm(e.target.value)}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  }}
/>
    </Grid>
    <Grid xs={3}></Grid>
    <Grid xs={5} marginTop={3}>
      <FormControlLabel
        control={
          <Checkbox
            checked={showPending}
            onChange={(e) => setShowPending(e.target.checked)}
            color="primary"
          />
        }
        label="Show Pending"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showScheduled}
            onChange={(e) => setShowScheduled(e.target.checked)}
            color="primary"
          />
        }
        label="Show Scheduled"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showAll}
            onChange={(e) => setShowAll(e.target.checked)}
            color="primary"
          />
        }
        label="Show All"
      />
      </Grid>
      <Grid xs={12}>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowHeight={(params) => {
          if (params.id === 'id') { 
            return 100; // replace 100 with the desired height
          }
          return 50; // replace 50 with the default height
        }} 
      />
      </Grid>
      </Grid>
    </Paper>
    {/* ----------------------------------------------------------Messaggeeeeeeeee---------------------------------------------------------- */}
    <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}
