import cookie from 'js-cookie';

export const fetchBookings = async() => {
    try {

      const requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + cookie.get('access'),
          'Content-Type': 'application/json',
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
      console.log(error);

      return null;
    }
}