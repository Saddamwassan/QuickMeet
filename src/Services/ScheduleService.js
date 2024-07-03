import cookie from 'js-cookie';
import { generateNewToken } from './AuthService';
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
export const createSchedules = async(e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    // const dateandtime = e.target.date.value + e.target.time.value;
    const data = {fullname,email}
    console.log(data);
    try{
      const res = await axios.post('http://localhost:8000/schedules/create',data);
      if(!res.ok){
       return res.status;
      }
      console.log('booking created!');
      return res.data;
    }catch(err){
      throw err;
    }
  }