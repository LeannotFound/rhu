import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Modal, Box, Typography, Paper, Stack, Card, Tooltip } from '@mui/material';
import Divider from '@mui/material-next/Divider';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import './patientTable.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import ButtonBase from '@mui/material/ButtonBase';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { TextField, Checkbox, FormControlLabel, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@mui/material/Dialog';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ReportIcon from '@material-ui/icons/InsertChart';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AddVisits from './AddVisits';



import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles({
  root: {
    '& > .MuiGrid-item': {
      paddingLeft: '0',
      marginTop: '0',
    },
  },
  table: {
    minWidth: 400,
  },
  container: {
    maxHeight: 440,
  },
});


const useStyles1 = makeStyles({
  tableHeader: {
    backgroundColor: 'skyblue', // change this to your preferred color
  },
  table: {
    minWidth: 1000,
  },
  container: {
    maxHeight: 600,
  },
});


const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});



function PatientTable() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openModal, setOpenModal] = useState(false);
  const [openAddVisitModal, setOpenAddVisitModal] = useState(false);
  const [openPrenatalVisitReports, setOpenPrenatalVisitReports] = useState(false);
  const [openCreateRefferal, setOpenCreateRefferal] = useState(false);
  const [openCompletePregnancy, setOpenCompletePregnancy] = useState(false);

  const [selectedRow, setSelectedRow] = useState('');

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const handleOpenAddVisitModal = () => {
    setOpenAddVisitModal(true);
  };
  const handleCloseAddVisitModal = () => {
    setOpenAddVisitModal(false);
  };

  const handleOpenPrenatalVisitReports = () => {
    setOpenPrenatalVisitReports(true);
  };
  const handleClosePrenatalVisitReports = () => {
    setOpenPrenatalVisitReports(false);
  };


  const handleOpenCreateRefferal = () => {
    setOpenCreateRefferal(true);
  };
  const handleCloseCreateRefferal = () => {
    setOpenCreateRefferal(false);
  };


  const handleCloseCompletePregnancy = () => {
    setOpenCompletePregnancy(false);
  };





  const columns = [
    { field: 'id', headerName: 'ID', width: 50, align: 'center', headerAlign: 'center' },
    { field: 'firstName', headerName: 'First name', flex: 1, sortable: false, align: 'center', headerAlign: 'center' },
    { field: 'lastName', headerName: 'Last name', flex: 1, sortable: false, align: 'center', headerAlign: 'center' },
    { field: 'birthdate', headerName: 'Date of Birth', type: 'number', width: 100, sortable: false, align: 'center', headerAlign: 'center' },
    { field: 'middleName', headerName: 'Middle name', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'cpnumber', headerName: 'Cellphone Number', type: 'number', flex: 1, sortable: false, align: 'center', headerAlign: 'center' },
    { field: 'address', headerName: 'Address', flex: 2, sortable: false, align: 'center', headerAlign: 'center' },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleViewDetails(params)}>
          <Box fontSize={10}>View Details</Box>
        </Button>
      ),
    },
  ];

  ///Dummy data for Patient Table
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jeviiiee', birthdate: '12/22/1996', middleName: ' Benito', gestationalAge: '8 weeks', cpnumber: '09502930229', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '2' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', birthdate: '12/22/1997', middleName: ' Ochoa', gestationalAge: '20 weeks', cpnumber: '09329322029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '1' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', birthdate: '12/22/1998', middleName: ' Padilla', gestationalAge: '10 weeks', cpnumber: '0950293223', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'O', religion: 'Islam', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '5' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', birthdate: '12/22/1998', middleName: ' Ramos', gestationalAge: '4 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB-', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '2' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', birthdate: '12/22/1998', gestationalAge: '15 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '3' },
    { id: 6, lastName: 'Melisandre', firstName: 'Debie', birthdate: '12/22/1998', middleName: ' Perez', gestationalAge: ' 8 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'B+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '4' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', birthdate: '12/22/2001', middleName: ' Padrigon', gestationalAge: '7 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'B-', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', birthdate: '12/22/1998', middleName: ' Rafer', gestationalAge: '12 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'A+', religion: 'Christianity', emailAddress: 'ewwww@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '12' },
    { id: 9, lastName: 'Roxie', firstName: 'Hailey', birthdate: '12/22/2002', middleName: ' Formento', gestationalAge: '24 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: ' Software Engineer', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Islam', emailAddress: 'ralls@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '3' },
    { id: 10, lastName: 'Roxie', firstName: 'Honey', birthdate: '12/22/1998', middleName: ' Mahusay', gestationalAge: '48 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'waeac@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24' },
    { id: 11, lastName: 'Snow', firstName: 'Jeviiiee', birthdate: '12/22/2000', middleName: ' Benito', gestationalAge: '8 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Economist', nationality: 'Filipino', civilstatus: 'single', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '2' },
    { id: 12, lastName: 'Lannister', firstName: 'Cersei', birthdate: '12/22/2005', middleName: ' Ochoa', gestationalAge: '20 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'single', bloodType: 'AB+', religion: 'Eglesia ni Cristo', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24' },
    { id: 13, lastName: 'Lannister', firstName: 'Jaime', birthdate: '12/22/1998', middleName: ' Padilla', gestationalAge: '10 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '1' },
    { id: 14, lastName: 'Stark', firstName: 'Arya', birthdate: '12/22/1998', middleName: ' Ramos', gestationalAge: '4 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alwacaeia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '2' },
    { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', birthdate: '12/22/1998', gestationalAge: '15 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte' },
    { id: 16, lastName: 'Melisandre', firstName: 'Debie', birthdate: '12/22/1998', middleName: ' Perez', gestationalAge: ' 8 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '3' },
    { id: 17, lastName: 'Clifford', firstName: 'Ferrara', birthdate: '12/22/1998', middleName: ' Padrigon', gestationalAge: '7 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Business Owner', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '2' },
    { id: 18, lastName: 'Frances', firstName: 'Rossini', birthdate: '12/22/2000', middleName: ' Rafer', gestationalAge: '12 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'O+', religion: 'Islam', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '2' },
    { id: 19, lastName: 'Roxie', firstName: 'Hailey', birthdate: '12/22/1998', middleName: ' Formento', gestationalAge: '24 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'widow', bloodType: 'O+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '2' },
    { id: 20, lastName: 'Roxie', firstName: 'Honey', birthdate: '12/22/2002', middleName: ' Mahusay', gestationalAge: '42 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'B-', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '2' },
    { id: 20, lastName: 'Roxie', firstName: 'Honey', birthdate: '12/22/2003', middleName: ' Mahusay', gestationalAge: '42 weeks', cpnumber: '0950293029', address: 'Manguisoc, Mercedes, Camarines Norte', occupation: 'Housewife', nationality: 'Filipino', civilstatus: 'married', bloodType: 'AB+', religion: 'Christianity', emailAddress: 'alleia@gmail.com', birthplace: 'Tugos, Paracale, Camarines Norte', LMP: '11/22/23', EDD: '8/29/24', Pregnancynumber: '2' },

  ];

  //Dummy for Appointments table
  const rows1 = [
    createData('Nov 23, 2023 10:00 AM', 'Pre-natal', 'Scheduled'),
    createData('Nov 24, 2023 02:00 PM', 'Pre-natal', 'Completed'),
    createData('Nov 23, 2023 10:00 AM', 'Pre-natal', 'Scheduled'),
    createData('Nov 24, 2023 02:00 PM', 'Pre-natal', 'Completed'),
    createData('Nov 23, 2023 10:00 AM', 'Pre-natal', 'Scheduled'),
    createData('Nov 24, 2023 02:00 PM', 'Pre-natal', 'Completed'),
    createData('Nov 23, 2023 10:00 AM', 'Pre-natal', 'Scheduled'),
    // Add more rows as needed
  ];

  //Dummy for Prenatal visit table
  const rows2 = [
    { dateOfVisit: '2023-01-01', bloodPressure: '120/80', weight: '70kg', bmi: '25', cervixExamination: '2/60', fundalHeight: '20cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-02-23', bloodPressure: '110/70', weight: '71kg', bmi: '26', cervixExamination: '4/65', fundalHeight: '22cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-03-07', bloodPressure: '115/75', weight: '72kg', bmi: '27', cervixExamination: '6/80', fundalHeight: '24cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-01-01', bloodPressure: '120/80', weight: '70kg', bmi: '25', cervixExamination: '2/60', fundalHeight: '20cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-02-23', bloodPressure: '110/70', weight: '71kg', bmi: '26', cervixExamination: '4/65', fundalHeight: '22cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-03-07', bloodPressure: '115/75', weight: '72kg', bmi: '27', cervixExamination: '6/80', fundalHeight: '24cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-01-01', bloodPressure: '120/80', weight: '70kg', bmi: '25', cervixExamination: '2/60', fundalHeight: '20cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-02-23', bloodPressure: '110/70', weight: '71kg', bmi: '26', cervixExamination: '4/65', fundalHeight: '22cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-03-07', bloodPressure: '115/75', weight: '72kg', bmi: '27', cervixExamination: '6/80', fundalHeight: '24cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-01-01', bloodPressure: '120/80', weight: '70kg', bmi: '25', cervixExamination: '2/60', fundalHeight: '20cm', fetalMovement: 'Active', presentation: 'Cephalic' },
    { dateOfVisit: '2023-02-23', bloodPressure: '110/70', weight: '71kg', bmi: '26', cervixExamination: '4/65', fundalHeight: '22cm', fetalMovement: 'Active', presentation: 'Cephalic' },

  ];

  // Dummyfor pregnancy related history table
  const rows3 = [
    { number: 1, dateOfDelivery: '2023-01-01', typeOfDelivery: 'Normal', birthOutcome: 'Alive', numberOfChildDelivered: 1, complications: 'None' },
    { number: 2, dateOfDelivery: '2023-02-01', typeOfDelivery: 'Ceasarian', birthOutcome: 'Miscarriage', numberOfChildDelivered: 1, complications: 'None' },
    { number: 3, dateOfDelivery: '2023-03-01', typeOfDelivery: 'Normal', birthOutcome: 'Stillbirth', numberOfChildDelivered: 2, complications: 'None' },
  ];



  //Dummy for Other healthrelated complication


  const diseases = ['Tuberculosis', 'Heart Diseases', 'Diabetes', 'Hypertension', 'Bronchial Asthma', 'Urinary tract infection', 'Parasitism', 'Goiter', 'Anemia'];

  const rows4 = diseases.map((disease, index) => ({
    disease,
    personal: index % 2 === 0,
    family: index % 3 === 0,
  }));





  const handleViewDetails = (params) => {
    if (params) {
      console.log(params.row); // Log the data of the row
      setSelectedRow(params.row);
      setOpenModal(true);
    } else {
      console.log('Data is not available');
    }
  };
  const handleOpenCompletePregnancy = () => {
    console.log(`${selectedRow && selectedRow.lastName ? selectedRow.lastName[0] : ''}${selectedRow && selectedRow.firstName ? selectedRow.firstName[0] : ''}`);
    console.log(selectedRow)
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function createData(dateAndTime, purpose, status) {
    return { dateAndTime, purpose, status };
  }




  //For date and time in Addprenatalvisits
  const [value1, setValue1] = React.useState(new Date());

  // // Extract the first letter of the first name and last name
  const initials = `${selectedRow && selectedRow.lastName ? selectedRow.lastName[0] : ''}${selectedRow && selectedRow.firstName ? selectedRow.firstName[0] : ''}`;
  const classes = useStyles();
  const classes1 = useStyles1();

  //dummy for Other Diseases
  const genitalTractInfections = ['Disease 1', 'Disease 2',]; // Replace with actual diseases
  const otherInfectiousDiseases = ['Disease A', 'Disease B']; // Replace with actual diseases


  //Dummy for High-risk Behavor
  const behaviors = ['Smoking', 'Alcohol Intake', 'Use of Illegal Drugs', 'Domestic violence', 'Multiple Partners'];

  const rows5 = behaviors.map((behavior, index) => ({
    behavior,
    personal: index % 2 === 0,
    family: index % 3 === 0,
  }));


  const addVisitModalContent = (
    <AddVisits
      selectedPatient={selectedRow}
      handleCloseAddVisitModal={handleCloseAddVisitModal}
    />
  );
  return (

    <div style={{ height: 550, width: '100%', textAlign: 'center', justifyContent: 'center' }} backgroundColor='gray'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />

      {/* Modal for displaying details */}

      <Modal open={openModal} onClose={handleCloseModal} scroll='paper'>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '85%', // Set the desired width
          maxHeight: '92%', // Set the maximum height
          overflow: 'auto', // Make it scrollable
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>

          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={1} rowSpacing={1}  >


              {/* ------------------------------------------------Profile Picture------------------------------------------------ */}
              <Grid xs={2}>
                <Grid container justify="center" alignItems="center" mb={1}>
                  {/* Container Box for Picture */}
                  <Grid item xs={12}>
                    <Avatar variant='square'>{initials}</Avatar>
                  </Grid>
                  <Grid item xs={12} mt={2} >
                    <Typography mt={0} color={'GrayText'} fontSize={'medium'} fontWeight={'600'} textAlign={'left'}>
                      Name:
                      <Box fontSize={'large'} fontWeight={'750'} color={'black'}>
                        {`${selectedRow.lastName} ${selectedRow.firstName} , ${selectedRow.middleName}`}
                      </Box>
                      LMP: <Box display='inline' color={'black'}>{selectedRow.LMP}</Box>
                      <Box></Box>
                      EDD: <Box display='inline' color={'black'}> {selectedRow.EDD}</Box>
                      <Box></Box>
                      TOTAL PREGNANCY: <Box display='inline' color={'black'}> {selectedRow.Pregnancynumber}</Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* --------------------------------------Taaaaaaab ----------------------------------------------------------------------------------------------------------------- */}
              <Grid item xs={10}>

                <Box padding={.3} sx={{ width: '100%', height: '100%' }} marginTop={0} mb={0}>

                  <Grid container spacing={1} >
                    <Grid xs={12}>

                      <Paper>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                          <TabContext value={value} >
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                              <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="General Information" value="1" />
                                <Tab label="Pregnancy History" value="2" />
                                <Tab label="Other Health Conditions" value="3" />
                              </TabList>
                            </Box>

                            {/* ---------------------------------1st tab ----------------------------------------------------------------------------------------------------------------- */}
                            <TabPanel value="1" sx={{ width: '100%', backgroundColor: '#F0F2F5' }}>

                              <ThemeProvider theme={theme}>
                                <Paper sx={{ width: '100%', padding: 2 }}>
                                  <Grid container spacing={.7} className="MuiGrid-item">

                                    <Grid item xs={2}>
                                      <Box height={4 + 'vw'}>

                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}>Blood Type <Box fontWeight={750} fontSize={'medium'}>{selectedRow.bloodType}</Box></Typography>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                      <Box height={4 + 'vw'}>
                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}>Date of birth <Box fontWeight={750} fontSize={'medium'}>{selectedRow.birthdate}</Box></Typography>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                      <Box height={4 + 'vw'}>
                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}>Nationality<Box fontWeight={750} fontSize={'medium'}>{selectedRow.nationality}</Box></Typography>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                      <Box height={4 + 'vw'}>
                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}>Civil Status <Box fontWeight={750} fontSize={'medium'}>{selectedRow.civilstatus}</Box></Typography>
                                      </Box>
                                    </Grid>

                                    <Grid item xs={2}>
                                      <Box height={4 + 'vw'}>
                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}>Occupation <Box fontWeight={750} fontSize={'medium'}>{selectedRow.occupation}</Box></Typography>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                      <Box height={4 + 'vw'}>
                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}>Religion<Box fontWeight={750} fontSize={'medium'}>{selectedRow.religion}</Box></Typography>
                                      </Box>
                                    </Grid>

                                    <Grid item xs={2}>
                                      <Box height={4 + 'vw'}>
                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}> Contact number<Box fontWeight={750} fontSize={'medium'}>{selectedRow.cpnumber}</Box></Typography>
                                      </Box>
                                    </Grid>

                                    <Grid item xs={2}>
                                      <Box height={4 + 'vw'}>
                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}> Email Address<Box fontWeight={750} fontSize={'medium'}>{selectedRow.emailAddress}</Box></Typography>
                                      </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                      <Box height={4 + 'vw'}>
                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}>Place of Birth<Box fontWeight={750} fontSize={'medium'}>{selectedRow.birthplace}</Box></Typography>
                                      </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                      <Box height={4 + 'vw'}>
                                        <Typography mb={1} variant='body' fontSize={'small'} fontWeight={'medium'} color={'GrayText'}> Current Address<Box fontWeight={750} fontSize={'medium'}>{selectedRow.address}</Box></Typography>
                                      </Box>
                                    </Grid>


                                    {/* Add more grid items as needed */}
                                  </Grid>
                                </Paper>
                              </ThemeProvider>

                            </TabPanel>
                            <Grid container >


                              {/* ---------------------------------------------------------2nd tab ---------------------------------------------------------------------------- */}
                              <TabPanel value="2" sx={{ width: '100%', backgroundColor: '#F0F2F5' }}>
                                <Grid xs={10}>
                                  <TableContainer component={Paper}>
                                    <Table size='large'>
                                      <TableHead>
                                        <TableRow>
                                          <TableCell>Pregnancy Number</TableCell>
                                          <TableCell>Date of Delivery</TableCell>
                                          <TableCell>Type of Delivery</TableCell>
                                          <TableCell>Birth Outcome</TableCell>
                                          <TableCell>Number of Child Delivered</TableCell>
                                          <TableCell>Pregnancy Related Complications/Condition</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {rows3.map((row) => (
                                          <TableRow key={row.number}>
                                            <TableCell>{row.number}</TableCell>
                                            <TableCell>{row.dateOfDelivery}</TableCell>
                                            <TableCell>{row.typeOfDelivery}</TableCell>
                                            <TableCell>{row.birthOutcome}</TableCell>
                                            <TableCell>{row.numberOfChildDelivered}</TableCell>
                                            <TableCell>{row.complications}</TableCell>
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                </Grid>




                              </TabPanel>
                            </Grid>

                            {/* --------------------------------------------------------3rd tab ----------------------------------------------------------------------------------------------------------------- */}
                            <TabPanel value="3" sx={{ width: '100%', backgroundColor: '#F0F2F5' }}>
                              <Grid container >
                                <Grid xs={6}>
                                  <Paper>
                                    <Box padding={2} textAlign={'center'} sx={{ backgroundColor: 'primary.main', color: 'white' }}><Typography fontWeight='700' >HEALTH CONDITIONS AND COMPLICATIONS</Typography></Box>
                                    <TableContainer component={Paper}>
                                      <Table size='small'>
                                        <TableHead>
                                          <TableRow>
                                            <TableCell style={{ backgroundColor: 'white', fontWeight: '550', color: 'GrayText' }}>Diseases</TableCell>
                                            <TableCell style={{ backgroundColor: 'white', fontWeight: '550', color: 'GrayText' }}>Personal</TableCell>
                                            <TableCell style={{ backgroundColor: 'white', fontWeight: '550', color: 'GrayText' }}>Family</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {rows4.map((row) => (
                                            <TableRow key={row.disease}>
                                              <TableCell >{row.disease}</TableCell>
                                              <TableCell style={{ backgroundColor: row.personal ? '#2E7D32' : '#D32F2F' }}>
                                                {row.personal ? <CheckIcon /> : <CloseIcon />}
                                                {row.personal ? 'YES' : 'NO'}
                                              </TableCell>
                                              <TableCell style={{ backgroundColor: row.family ? '#2E7D32' : '#D32F2F' }}>
                                                {row.family ? <CheckIcon /> : <CloseIcon />}
                                                {row.family ? 'YES' : 'NO'}
                                              </TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                  </Paper>
                                </Grid>
                                <Grid xs={5} ml={2}>
                                  <Grid xs={12}>

                                    {/*--------------------------------- for Displaying Specified Diseases ---------------------------------*/}
                                    <Paper >
                                      <Box mb={1} padding={1}>
                                        <Typography fontSize="large" fontWeight={'600'} >Genital Tract Infections Diseases:</Typography>
                                        {genitalTractInfections.map((disease, index) => (
                                          <Typography key={index}>{disease}</Typography>
                                        ))}
                                      </Box>
                                      <Box mb={1} padding={1}>
                                        <Typography fontSize="large" fontWeight={'600'} >Other Infectious Diseases:</Typography>
                                        {otherInfectiousDiseases.map((disease, index) => (
                                          <Typography key={index}>{disease}</Typography>
                                        ))}
                                      </Box>
                                    </Paper>
                                  </Grid>


                                  {/*----------------------------------------- Table for High-risk Behavior----------------------------------------- */}
                                  <Grid xs={12}>
                                    <Paper>
                                      <Box padding={1} textAlign={'center'} sx={{ backgroundColor: 'primary.main', color: 'white' }}><Typography fontWeight='700' >HIGH-RISK BEHAVIOR</Typography></Box>


                                      <TableContainer component={Paper}>
                                        <Table size='small'>
                                          <TableHead>
                                            <TableRow>
                                              <TableCell>High-risk Behavior</TableCell>
                                              <TableCell>Personal</TableCell>
                                              <TableCell>Family</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {rows5.map((row, index) => (
                                              <TableRow key={row.behavior}>
                                                <TableCell>{row.behavior}</TableCell>
                                                <TableCell style={{ backgroundColor: row.personal ? '#2E7D32' : '#D32F2F' }}>
                                                  {row.personal ? <CheckIcon /> : <CloseIcon />}
                                                  {row.personal ? 'YES' : 'NO'}
                                                </TableCell>
                                                <TableCell style={{ backgroundColor: row.family ? '#2E7D32' : '#D32F2F' }}>
                                                  {row.family ? <CheckIcon /> : <CloseIcon />}
                                                  {row.family ? 'YES' : 'NO'}
                                                </TableCell>
                                              </TableRow>
                                            ))}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>

                                    </Paper>
                                  </Grid>
                                </Grid>


                              </Grid>
                            </TabPanel>
                          </TabContext>
                        </Box>

                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              {/* ---------------------------------End of Tab---------------------------------------------------------------------------------------------------------------------------- */}



              <Divider variant='fullwidth' />

              <Grid container xs={12} >

                <Grid xs={3}>

                </Grid>
                <Grid xs={3}>

                </Grid>
                <Grid xs={3}>

                </Grid>


                {/* -------------------------------------------4buttons ---------------------------------------------------------------------------------------*/}
                <Grid container xs={3} mt={1}>

                  <Tooltip title="Add Pre Natal Visits">
                    <Button marginRight={1} startIcon={<AddIcon />} variant="contained" onClick={handleOpenAddVisitModal} onClose={handleCloseAddVisitModal}> </Button>
                  </Tooltip>


                  <Tooltip title="Pre Natal Reports">
                    <Button startIcon={<ReportIcon />} variant="contained" onClick={handleOpenPrenatalVisitReports} onClose={handleClosePrenatalVisitReports} color="warning"></Button>
                  </Tooltip>


                  <Tooltip title="Create Referral">
                    <Button startIcon={<CreateIcon />} variant="contained" onClick={handleOpenCreateRefferal} onClose={handleCloseCreateRefferal} color="success"></Button>
                  </Tooltip>


                  <Tooltip title="Complete Pregnancy">
                    <Button startIcon={<DoneIcon />} variant="contained" onClick={handleClickOpen} color="error"></Button>
                  </Tooltip>

                  {/* --------------------- Dialog for Complete Pregnancy------------------------------------------------------------------------------------------ */}
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    variant='standard'
                  >
                    <DialogTitle id="alert-dialog-title" style={{ color: 'red' }}>
                      {"Warning: Completing Pregnancy"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description" style={{ color: 'orange' }}>
                        Completing this action will reset your pregnancy progress and automatically generate a discharge summary. Please confirm your action.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleClose} color="secondary" autoFocus>
                        Confirm
                      </Button>
                    </DialogActions>
                  </Dialog>

                </Grid>
                {/* ---------------------------------------------------------- Table for Appoinment ---------------------------------------------------------- */}
                <Grid xs={4} padding={1}>
                  <Box margin={0}>
                    <Box padding={1} textAlign={'center'} sx={{ backgroundColor: 'skyblue', color: 'white' }}><Typography fontWeight='700' >APPOINTMENTS</Typography></Box>
                    <TableContainer component={Paper} sx={{ maxHeight: '31vh' }}>
                      <Table aria-label="simple table" size='small' sx={{ minWidth: '' }} stickyHeader>
                        <TableHead >
                          <TableRow>
                            <TableCell style={{ backgroundColor: '#F0F2F5', fontWeight: '550', color: 'GrayText' }}>Date and Time</TableCell>
                            <TableCell align="right" style={{ backgroundColor: '#F0F2F5', fontWeight: '550', color: 'GrayText' }}>Purpose</TableCell>
                            <TableCell align="right" style={{ backgroundColor: '#F0F2F5', fontWeight: '550', color: 'GrayText' }}>Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows1.length > 0 ? (
                            rows1.map((row1) => (
                              <TableRow key={row1.dateAndTime}>
                                <TableCell component="th" scope="row">
                                  {row1.dateAndTime}
                                </TableCell>
                                <TableCell align="right">{row1.purpose}</TableCell>
                                <TableCell align="right">{row1.status}</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={3} align="center">
                                No appointments found
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Grid>
                {/* ----------------------------------------------------------------------Table for Prenatal Visits ----------------------------------------------------------------------*/}
                <Grid xs={8} justify="center" padding={1}>
                  <Box>
                    <Box padding={1} textAlign={'center'} sx={{ backgroundColor: 'skyblue', color: 'white' }}><Typography fontWeight='700' >PRE-NATAL VISITS</Typography></Box>
                    <TableContainer component={Paper} sx={{ maxHeight: '31vh' }} >
                      <Table size="small" aria-label="prenatalvistisTable" stickyHeader sx={{ minWidth: '' }}>
                        <TableHead style={{ backgroundColor: 'skyblue' }} >
                          <TableRow>
                            <TableCell sx={{ backgroundColor: '#F0F2F5', color: 'GrayText', fontWeight: '550' }} >Date of Visit</TableCell>
                            <TableCell sx={{ backgroundColor: '#F0F2F5', color: 'GrayText', fontWeight: '550' }}>Blood Pressure</TableCell>
                            <TableCell sx={{ backgroundColor: '#F0F2F5', color: 'GrayText', fontWeight: '550' }}>Weight</TableCell>
                            <TableCell sx={{ backgroundColor: '#F0F2F5', color: 'GrayText', fontWeight: '550' }}>BMI</TableCell>
                            <TableCell sx={{ backgroundColor: '#F0F2F5', color: 'GrayText', fontWeight: '550' }}>Cervix(dill/eff)</TableCell>
                            <TableCell sx={{ backgroundColor: '#F0F2F5', color: 'GrayText', fontWeight: '550' }}>Fundal Height</TableCell>
                            <TableCell sx={{ backgroundColor: '#F0F2F5', color: 'GrayText', fontWeight: '550' }}>Fetal Movement</TableCell>
                            <TableCell sx={{ backgroundColor: '#F0F2F5', color: 'GrayText', fontWeight: '550' }}>Presentation</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows2.length > 0 ? (
                            rows2.map((row2) => (
                              <TableRow key={row2.dateOfVisit}>
                                <TableCell>{row2.dateOfVisit}</TableCell>
                                <TableCell>{row2.bloodPressure}</TableCell>
                                <TableCell>{row2.weight}</TableCell>
                                <TableCell>{row2.bmi}</TableCell>
                                <TableCell align='center'>{row2.cervixExamination}</TableCell>
                                <TableCell>{row2.fundalHeight}</TableCell>
                                <TableCell>{row2.fetalMovement}</TableCell>
                                <TableCell>{row2.presentation}</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={9} align="center">
                                No Pre-natal visits found
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>

                  </Box>
                </Grid>
              </Grid>
              {/* -------------------------------------------------------------------------------Add Visits----------------------------------------------------------------------------------- */}
              <Modal open={openAddVisitModal} onClose={handleCloseAddVisitModal} >

                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '75%', // Set the desired width
                  maxHeight: '90%', // Set the maximum height
                  overflow: 'auto', // Make it scrollable
                  bgcolor: 'background.paper',
                  boxShadow: 24,
                  p: 4,
                }}>
                  {/* Your content goes here */}

                  {addVisitModalContent}
                  {/* Add your form or other components here */}
                </Box>
              </Modal>
              {/*--------------------------------------------------------------------------------------------- Modal for Visits Reports ---------------------------------------------------------------------------------------------*/}
              <Modal open={openPrenatalVisitReports} onClose={handleClosePrenatalVisitReports}>

                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                  {/* Your content goes here */}
                  <Typography variant="h6" component="div">
                    Pre natal visit reports
                  </Typography>

                  {/* Add your form or other components here */}
                </Box>
              </Modal>
              {/* -----------------------------------------------------------------------------------------------------Modal for Refferal----------------------------------------------------------------------------------------------------- */}
              <Modal open={openCreateRefferal} onClose={handleCloseCreateRefferal}>

                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                  {/* Your content goes here */}
                  <Typography variant="h6" component="div">
                    Create Refferal
                  </Typography>
                  {/* Add your form or other components here */}
                </Box>
              </Modal>
              {/*----------------------------------------------------------------------------------------------- Modal for Complete Pregnancy -----------------------------------------------------------------------------------------------*/}
              <Modal open={openCompletePregnancy} onClose={handleCloseCompletePregnancy}>

                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                  {/* Your content goes here */}
                  <Typography variant="h6" component="div">
                    Complete Pregnancy
                  </Typography>
                  {/* Add your form or other components here */}
                </Box>
              </Modal>
              {/*------------------------------------------------------------------------------------------------------ End of Modals------------------------------------------------------------------------------------------------------ */}
            </Grid>
          </Box>
        </Box>
      </Modal>

    </div>

  );
}
export default PatientTable;
