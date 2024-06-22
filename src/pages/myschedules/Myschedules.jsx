import React,{useState,  useEffect} from 'react'
import Nav from '../../components/dashboard/nav'
import "./schedule.css"
import Footer from '../../components/dashboard/Footer';
import { Link } from 'react-router-dom';
// import data from '../../components/mydata';
import { fetchServices } from '../../Services/ScheduleService';
import Swal from 'sweetalert2';
// import { COLOR } from 'rsuite/esm/utils/constants';
import { convertTimeStamp } from '../../helpers/TimeStampConvert';
function Myschedules(){
  const [schedule,setSchedule] = useState([]);
  useEffect(()=>{
    fetchServices()
    .then(data =>setSchedule(data))
    .catch(error => console.log('error',error))
  },[]);
console.log(convertTimeStamp("2024-06-19T06:34:46"));

 

// TimestampConverter()
  const alert = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this meeting!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your card has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
    <>
    <Nav/>
    <div className='myschedule'>
      <h3>My Bookings</h3>
        {/* labels  */}
        <table className='tablerow'>
          <thead>
          <tr>
            <th>Date</th>
            <th>Duration</th>
            <th>Meeting Type</th>
            <th>With</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {
               schedule.map((item)=>
                <tr key={item.id}>
                  <td className='day'>{item.schedule_dt ? convertTimeStamp(item.schedule_dt) : ''}</td>
                  <td className=''>{item.duration} minutes</td>
                  <td className='meetingtype'>{item.message}</td>
                  <td className='with'>{item.fullname}</td>
                  <td className='status'><div className='statusbtn' style={{backgroundColor:item.status?'green':'#DC3545'}}>{item.status?"Scheduled":"Cancel"}</div></td>
                  <td className='action'>
                    <Link to='#' className='actioncancel' onClick={alert}>Cancel</Link>
                    <Link to='/editpage' className='actionreschedule'>Reschedule</Link>
                  </td>
                </tr>
              )
            }
            
          </tbody>
        </table>
    </div>
    <Footer />
    </>
  )
}

export default Myschedules