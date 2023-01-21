 
import './App.css';
 
 

import Allroute from './Routes/AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/Navbar/NavbarNew';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Footer from './components/Footer/Footer';
function App() {
  
 
  return (
    <div className="App">
       <Navbar />
       <Box mt='72px'  >
       <Allroute/>
       </Box>
       <Footer/>
    </div>
  );
}

export default App;
