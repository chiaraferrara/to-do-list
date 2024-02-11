import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {


  const [completedPage, setViewCompleted] = useState(false);

  const changePage = () =>{
    const newValue = !completedPage;
    setViewCompleted(newValue);
    console.log("metodo onCLick invocato")
    console.log(newValue)
  }

  return (
    <>
   <Navbar changePage={changePage}/>
   <HomePage completedPage={completedPage}/>
   </>
  );
}

export default App;
