export const fetchServices = async()=>{
    try{
        const requestOptions = {
            method: 'GET',
            headers :{
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch('http://localhost:8000/schedules',requestOptions)
        if(!response.ok){
            throw new Error('failed to fetch schedules data')
        }
        const data = response.json()
        return data;
    }catch(error){
        console.log(error)
        return null;
    }
}