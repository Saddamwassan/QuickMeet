import './bookingform.css'
import Nav from '../../components/dashboard/nav'
import React, { useState,Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Button from '../../components/buttons/Button';
import Footer from '../../components/dashboard/Footer';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function BookingForm() {
  // const[isFormVisible, setFormVisible] = useState(true);
  // const handleFormVisibility = ()=>{
  //   setFormVisible(false);
  // }
  // setter 
  const setter = ()=>{

  }
  // getter 
  const getter = ()=>{
    
  }
  function closeForm(){

  }
  // alert 
  const alert = ()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your meeting in booked!",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <>
      <Nav />
      <div className="bookingcontainer">
        <div className="bookingform">
          <h3>Book Your Meeting</h3>
          {/* title  */}
          <div className='row'>
            <label htmlFor="title" >Title:</label>
            <input type="text" placeholder='title' />
          </div>
          {/* url  */}
          <div className="row">
            <label htmlFor="url">URL:</label>
            <input type="text" placeholder='url' />
          </div>
          {/* editor  */}
          <div className='row'>
          <label htmlFor="">Description:</label>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello World</p>"
             
              // onReady={editor => {
              //     console.log(editor)
              // }}
              // onChange={(event, editor) => {
              //     console.log(editor.getData())
              // }}

              onBlur={(event, editor) => { }}

              onFocus={(event, editor) => { }}
            />
          </div>
          {/* duration  */}
          <div className="row">
            <label htmlFor="duration">Duration:</label>
            <div>
              <input type="number" className='durationinput'/>
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
            </table>
          <div className="unavailabledays">
            <div>
              <input type="checkbox" />
              <span>Add unavailable dates</span>
            </div>
            <p>Define specific dates to exclude from your weekly availibility.</p>
            <div className="btnrow">
              <Link to='/dashboard' className='cancel'>Cancel</Link>
              <Button type="Add booking" className="Add_booking" onClick={alert}/>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default BookingForm