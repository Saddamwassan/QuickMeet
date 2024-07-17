import './bookingform.css'
import Nav from '../../components/dashboard/nav'
import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '../../components/buttons/Button';
import Footer from '../../components/dashboard/Footer';
import { Link } from 'react-router-dom';
import { createBookings } from '../../Services/BookingService';
import Swal from 'sweetalert2';
// import dotenv from 'dotenv';
// dotenv.config();
function BookingForm(){
  const [editorData, setEditorData] = useState('<p>this this</p>');
  const [urlValue ,setUrlValue] = useState('http://localhost:5173/myschedules/scheduleform/')

  const storeBooking =  async(e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = editorData;  
    const duration = e.target.duration.value;
    const url = e.target.url.value;
    const data = {title,duration,url,description}
    await createBookings(data)
    .then(
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Booking Created!",
        showConfirmButton: false,
        timer: 1500
      })
    )
    .catch(error=>console.log(error));
  }
  return (
    <>
      <Nav />
      <div className="bookingcontainer">
        <div className="bookingform">
          <form action="#" method='POST' onSubmit={storeBooking}>
            <h3>Book Your Meeting</h3>

            {/* title  */}
            <div className='row'>
              <label htmlFor="title" >Title:</label>
              <input type="text" placeholder='title' name='title' />
            </div>
            {/* url  */}
            <div className="row">
              <label htmlFor="url">URL:</label>
              <input type="text" placeholder='url' name='url' value={urlValue} onChange={(e)=>{setUrlValue(e.target.value)}}/>
            </div>
            {/* editor  */}
            <div className='row'>
              <label htmlFor="">Description:</label>
              <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorData(data);
                  console.log(data) // Update state with new data
                }}
              />
            </div>
            {/* duration  */}
            <div className="row">
              <label htmlFor="duration">Duration:</label>
              <div>
                <input type="number" className='durationinput' name='duration' />
                <span>minutes</span>
              </div>
            </div>
            <div className="textrow">
              <label htmlFor="">
                When will you be available for this meeting?
              </label>
            </div>
            <div className="availibility">
              {/* weekly  */}
              <div>
                <input type="radio" name='date' value="weekly" />
                <span>Weekly</span>
                <p>You're available for weekly meeting.</p>
              </div>
              {/* specific date  */}
              <div>
                <input type="radio" name='date' value="specific date" />
                <span>Specific dates</span>
                <p>You're available for specific date.</p>
              </div>
            </div>
            <div className="textrow">
              <label htmlFor="">
                Define your weekly availibility below.
              </label>
            </div>
            <table className='daystable'>
              <tbody>

                <tr>
                  <td>
                    <input type="checkbox" /><span>Sunday</span>
                  </td>
                  <td>
                    <input type="checkbox" /><span>Monday</span>
                  </td>
                  <td>
                    <input type="checkbox" /><span>Tuesday</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" /><span>Wednesday</span>
                  </td>
                  <td>
                    <input type="checkbox" /><span>Thursday</span>
                  </td>
                  <td>
                    <input type="checkbox" /><span>Friday</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" /><span>Saturday</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="unavailabledays">
              <div>
                <input type="checkbox" />
                <span>Add unavailable dates</span>
              </div>
              <p>Define specific dates to exclude from your weekly availibility.</p>
              <div className="btnrow">
                <Link to='/dashboard' className='cancel'>Cancel</Link>
                <Button name="Add booking" className="Add_booking" type='submit'/>
              </div>
            </div>
          </form>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default BookingForm