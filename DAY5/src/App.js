import React from 'react';
import './App.css';


import { BrowserRouter,Routes,Route } from 'react-router-dom';

 //import Login from './Logins';
import Signup from './Signup';
import About from './About';
import Contactus from './Contactus';
import Main from './Main';
import Pay from './Pay';
import Home from './Home'
import Review from './Review';
import Email from './Email';
import Seo from './Seo';
import Social from './Social';
import Login from './Login';
import Test from './Test';
import Crm from './Crm';
import Feedback from './Feedback';
//import Faq from './Faq';
//import { Domain } from '@mui/icons-material';
// <Route path="/Signup" element={<Signup/>}></Route>
//  <Route path="/Login" element={<Login/>}></Route>
//  <Route path="/Home" element={<Home/>}></Route>
//  <Route path="/About" element={<About/>}</Route>
//  <Route path="/Main" element={<Main/>}</Route>
//  <Route path="/Term" element={<Term/>}</Route>
function App() {
  return (
     <BrowserRouter>
<Routes>
<Route path="/" element={<Main/>}></Route>
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/Login" element={<Login/>}></Route>
<Route path="/Contactus" element={<Contactus/>}></Route>
<Route path="/Home" element={<Home/>}></Route>
<Route path="/About" element={<About/>}></Route>
<Route path="/Review" element={<Review/>}></Route>
<Route path="/Email" element={<Email/>}></Route>
<Route path="/Pay" element={<Pay/>}></Route>
<Route path="/Social" element={<Social/>}></Route>
<Route path="/Seo" element={<Seo/>}></Route>
<Route path="/Test" element={<Test/>}></Route>
<Route path="/Crm" element={<Crm/>}></Route>
<Route path="/Feedback" element={<Feedback/>}></Route>
 </Routes> 
 </BrowserRouter>
    //<Login/>
    //<div><Dashboard/></div>
    // <div><About/></div>
       //<div><Contact/></div>
       //<div><Main/></div>
      //<div><Home/></div>
      // <div><Term/></div>
  );
}

export default App;
