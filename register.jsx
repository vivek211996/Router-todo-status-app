import React from 'react';

import TodoApp from './todoapp/TodoApp.js'

function Register() {
const Reg = () =>
  {
    function postRequest(url, data) {
      return fetch(url, {
        credentials: 'same-origin', // 'include', default: 'omit'
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
      })
      .then(response => response.json())
    }

    var a = document.getElementById("emailid").value
    var b = document.getElementById("pwd1").value
    var c = document.getElementById("pwd2").value  
    
   
    
   
  if(b==c)
  {
    postRequest('https://5f142b812710570016b37c94.mockapi.io/api/login/loginids', {"email":''+ a, "pwd":''+b})
  .then(data => console.log(data)) // Result from the `response.json()` call
  .catch(error => console.error(error))
    alert("registered, now you can login")
    
   
  }
  else{
    alert("pwds donot match")
   
  }

}  
  
  return (
    <div className="App">
      <header className="App-header">
       
      <h1>REGISTER</h1>
         </header>
    
    <div>
      <input id ="emailid" placeholder="Enter email id" type="email"></input>
      <input id ="pwd1" placeholder="Enter pwd" type="password"></input>
      <input id ="pwd2" placeholder="retype pwd" type="password"></input>
      <button id = "signup" for="pwd1" for="pwd2" for="emailid" onClick={()=>(Reg())} >Signup</button>
    </div>
    </div>
  );
}


export default Register;