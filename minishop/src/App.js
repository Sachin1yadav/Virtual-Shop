 
import './App.css';
 
 

import Allroute from './Routes/AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@chakra-ui/react';
import Footer from './components/Footer/Footer';
function App() {
  
 
  return (
    <div className="App">
       <Box>
       <Allroute/>
       </Box>
       <Footer/>
    </div>
  );
}

export default App;
