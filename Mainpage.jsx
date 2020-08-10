import React from 'react';

import Homepage from "./index.js"
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
function mainp() {
  
  
    
    return (
      <div className="App">
        <header className="TodoApp">
        
        <h1>WELCOME TO TODO APP & Status update</h1>
           </header>
      
      <div>
      <nav>
          <ul>
                   <li>
                     <Link to="/loginview">login</Link>
                   </li>
                   <li>
                     <Link to="/registerview">Register</Link>
                   </li>
                 </ul>
                 </nav>
     
      </div>
      </div>
    );
  }
  
  export default mainp;