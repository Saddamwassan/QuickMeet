import { React,useState } from 'react'
import './Checkout.css'
import { sendPaymentToStripe } from '../../Services/PaymentService';
function StripeCustomCheckout() {
    const initialValues = {
      email:"",
      cardnumber:"",
      date:"",
      cvc:""
      }
    const [formdata,setFormData] = useState(initialValues);
    const [booking ,setBooking] = useState({
        name:"Brock Lesnar",
        price:100
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData(preValue=>({
            ...preValue,
            [name]:value
        }))
    }
    // for stripe payment
    const handleSubmit = (e)=>{
        e.preventDefault();
        sendPaymentToStripe(formdata,booking)
        .then(alert("Details Saved successfully!"))
        .catch(err =>console.log(err))
    }

  return (
    <>
    <div className='checkout-main'>
    <div className='checkout-div'>
        <h2>Book Your Meeting</h2>
        <hr />
    <form action="#" method='POST' onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' name='email' onChange={handleChange} value={formdata.email}/>
        {/* Card number  */}
        <input type="number" placeholder='Card number' name='cardnumber' onChange={handleChange} value={formdata.cardnumber}/>
        <div className='row'>
            <input type="date" placeholder='Date' name='date' onChange={handleChange} value={formdata.date}/>
            <input type="number" placeholder='CVC' name='cvc' onChange={handleChange} value={formdata.cvc}/>
        </div>
        <div className='checkout-btn'>
            <button type="submit">Book now</button>
        </div>
    </form>

    </div>
    </div>
    </>
  )
}

export default StripeCustomCheckout