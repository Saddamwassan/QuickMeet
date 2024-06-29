import cookie from 'js-cookie';
import { generateNewToken } from './AuthService';
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
      if(!response.ok){
        if(response.status(401)){
          console.log('token expired!');
        }
        
      
        throw new Error('Failed to fetch bookings');
      }
      const data = await response.json();
      console.log('working!')
      return data;
    } catch (error){
      console.log('booking page catch');
            await generateNewToken();
            await fetchBookings();
    }
}
