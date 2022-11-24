import React, { useState } from 'react'
import './App.css'

function App() {
    
  const[errordata,setErrordata]=useState([])
  const[inputdata,setInputdata]=useState({
    name:"",
    age:"",
    date:"",
    place:""
  })

  function changehandle(e) {
    setInputdata({...inputdata,[e.target.name]:e.target.value})
    
  }
  let {name,age,date,place}=inputdata;

  function changhandle() {
    setErrordata([...errordata,{name,age,date,place}])
    console.log(inputdata)
    console.log(errordata)
    setInputdata({name:"",age:"",date:"",place:""})
    
  }
  return (
    <div className="home">
    <div className="App">
      <input
        className="top text-center p-3"
        type={"text"}
        name="name" 
        value={inputdata.name} 
        onChange={changehandle}
        placeholder="Enter your name"/>
      
      <div class="dropdown p-5">
  <p class="btn dropdown-toggle bg-white mt-4 B" role="button" data-bs-toggle="dropdown" >
    Multiselect
  </p>

  <ul class="dropdown-menu arrow" aria-labelledby="dropdownMenuLink">
  <input
        className="top text-center p-2 m-2" 
        type={"number"}
        name="age" 
        value={inputdata.age} 
        onChange={changehandle}
        placeholder="Enter your age"/>
      <input 
        className="top text-center p-2 m-2"
        type={"date"} 
        name="date" 
        value={inputdata.date}
        onChange={changehandle}
        placeholder="Enter date"/>
        <br/>
        <br/>
        <select
        className="top text-center p-2 m-2"
        type={"text"}
        name="place"
        value={inputdata.place}
        onChange={changehandle}
        placeholder="Choose you Place">
          
          <option></option>
          <option>Bangalore</option>
          <option>chennai</option>
          <option>vellore</option>
        </select>
  </ul>
</div>
        <button className="B" onClick={changhandle}>Submit</button>

        <table className="result bg-white" border={5} width="50%" height="10%" cellPadding={10}>
          <tbody>
          <tr>
            <td>NAME</td>
            <td>AGE</td>
            <td>DATE</td>
            <td>PLACE</td>
          </tr>
          {
            errordata.map(
            (info,ind) => {
              return(
                <tr key={ind}>
                  <td>{info.name}</td>
                  <td>{info.age}</td>
                  <td>{info.date}</td>
                  <td>{info.place}</td>
                </tr>
              )
            }
          )
        }
          </tbody>
        </table>
    </div>
    </div>
  )
}
export default App
