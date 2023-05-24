import Accordian from './Accordian'
import Header from './Header'
//import { useState } from 'react';
//import { Button } from 'react-bootstrap';
const App = (props) =>{

 
  

  // const filteredData = accordionData.filter(item => {
  //   if (filterAlphabet && !item.title.toLowerCase().startsWith(filterAlphabet.toLowerCase())) {
  //     return false;
  //   }

  //   if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return false;
  //   }

  //   return true;
  // });

  
  return(
    <>
     <Header/>
     <div>
    <img src="image.jpg"  alt="images"></img> 
    </div>
   
      <Accordian />
</>
  )
}

export default App