import React from 'react';

import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import './App.css';



function App() {
  
  const login = () =>
  {
     
var rusers = fetch("https://5f142b812710570016b37c94.mockapi.io/api/login/loginids")
rusers
	.then(function(data)  {
		return data.json()
	})
  .then(function(Users) {
 



    var a = document.getElementById("emailid").value
    var b = document.getElementById("pwd").value
    
    for(var i=0;i<Users.length;i++)
    {
      console.log(Users.length)
  if(a==Users[i].email && b==Users[i].pwd)
  {
    
   alert("login successfull !!!! Selection button is now activated")

document.getElementById("link1").removeAttribute("class")
  
      
    
    break;
  }
  else{
    if(i==Users.length-1)
    {
    
    alert("wrong credentials")
    }
   
  }
  
    }
  })
  }
 

  return (
  
    <div className="App">
      <header className="App-header">
       
      <h1>Login Page</h1>
         </header>
    
    <div>
      <input id ="emailid" placeholder="Enter email id" type="email"></input>
      <input id ="pwd" placeholder="Enter pwd" type="password"></input>
      <button id = "login" for="pwd" for="emailid" onClick={()=>(login())} >login</button>
  
          
                
                    <Link class="isDisabled" id="link1" to="/selectionview" disabled="disabled">Selection</Link>
                   
                   
               
    </div>
    
    </div>

  
  );
}

export default App;
