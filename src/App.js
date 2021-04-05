import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Login from "./componets/Login";
import Signup from "./componets/Signup";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Errorpage from './componets/ErrorPage';

const App = () => {
    return (
        <>
       <Navbar/>
       <Switch>
       <Route exact path='/'>
        <Home/>
       </Route>


       <Route path='/about'>
        <About/>
       </Route>
       
       <Route path='/contact'>
        <Contact/>
       </Route>

       <Route path='/login'>
        <Login/>
       </Route>

       <Route path='/signup'>
        <Signup/>
       </Route>    
     
       <Route>
        <Errorpage/>
       </Route>
       </Switch>  
        </>

        
    )
}
export default App;