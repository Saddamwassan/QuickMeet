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
      console.log(cookie.get('access'));
      const response  = await fetch("http://localhost:8000/bookings", requestOptions);
      if (!response.ok){
        throw new Error('Failed to fetch order children');
      }
      const data = await response.json();
      return data;
    } catch (error){
      console.log('token backend working')
      generateNewToken()
    }
}
