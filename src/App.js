import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar2';
import News from './components/News';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


function App()  {
  const pageSize=15
  
  const [progress, setProgress]  = useState(0);
  
    return (
      <div>
        <Router>
        <LoadingBar
        height = {5}
        color='#f11946'
        progress={progress}
      />
      
        <Navbar/>
        
        <Switch>
          
           <Route path="/"><News setProgress = {setProgress}  pageSize={pageSize} country="in" category="general"/></Route>
           <Route path="/business"><News setProgress = {setProgress}  pageSize={pageSize} country="in" category="business"/></Route>
           <Route path="/entertainment"><News setProgress = {setProgress}  pageSize={pageSize} country="in" category="entertainment"/></Route>
           <Route path="/health"><News setProgress = {setProgress}  pageSize={pageSize} country="in" category="health"/></Route>
           <Route path="/science"><News setProgress = {setProgress}  pageSize={pageSize} country="in" category="science"/></Route>
           <Route path="/sports"><News setProgress = {setProgress}  pageSize={pageSize} country="in" category="sports"/></Route>
           <Route path="/technology"><News setProgress = {setProgress}  pageSize={pageSize} country="in" category="technology"/></Route>



        </Switch>
        </Router>
        
      </div>
    )
  
}

export default App

