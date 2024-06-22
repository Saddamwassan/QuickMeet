import axios from "axios";
import Swal from 'sweetalert2';
import {validate} from './Validation'

// handle sigup 
export const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {email,password}
  
    axios.post('http://localhost:8000/users/login', data)
        .then(res => {
            console.log(res);
            e.target.reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "you are logged in successfully",
              showConfirmButton: false,
              timer: 1500
            });
        })
        .catch(err => console.log(err));
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