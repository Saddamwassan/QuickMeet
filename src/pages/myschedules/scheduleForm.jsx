import React,{useState} from 'react'
import "./schedule.css"
import Button from '../../components/buttons/Button'
import Cancel from '../../components/buttons/cancel'
import { createSchedules } from '../../Services/ScheduleService'
import Swal from 'sweetalert2'
function ScheduleForm(){
  const initialValues = {
    fullname:'',
    email:'',
    dateTime:''
  }
  const [scheduleData,setScheduleData] = useState(initialValues);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScheduleData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };  
  const handleSchedule = async (e)=>{
    e.preventDefault();
    try{
      const data = JSON.stringify(scheduleData);
       await createSchedules(data)
      .then(
        alert,
        setScheduleData(initialValues),
    )
    }catch(err){
      console.log(err);
    }
  }
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
    <form action="#" method='POST' onSubmit={handleSchedule}>
    <h3>Confirm booking</h3>
    <input type="datetime-local" className='date' name='dateTime' value = {scheduleData.dateTime} onChange={handleChange}/>
    <div className='row'>
      <div className='name'>
        <label htmlFor="name">
          Your Name:
        </label>
        <input type="text" name='fullname' value = {scheduleData.fullname} onChange={handleChange}/>
      </div>
      <div className='name'>
        <label htmlFor="name"> Your Email: </label>
        <input type="text" name='email' value = {scheduleData.email} onChange={handleChange}/>
      </div>
    </div>
    <dive className="buttons">
    <Cancel value="Cancel" className="cancel" />
    <Button name="Book Event" className="Add_booking"  type="submit" />
    </dive>
    </form>
  </div>
  </div>
  </>
  )
}

export default ScheduleForm