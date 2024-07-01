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
