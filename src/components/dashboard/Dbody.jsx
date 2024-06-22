import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { fetchBookings } from '../../Services/BookingService';
import Card from '../card/Card'
function Dbody() {
  const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        fetchBookings()
       .then(data => setBookings(data))
       .catch(error => console.log('error',error));
    },[])
  return (
    <div className='dbody'>
        <div className="text">
        <h2>Appointments</h2>
        </div>
        <div className="cards">
        <Link to="/bookingform" style={{ textDecoration: 'none' }}>
            <div className="addcard">
            <i className="fa-duotone fa-plus addcardicon"></i>
            </div>
        </Link>
        {
        bookings.map((item,index)=>
        <Card data={item} key ={index}/>)
        }
        </div>
    </div>
  )
}
export default Dbody