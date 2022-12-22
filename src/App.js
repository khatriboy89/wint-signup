import React from 'react'
import Form1 from "./forms/Form1"
import Form2 from "./forms/Form2"
import "./App.css";


const App = () => {

  return (
    <div >
    <Form1 />
    <Form2/>
    </div>
  )
  function showAlert() {
    var labl = document.getElementById('labl').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var zip = document.getElementById('zip').value;
    var code = document.getElementById('code').value;
    var phne = document.getElementById('phne').value;
    var email = document.getElementById('email').value;
    // var checkbox = document.getElementById('checkbox').value;
    var mailformat = /\S+@\S+\.\S+/;
    if(labl != null && labl != '' && labl.match(mailformat) && fname != null && fname != ''
    && lname != null && lname != '' && lname.match(mailformat) && zip != null && zip != ''
    && code != null && code != '' && code.match(mailformat) && phne != null && phne != ''
    && email != null && email != '' && email.match(mailformat)){

      alert ("You are signed in successfully!");
    }
  }
}


export default App