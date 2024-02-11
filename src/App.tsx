import React, { useState } from 'react';
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

  const returnToHome = () =>{
    setViewCompleted(false);
  }

  return (
    <>
   <Navbar changePage={changePage} returnToHome={returnToHome}/>
   <HomePage completedPage={completedPage}/>
   </>
  );
}

export default App;
