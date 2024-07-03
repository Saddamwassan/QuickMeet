import React,{useEffect, useState} from 'react'
import "./schedule.css"
import Button from '../../components/buttons/Button'
import Cancel from '../../components/buttons/cancel'
import { createSchedules } from '../../Services/ScheduleService'
import Swal from 'sweetalert2'
function ScheduleForm(){
  
  const [shedule,setSchedule] = useState([]);
  useEffect(()=>{
  createSchedules()
  .then(data =>setSchedule(data))
  .catch(err => console.log(err))
  ,[]})
    // alert 
    const alert = ()=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your meeting is booked!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  return (
  //  schedule form 
  <>
  <div className='main'>
  <div className='schedule'>
    <form action="#" method='POST' onSubmit={createSchedules() }>
    <h3>Confirm booking</h3>
    <input type="date" className='date'name='date'/>
    <input type="time" className='time' name='time'/>
    <div className='row'>
      <div className='name'>
        <label htmlFor="name">
          Your Name:
        </label>
        <input type="text" name='fullname'/>
      </div>
      <div className='name'>
        <label htmlFor="name"> Your Email: </label>
        <input type="text" name='email'/>
      </div>
    </div>
    <dive className="buttons">
    <Cancel value="Cancel" className="cancel" />
    <Button type="Book Event" className="Add_booking" onClick={alert}/>
    </dive>
    </form>
  </div>
  </div>
  </>
  )
}

export default ScheduleForm