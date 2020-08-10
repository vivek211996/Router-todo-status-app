import React from 'react';


import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
function Selection() {
  
  
    
    return (
      <div className="App">
        <header className="TodoApp">
        
        <h1>WELCOME TO TODO APP & Status posting APP</h1>
           </header>
      
      <div>
      <nav>
          <ul>
                   <li>
                     <Link to="/todoview">Todo App</Link>
                   </li>
                   <li>
                     <Link to="/statusappview">Status posting App</Link>
                   </li>
                 </ul>
                 </nav>
     
      </div>
      </div>
    );
  }
  
  export default Selection;