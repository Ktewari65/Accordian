//import { Accordion } from "react-bootstrap"
//import classes from './Accordian.module.css'
import { useState } from "react";
import './Accordia.css'
//import { Button } from "react-bootstrap";

const Accordian = (props) =>{
  const[accordian, setAccordian] = useState(null)
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  console.log(filterQuery)

  const handleFilterInputChange = (event)=>{
   setFilterQuery(event.target.value)
  }
  const handleFilterAlphabet = (alphabet, event)=>{

    //event.preventDefault()
    setSearchQuery(alphabet)
  }

const accordionData = [

    {
      title:'What is React #1',
       content:' React is a popular JavaScript library used for building user interfaces (UI) for web applications. It was developed by Facebook and released as an open-source project. React allows developers to create reusable UI components that efficiently update and render based on changes in application data. Key features and concepts of React include: Component-Based Architecture: React follows a component-based architecture, where the user interface is divided into reusable and independent components. Each component encapsulates its own logic and state, making it easier to manage and maintain complex UI structures.'
    },
    {
      title: 'What is JSX in React #2',
      content:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is commonly used in React to define the structure and appearance of components.",
    },
    {
      title: "Hooks in React  #3",
      content:
        "React hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 and provide a way to write reusable and stateful logic without using class components.",
    },
    {
      title: "Virtual DOM in React #4",
      content:
        "The virtual DOM (Document Object Model) is a concept in React where a lightweight copy of the actual DOM is created and manipulated. React uses the virtual DOM to perform efficient updates and minimize the number of actual DOM manipulations, resulting in better performance.",
    },
    {
      title:'useState Hook #5 ',
      content:'useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.'
    }
     
  ];

  const toggle = (i) =>{
    if(accordian===i){
      return setAccordian(null)
    }
    setAccordian(i)
  }


  const filteredData = accordionData.filter(item => {
      if (!item.title.toLowerCase().startsWith(filterQuery.toLowerCase())) {
         return false;
       }
  
       if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
         return false;
       }
  
       return true;
     });
  

  
  
    return(
       <div >
       
        
        <form>
    <div>
        <input  className="positions" type="text" value={searchQuery} onChange ={handleFilterAlphabet} placeholder="Search..." />
      </div>
      <div className="alphabet-filter">
        <button onClick={() => handleFilterAlphabet('W')}>W</button>
        <button onClick={() => handleFilterAlphabet('u')}>V</button>
        {/* Add more buttons for each alphabet as needed */}
      </div>
      <div>
      <input className="position" type="text" value={filterQuery} onChange={handleFilterInputChange} placeholder="Filter by alphabet..." />
       
      </div>
      {/* <Button variant="dark">Search</Button> */}
      </form>
        
        <div className='wrapper'>
          <div className= 'accordian'>
          <h1>React Tutorials</h1>
             {filteredData.map((data,i)=>{
    return <div className='item'>
          <div className='title'  onClick={()=>toggle(i)}>
            <h2>{data.title}</h2>
          <span>{accordian===i ? '-' : '+'}</span>
          </div>
        <div className={accordian===i ? 'content show' : 'content'}>{data.content}</div>
        </div>
            })}
        </div>
      </div>
      </div>
    )
}

export default Accordian