import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoApp from './todoapp/TodoApp.js'
import Register from './register.jsx'
import Mainp from './Mainpage.jsx'
import StatusApp from'./statusposting/Statusapp.js'
import Selection from './selectionpage.js'

import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";

const Homepage = () => {
  
    return (
     
      <Router>
        <div>
     
         
                 
                   <center><Link to="/mainview">Home</Link></center>  
             
               
              
         
          
          <switch>
          <Route path ="/mainview">
          <Mainp/>
                   </Route>
              <Route path ="/registerview">
              <Register/>
                   </Route>
                   <Route path ="/loginview">
                   <App/>
                   </Route>

                   <Route path ="/todoview">
                   <TodoApp/>
                   </Route>
                   <Route path ="/statusappview">
                   <StatusApp/>
                   
                 
                   </Route>
                   <Route path ="/selectionview">
                   <Selection/>
                   
                 
                   </Route>
                
          </switch>
          </div>  
       
      </Router>
      
      
    
  )
}




ReactDOM.render(
  <React.StrictMode>
   
    <Homepage/>
  </React.StrictMode>,
  document.getElementById('root')
);


