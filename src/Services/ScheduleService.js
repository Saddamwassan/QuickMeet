import cookie from 'js-cookie';
import { generateNewToken } from './AuthService';
import axios from 'axios';
export const fetchSchedules = async () => {
    try {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookie.get('access'),
            }
        }
        const response = await fetch('http://localhost:8000/schedules', requestOptions)
        if (!response.ok) {
            if (response.status === 401) {
                console.log("Token expired and unauthorized!" + response.statusText);
                await generateNewToken();
                return fetchSchedules();
            } else {
                throw new Error('some other problem' + response.statusText)
            }
        }
        const data = await response.json()
        console.log('working!')

        return data;
    } catch (error) {
        throw error;
    }
}
// submit schedule 
export const createSchedules = async(data) => {
    try{
      const res = await axios.post('http://localhost:8000/schedules/create',JSON.parse(data));
      if(!res.ok){
       return res.status;
      }
      return res.data;
    }catch(err){
      throw err;
    }
  }
//   get schedule stats in chart 
export const getScheduleCount = async () => {
    try {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookie.get('access'),
            }
        }
        const response = await fetch('http://localhost:8000/schedules/count', requestOptions)
        if (!response.ok) {
            if (response.status === 401) {
                console.log("Token expired and unauthorized!" + response.statusText);
                await generateNewToken();
                return getScheduleCount();
            } else {
                throw new Error('some other problem' + response.statusText)
            }
        }
        const data = await response.json()
        console.log('schedule count api working!')
        return data;
    } catch (error) {
        throw error;
    }
}
// delete schedule 
export const deleteSchedule = async(id) =>{
    try {
      const requestOptions = {
        method: 'delete',  
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookie.get('access'),
        },
      };
      const response  = await fetch(`http://localhost:8000/schedules/delete/${id}`, requestOptions);
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
      return data;
    } catch (error){
      throw error;
    }
  }