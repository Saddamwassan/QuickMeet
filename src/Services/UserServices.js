
export const createUser = async() => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      };
      const response  = await fetch("http://localhost:8000/users/create", requestOptions);
      if (!response.ok) {
        throw new Error('Failed to fetch order children');
      }
      const data = await response.json();
      console.log(data)
    //   return data;
    } catch (error) {
      console.log(error);
      return null;
    }
}