import axios from "axios";
import Swal from 'sweetalert2';
// import { validate } from './Validation'
import cookie from 'js-cookie'
// import { fetchBookings } from "./BookingService";
// import { fetchSchedules } from "./ScheduleService";
// handle sigup 
export const handleSubmit = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  const data = { email, password }

  // login user function 
  async function loginUser() {
    try {
      const res = await axios.post('http://localhost:8000/users/login', data)
      e.target.reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "you are logged in successfully",
        showConfirmButton: false,
        timer: 1500
      });
      setTokens(res.data.accessToken, res.data.refreshToken);
      return res.data;
    } catch (err){
      console.log('api not working boy!');
      console.log(err);
    }
  }
  
  await loginUser();
}
export function setTokens(access, refresh) {
  // document.cookie = "access=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
  cookie.set('access', access, { secure: true, expires: 5, sameSite: "None" })
  cookie.set('refresh', refresh, { secure: true, expires: 5, sameSite: "None" })
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
export async function generateNewToken(){
  try {
    const refreshToken = cookie.get('refresh');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + refreshToken
      }
    }
    console.log('Using refresh token:', refreshToken);
    const res = await fetch('http://localhost:8000/token', requestOptions);
    if (!res.ok){
      throw new Error('Failed to fetch new token');
    }
    const data = await res.json();
    console.log(data);
    // console.log(res)
    setTokens(data.actoken,data.reftoken);
    // fetchBookings();
    // fetchSchedules();
    return data;
  } catch (err) {
    console.error('Error in generateNewToken:', err);
    return null;
  }
}