import axios from "axios";
import Swal from 'sweetalert2';
import {validate} from './Validation'
import cookie from 'js-cookie'
// handle sigup 
export const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {email,password}

    // login user function 
   function loginUser(){
    try{
      axios.post('http://localhost:8000/users/login',data)
          .then(res => {
            e.target.reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "you are logged in successfully",
                showConfirmButton: false,
                timer: 1500
              });
              setTokens(res.data.accessToken,res.data.refreshToken);

           return res.data;
          }).catch(err => console.log(err));
    } catch(err){
      console.log(err);
    }
  }
  function setTokens(access,refresh){
    // document.cookie = "access=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
   cookie.set('access',access,{secure:true,expires:5,sameSite:"None"})
   cookie.set('refresh',refresh,{secure:true,expires:5,sameSite:"None"})
  // localStorage.clear();
  // localStorage.setItem('access',access);
  // localStorage.setItem('refresh',refresh);

  //  console.log(cookie.get('access'));
  }
  loginUser();
  }
//   handle signup 
  // export const handleSingupSubmit = (event) =>{
  //   event.preventDefault();
  //   const errors = validate(formValues);
  //   setFormErrors(errors);
  //   if (Object.keys(errors).length === 0){
  //     setIsSubmit(true);
  //     const data = { ...formValues };
  //     axios.post('http://localhost:8000/users/create', data)
  //       .then(res => {
  //         event.target.reset();
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "You are registered! Please login",
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         setFormValues(initialValues);
  //       })
  //       .catch(err => console.log(err));
  //   } else {
  //     setIsSubmit(false);
  //   }
  // }