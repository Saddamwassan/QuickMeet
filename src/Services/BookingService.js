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
// create bookings 
export const createBookings = async(data) => {
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
// get booking by id 
export const getBookingDetailsById = async(id) => {
  try {
    const requestOptions = {
      method: 'GET',  
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.get('access'),
      },
    };
    const response  = await fetch(`http://localhost:8000/bookings/${id}`, requestOptions);
    if (!response.ok) {
      if (response.status === 401) { // Token expired or unauthorized
        console.log('Token expired or unauthorized. Generating new token...');
        await generateNewToken();
        return getBookingDetailsById(id); // Retry the function after generating a new token
      } else {
        throw new Error('Failed to fetch bookings: ' + response.statusText);
      }
    }
    const data = await response.json();
    console.log('working!')
    console.log(data);
    return data;
  } catch (error){
    throw error;
  }
}
// update booking by id 
export const updateBookingById = async(id,formdata) => {
  console.log('formdata is found'+formdata);
  console.log('id is found'+ id);
  try {
    const requestOptions = {
      method: 'PUT',  
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + cookie.get('access'),
      },
      body:formdata
    };
    const response  = await fetch(`http://localhost:8000/bookings/update/${id}`, requestOptions);
    if (!response.ok) {
      if (response.status === 401) { // Token expired or unauthorized
        console.log('Token expired or unauthorized. Generating new token...');
        // await generateNewToken();
        // return updateBookingById(id,formdata); // Retry the function after generating a new token
      } else {
        throw new Error('Could not update booking: ' + response.statusText);
      }
    }else{
      console.log(response);
      // alert(response.text());
      // const data = await response.json();
      console.log('working!')
      console.log("data", response);
      return response;
    }
  } catch (error){
    throw error;
  }
}
// delete card 
export const deleteBookingCard = async(id) => {
  console.log(id)
  try {
    const requestOptions = {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.get('access'),
      },
    };
    const response  = await fetch(`http://localhost:8000/bookings/delete/${id}`, requestOptions);
    if (!response.ok){
      if (response.status === 401){ // Token expired or unauthorized
        console.log('Token expired or unauthorized. Generating new token...');
        await generateNewToken();
        return getBookingDetailsById(id); // Retry the function after generating a new token
      } else {
        throw new Error('Failed to fetch bookings: ' + response.statusText);
      }
    }
    const data = await response.json();
    console.log('working!')
    console.log(data);
    return data;
  } catch (error){
    throw error;
  }
}