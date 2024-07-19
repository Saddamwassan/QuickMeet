import React,{useState} from 'react'
import "./schedule.css"
import Button from '../../components/buttons/Button'
import Cancel from '../../components/buttons/cancel'
import { createSchedules } from '../../Services/ScheduleService'
import StripeCustomCheckout from './StripeCustomCheckout'
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
      //  await createSchedules(data)
      // .then(
      //   alert,
      //   setScheduleData(initialValues),
      //     )
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
        timer: 1000
      });
    }
  return (
  //  schedule form 
  <>
  <div className='main'>
  <div className='schedule'>
    <form action="#" method='POST' onSubmit={handleSchedule}>
    <h3>Confirm booking</h3>
    <input type="datetime-local" className='date' name='dateTime' value = {scheduleData.dateTime} onChange={handleChange} required/>
    <div className='row'>
      <div className='name'>
        <label htmlFor="name">
          Your Name:
        </label>
        <input type="text" name='fullname' value = {scheduleData.fullname} onChange={handleChange} required/>
      </div>
      <div className='name'>
        <label htmlFor="name"> Your Email: </label>
        <input type="text" name='email' value = {scheduleData.email} onChange={handleChange} required/>
      </div>
    </div>
    <div className="buttons">
    <Cancel value="Cancel" className="cancel" />
    {/* <StripeCheckout stripeKey="pk_test_51PdQ0RJBsmxDcpsk1350mz6wspXS6WizhQCy9GHyFhPgtUK6DtObzTHBHhtUHAvX2orxd0sPp36iGNMIx9dLvGgK005lrF03qS" name='Buy Meeting' token={makePayment} amount={booking.price * 100}>
    </StripeCheckout> */}
    <Button name="Book Event" className="Add_booking"  type="submit"/>
    </div>
    </form>
  </div>
  <StripeCustomCheckout />
  </div>
  </>
  )
}

export default ScheduleForm