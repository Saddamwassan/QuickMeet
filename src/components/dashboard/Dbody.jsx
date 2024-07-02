import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { fetchBookings } from '../../Services/BookingService';
import Card from '../card/Card'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../utils/data'

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
        {/* <BarChart /> */}
        </div>
       
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="booked" stackId="a" fill="#257AF9" />
          {/* <Bar dataKey="cancelled" stackId="a" fill="#FF0000" /> */}
        </BarChart>
    
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