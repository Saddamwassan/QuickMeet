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
            throw new Error('failed to fetch schedules data')
        }
        const data = response.json()
        return data;
    } catch (error) {
        generateNewToken()

    }
}