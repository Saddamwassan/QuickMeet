import React, { useState,useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./card.css"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
// import { editBookingData } from '../../Services/handleEdit';
import { deleteBookingCard } from '../../Services/BookingService';
function Card({data, onDelete }){
  // for deleting card 
  const deleteBookingData = async(e)=>{
    await deleteBookingCard(`${data.id}`)
    .then(onDelete(data.id))
    .catch(err=>console.log(err))
  }
  const [isOn, setStatus] = useState(false);

  return (
    <div className='card'>
      <h3>{`${data.duration} ${data.title}`}</h3>
      {/* link  */}
      <div className="linkdiv">
        <span className='linkitself'>{`${data.link}${data.id}`}</ span>
        <CopyToClipboard text={`${data.link}${data.id}`}>
        <Link to="#" className='copylink'>copy link</Link>
        </CopyToClipboard>
      </div>
      {/* booking status  */}
      <div className="statusDiv">
        <div className="status">
          <input className="slider" type="checkbox" onClick={() => setStatus(isBooking => !isBooking)} />
          <span>Booking is {isOn ? "ON" : "OFF"}</span>
        </div>
        <div className='durationDiv'>
          <i className="fa-regular fa-clock"></i>
          <span>{`${data.duration} mins`}</span>
        </div>  
      </div>
      <div className="description">
        <p>{data.description}</p>
      </div>
      <div className="share">
        <h4>Share:</h4>
        <a href="gmail"><i className="fa-regular fa-envelope"></i></a>
        <a href="linkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="x"><i className="fa-brands fa-x-twitter"></i></a>
      </div>
      <div className="editdiv">
        <button onClick={deleteBookingData} className='delete'>Delete</button>
        <Link to={`/editpage/${data.id}`} className="edit">Edit</Link>
      </div>
    </div>
  )
}

export default Card