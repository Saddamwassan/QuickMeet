import React,{useState,  useEffect} from 'react'
import Nav from '../../components/dashboard/nav'
import "./schedule.css"
import Footer from '../../components/dashboard/Footer';
import { Link } from 'react-router-dom';
import { deleteBookingSchedule, fetchSchedules } from '../../Services/ScheduleService';
import Swal from 'sweetalert2';
import { convertTimeStamp } from '../../helpers/TimeStampConvert';
function Myschedules(){
  const [schedule,setSchedule] = useState([]);
  useEffect(()=>{
    fetchSchedules()
    .then(data =>setSchedule(data))
    .catch(error => console.log('error',error))
  },[]);
   const handleDeleteSchedule = async(id)=>{
    console.log('deleted!');
    await deleteBookingSchedule(id)
    .then(setSchedule(schedule.filter((row)=>row.id !== id)))
    .catch(err =>console.log(err))
  }

// TimestampConverter()
  const alert = (id)=>{
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
        handleDeleteSchedule(id),
        Swal.fire({
          title: "Deleted!",
          text: "Your card has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1000
          
        });
      }
    });
  }
  return (
    <>
    <Nav/>
    <div className='myschedule'>
      <Link to="scheduleform">shedule Form</Link>
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
                  <td className='Date'>{item.schedule_dt ? convertTimeStamp(item.schedule_dt) : ''}</td>
                  <td className=''>{item.duration} minutes</td>
                  <td className='meetingtype'>{item.message}</td>
                  <td className='with'>{item.fullname}</td>
                  <td className='status'><div className='statusbtn' style={{backgroundColor:item.status?'green':'#DC3545'}}>{item.status?"Scheduled":"Cancel"}</div></td>
                  <td className='action'>
                    <Link to='#' className='actioncancel' onClick={()=>{alert(item.id)}}>Cancel</Link>
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