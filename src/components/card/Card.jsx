import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./card.css"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Card({ data,value }) {
  // console.log(data);
  const alert = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
  const [isOn, setStatus] = useState(false);
  return (
    <div className='card'>
      <h3>{`${data.duration} ${data.title}`}</h3>
      {/* link  */}
      <div className="linkdiv">
        <span className='linkitself'>{data.link}</ span>
        <CopyToClipboard text={data.link}>
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
        <Link className="delete" onClick={alert}>Delete
        </Link>
        <Link to="/editpage" className="edit">Edit</Link>
      </div>
    </div>
  )
}

export default Card