import cookie from 'js-cookie';
import { generateNewToken } from './AuthService';
import axios from "axios";

export const fetchBookings = async() => {
    try {
      const requestOptions = {
        method: 'GET',  
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookie.get('access'),
        },
      };
      // console.log(cookie.get('access'));
      const response  = await fetch("http://localhost:8000/bookings", requestOptions);
      if (!response.ok) {
        if (response.status === 401) { // Token expired or unauthorized
          console.log('Token expired or unauthorized. Generating new token...');
          await generateNewToken();
          return fetchBookings(); // Retry the function after generating a new token
        } else {
          throw new Error('Failed to fetch bookings: ' + response.statusText);
        }
      }
      const data = await response.json();
      console.log('working!')
      return data;
    } catch (error){
      throw error;
    }
}
export const createBookings = async(e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const url = e.target.url.value;
  // const description = e.target.description.value;  
  const duration = e.target.duration.value;
  const data = {title,duration,url}
  try{
    const res = await axios.post('http://localhost:8000/bookings/create',data);
    if(!res.ok){
     return res.status;
    }
    console.log('booking created!');
    return res.data;
  }catch(err){
    throw err;
  }
}
