import React from "react";
import './TrainerRegister.css';
import './App.css';
import {Link} from 'react-router-dom';

const Submit_form = (event) =>{
    event.preventDefault();
    alert('Registeration Successful! Start your fitness journey with FitConnect.', )
}
const Trainer_Register=()=>{
    return(
        <div className="Register">
            <div id="line">
            <h3 id="typeofuser">___Trainer___</h3>
            <h1 id="Login_h">Registration</h1>
    
            <form id="Register_form2" onSubmit={Submit_form}>
                <h4 class="form_des2">Name</h4><br/>
                <input class="form_field2" type="text" placeholder="Enter your full name"/><br/>
                <h4 class="form_des2">E-mail</h4><br/>
                <input class="form_field2" type="email" placeholder="Enter your e-mail address"/><br/>
                <h4 class="form_des2">Age</h4><br/>
                <input class="form_field2" type="number" placeholder="Enter you age"/><br/>
                
                <h4 class="form_des2">Gender</h4><br/>
                <input type="radio" name="Gender" value="Female" id ="F_gender2"/>
                <label id="F2" class="form_des2" for="Female">Female</label>

                <input type="radio" name="Gender" value="Male" id ="M_gender2"/>
                <label id="M2" class="form_des2" for="Male">Male</label><br/>

                <h4 class="form_des2">Weight</h4><br/>
                <input class="form_field2" type="number" placeholder="Bodyweight in KGs"/><br/>
                <h4 class="form_des2">Height</h4><br/>
                <input class="form_field2" type="number" placeholder="Height in inches"/><br/><br/>
                <input class="form_field2" id="submitb2" type="submit" value="Register" /><br/>
                <h6 id="TC2" class="form_des">*T&C: Only certified fitness trainers can register</h6>
            </form>
            </div>
            <div className='img'></div>
            <div className="img_fitness"></div>

            <Link to='./' id="trainer">User Registeration</Link>
            
        </div>
    )
}

export default Trainer_Register