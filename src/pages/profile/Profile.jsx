import React,{useState} from 'react'
import Nav from '../../components/dashboard/nav'
import './profile.css'
import image from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
import Input from '../../components/input'
import Button from '../../components/buttons/Button'
import Footer from '../../components/dashboard/Footer'
import Swal from 'sweetalert2'
function Profile() {
  const [isShow, setShow] = useState(false);
  const [isShowConfirmPass,setShowConfirmPass] = useState(false);
  console.log(isShow)
  const alert = ()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Profile is updated!",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <>
    <Nav />
    <div className='profile'>
    <h1>Settings</h1>
    <img src={image} alt="profile" className='profilepic' />
    <label htmlFor="profilepic" className='profilelabel'>Choose Profile Pic</label>
    <input id ="profilepic" type="file" className='profilelink' />
    {/* username  */}
      <div className='username'>
      <label htmlFor="">First Name</label>
      <Input className='input' placeholder="Name" />
      </div>
      {/* last name  */}
      <div className='username'>
      <label htmlFor="">Last Name</label>
      <Input className='input' placeholder="Name" />
      </div>
       {/* email  */}
       <div className='username'>
      <label htmlFor="Your email:" >Email</label>
      <Input className='input'placeholder="Email" />
      </div>
      {/* password */}
      <div className='username'>
      <label htmlFor="Your password:" >Password</label>
      <div className="password">
      <input type={isShow?"text":"password"} className='passwordinput' placeholder="Password" />
      {isShow
      ?
      <i class="fa-regular fa-eye-slash eyeicon" onClick={()=>setShow(false)}></i>
      :
      <i className="fa-regular fa-eye eyeicon" onClick={()=>setShow(true)}></i>
    }
      </div>
      </div>
      {/* confirm password  */}
            {/* password */}
            <div className='username'>
      <label htmlFor="Your password:" >Confirm Password</label>
      <div className="password">
      <input type={isShowConfirmPass?"text":"password"} className='passwordinput' placeholder="Password" />
      {isShowConfirmPass
      ?
      <i class="fa-regular fa-eye-slash eyeicon" onClick={()=>setShowConfirmPass(false)}></i>
      :
      <i className="fa-regular fa-eye eyeicon" onClick={()=>setShowConfirmPass(true)}></i>
    }
      </div>
      </div>
      <Button type='save' className='Add_booking' onClick={alert}/>
    </div>
    <Footer />
    </>
  )
}

export default Profile