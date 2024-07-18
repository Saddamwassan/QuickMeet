import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { fetchBookings } from '../../Services/BookingService';
import Card from '../card/Card'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getScheduleCount } from '../../Services/ScheduleService';
// dotenv.config();

function Dbody() {
  const scheduleCount = [];
  const [bookings, setBookings] = useState([]);
  const [chartData, setChartData] = useState([]);
  useEffect(()=>{
    fetchBookings()
   .then(data => setBookings(data))
   .catch(error => console.log('error',error));
},[]);
// for schedule count 
useEffect(()=>{
  getScheduleCount()
  .then(data=>setChartData(data))
  .catch(error=> console.log(error));
},[]);
chartData.forEach(item =>scheduleCount.push({
  name:item.schdl_dt,
  booked:item.tot_schdls
}));

const handleDelete = (id) => {
  setBookings(bookings.filter(booking => booking.id !== id));
};
  return (
    <div className='dbody'>
        <div className="text">
        <h2>Appointments</h2>
        </div>
        <BarChart
          width={500}
          height={300}
          data={scheduleCount}
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
        </BarChart>
    
        <div className="cards">
        <Link to="/bookingform" style={{ textDecoration: 'none' }}>
            <div className="addcard">
            <i className="fa-duotone fa-plus addcardicon"></i>
            </div>
        </Link>
        {
          bookings.map(
            (item,index) =>
            <Card data={item} key ={index} onDelete={handleDelete}/>
        )
        }
        </div>
    </div>
  )
}
export default Dbody