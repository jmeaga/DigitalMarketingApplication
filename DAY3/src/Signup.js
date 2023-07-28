import React from 'react'
import './Signup.css';
import {useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {
const[name,setName]=useState("");
const[mail,setMail] = useState("");
const[password,setPassword] = useState("");
const[contact,setCont]=useState("");
const[confirmpassword,setConpassword] = useState("");


const navigate=useNavigate();
const handleChange = async (e) => {
  e.preventDefault()
  try{
    const response= await axios
     .post('http://127.0.0.1:8080/api/v1/auth/register', {
         name: name,
         email: mail,
         password: password,
         contact: contact,
         confirmpassword: confirmpassword,
       });
         // Assuming your server responds with user data upon successful login
         if(response.status ===200){
           const user=response.data;
           
        
         navigate('/Home');
         setName('');
         setMail('');
         setPassword('');
         setConpassword('');
         }
   }
       catch(error) {
         console.error('Login failed:', error);
       };

      }
  return (
      <div className='box1'>
  
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="https://thumbs.dreamstime.com/b/vector-illustration-singing-woman-karaoke-party-copy-space-75761308.jpg" alt="easyclass" />
                <h4>Register here!</h4>
              </div>

              <div class="heading">
                <h2>Welcome!</h2>
                <a><img className="google"src="https://th.bing.com/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=ImgDet&rs=1"></img></a>
                <br></br>
                <h6>--------Or--------</h6>
                <br></br>
                <h6>Already have an account?</h6>
               <Link to="/Login"> <a href="#" class="toggle">Log In</a></Link>
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text" onChange = {e => setName(e.target.value)}
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Name'
                    required
                  />
                  
                </div>

                
                
                <div class="input-wrap"> 
                  <input
                    type="email" onChange = {e => setMail(e.target.value)}
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Email'
                    required
                  />
                  
                </div>
                
                    
                <div class="input-wrap"> 
                  <input
                    type="text" onChange = {e => setPassword(e.target.value)}
                    minlength="7"
                    class="input-field"
                    autocomplete="off"
                    placeholder='password'
                    required
                  />
                      </div>
                <div class="input-wrap"> 
                <input
                  type="text" onChange = {e => setCont(e.target.value)}
                  minlength="7"
                  class="input-field"
                  autocomplete="off"
                  placeholder='contact'
                  required
                />
                  
                </div>
                <div class="input-wrap"> 
                <input
                  type="text" onChange = {e => setConpassword(e.target.value)}
                  minlength="7"
                  class="input-field"
                  autocomplete="off"
                  placeholder=' confirm password'
                  required
                />
                
              </div>

                <div class="text">
                <input type="checkbox"></input> By signing up, I agree to the Terms of Services and Privacy Policy
                </div>
                <br>
                </br>
                <Link to="/Home"><button onClick={handleChange} class="sign-btn">Sign Up</button></Link>
            
              </div>
            </form>

            
          </div>

          <div class="carousel">
            
            <img className="wall" src="https://arunseo.com/wp-content/uploads/2022/06/SEARCH-ENGINE-MARKETING.gif" style={{height:"600px" }}></img>
            

           
          </div>
        </div>
      </div>
   

 
    </div>
    
  )
}

export default Signup