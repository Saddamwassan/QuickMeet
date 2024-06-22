import React,{useState,useEffect} from "react";
import './signup.css';
import logo from '../../assets/logo.png';
import axios from "axios";
import Swal from "sweetalert2";
import { validate } from "../../Services/Validation";
function Signup(){
  const[isShow, setShow] = useState(false);
  const[isShowConfirmPass, setShowConfirmPass] = useState(false);

  // form validation 
  const initialValues = {firstname :"", lastname : "", email : "", password : "", confirm_password : ""}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChanges = (e)=>{
    console.log(e);
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
    // console.log(formValues);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0){
      setIsSubmit(true);
      const data = { ...formValues };
      axios.post('http://localhost:8000/users/create', data)
        .then(res => {
          event.target.reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You are registered! Please login",
            showConfirmButton: false,
            timer: 1500
          });
          setFormValues(initialValues);
        })
        .catch(err => console.log(err));
    } else {
      setIsSubmit(false);
    }
  }
  useEffect(()=>{
    // console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])
  return (
    <form action="" method="POST" className="signupform" onSubmit={handleSubmit}>
      <img src={logo} alt="logo" className='logologin' />
    <h1>Signup for Your Account</h1>
    <div className="namediv">
    {/* firstname  */}
    <div className="firstnamediv">
    <label htmlFor="">First name*</label>
    <input className="nameinput" type="text" placeholder="first name" name="firstname" value ={formValues.firstname} onChange={handleChanges}/>
    <p>{formErrors.firstname}</p>
    </div>
    {/* lastname  */}
    <div className="firstnamediv">
    <label htmlFor="" className="lastnamelabel">last name*</label>
    <input className="nameinput" type="text" placeholder="last name" name="lastname"  value ={formValues.lastname} onChange={handleChanges}/>
    <p>{formErrors.lastname}</p>
    </div>
    </div>
    {/* email  */}
    <div className="rowdiv">
    <label htmlFor="">Email*</label>
    <input type="text" placeholder="Enter your email" name="email"  value ={formValues.email} onChange={handleChanges}/>
    <p>{formErrors.email}</p>
    </div>
    {/* password  */}
    <div className="rowdiv">
    <label htmlFor="">Password*</label>
    <div className="password">
      <input type={isShow?"text":"password"} className='passwordinput' placeholder="Create a password" name="password"  value ={formValues.password} onChange={handleChanges}/>
      {isShow
      ?
      <i className="fa-regular fa-eye-slash eyeicon" onClick={()=>setShow(false)}></i>
      :
      <i className="fa-regular fa-eye eyeicon" onClick={()=>setShow(true)}></i>
      }
    </div>
    <p>{formErrors.password}</p>
    </div>

    {/* confirm password  */}
    <div className="rowdiv">
    <label htmlFor="">Confirm password*</label>
    <div className="password">
      <input type={isShowConfirmPass?"text":"password"} className='passwordinput' placeholder="Confirm password" name="confirmpassword" value ={formValues.confirmpassword} onChange={handleChanges}/>
      {isShowConfirmPass
      ?
      <i className="fa-regular fa-eye-slash eyeicon" onClick={()=>setShowConfirmPass(false)}></i>
      :
      <i className="fa-regular fa-eye eyeicon" onClick={()=>setShowConfirmPass(true)}></i>
    }
      </div>
    <p>{formErrors.confirmpassword}</p>
    </div>

    
    <button className="signupbtn" type = "submit" > Sign up</button>
    {/*  hrdiv  */}
    <div className="hrdiv">
     <div className="hr"></div>
     <span className="hrtext" >OR</span>
    </div>
    {/* signup with google  */}
    <button className="signUpWithGoogle"> <i className="fa-brands fa-google" type="google"></i> <span> Signup with google</span></button>
  </form>
  )
}

export default Signup