import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {  Route, Routes } from 'react-router-dom';
import Dashboard from '../1-Dashboard/Dashboard';
import Contacts from '../3-Contacts/Contacts';
import Team from '../2-Team/Team';
import Invoices from '../4-Invoices/Invoices';
import Form from '../5-Form/Form';
import Calendar from '../6-Calendar/Calendar';
import Faq from '../7-Faq/Faq';
import Geography from '../11-Geography/Geography';
import Line from '../10-Line/Line';
import Pie from '../9-Pie/Pie';
import Bar from '../8-BarChart/BarChart';
// import Dashboard from './Components/1-Dashboard/Dashboard';
// import Team from './Components/2-Team/Team';
// import Contacts from './Components/3-Contacts/Contacts';

// import Dashboard from '../1-Dashboard/Dashboard';




const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function BarContent() {
    return <>
        <Box className=' bg-body-info' component="main" sx={{ flexGrow: 1, p:3  }}>
            <DrawerHeader className='' />
            <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='dashboard' element={<Dashboard />}/>
                <Route path='team' element={<Team/>}/>
                <Route path='contacts' element={<Contacts/>}/>
                <Route path='invoices' element={<Invoices/>}/>
                <Route path='form' element={<Form/>}/> 
                <Route path='calendar' element={<Calendar/>}/> 
                <Route path='faq' element={<Faq/>}/> 
                <Route path='Bar' element={<Bar/>}/> 
                <Route path='pie' element={<Pie/>}/> 
                <Route path='line' element={<Line/>}/> 
                <Route path='geography' element={<Geography/>}/> 
            </Routes>        
        </Box> 
    </>
}
