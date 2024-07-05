import './bookingform.css';
import Nav from '../../components/dashboard/nav';
import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '../../components/buttons/Button';
import Footer from '../../components/dashboard/Footer';
import { Link, useParams } from 'react-router-dom';
import { getBookingDetailsById, updateBookingById } from '../../Services/BookingService';

function Edit() {
  const { id } = useParams(); // Access the ID from the URL
  const [formdata, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    link: ''
  });
 
  // to get plain text for ckeditor 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };  

  const updateBookingData = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formdata);
    try {
      let data = JSON.stringify(formdata)
      let response = await updateBookingById(id, data)
      const responseText = await response.text(); // Read the response text
      alert(responseText); 

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBookingDetailsById(id)
      .then(data => setFormData({
        title: data.title,
        description: data.description,
        duration: data.duration,
        link: data.link
      }))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <>
      <Nav />
      <div className="bookingcontainer">
        <div className="bookingform">
          <h3>Update Booking Type {id}</h3>
          <form action="" method='POST' onSubmit={updateBookingData}>
            {/* title  */}
            <div className='row'>
              <label htmlFor="title" >Title:</label>
              <input
                type="text"
                placeholder='title'
                name="title"
                id="title"
                value={formdata.title}
                onChange={handleChange}
              />
            </div>
            {/* url  */}
            <div className="row">
              <label htmlFor="url">URL:</label>
              <input
                type="text"
                placeholder='url'
                name="link"
                value={formdata.link}
                onChange={handleChange}
              />
            </div>
            {/* editor  */}
            <div className='row'>
              <label htmlFor="">Description:</label>
              <CKEditor
                editor={ClassicEditor}
                data={formdata.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFormData(prevData => ({
                    ...prevData,
                    description: data
                  }));
                }}
              />
            </div>
            {/* duration  */}
            <div className="row">
              <label htmlFor="duration">Duration:</label>
              <div>
                <input
                  type="number"
                  className='durationinput'
                  name="duration"
                  value={formdata.duration}
                  onChange={handleChange}
                />
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
                    <input type="checkbox" />
                    <span>Sunday</span>
                  </td>
                  <td>
                    <input type="checkbox" />
                    <span>Monday</span>
                  </td>
                  <td>
                    <input type="checkbox" />
                    <span>Tuesday</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                    <span>Wednesday</span>
                  </td>
                  <td>
                    <input type="checkbox" />
                    <span>Thursday</span>
                  </td>
                  <td>
                    <input type="checkbox" />
                    <span>Friday</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                    <span>Saturday</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="unavailabledays">
              <div>
                <input type="checkbox" />
                <span>Add unavailable dates</span>
              </div>
              <p>Define specific dates to exclude from your weekly availability.</p>
              <div className="btnrow">
                <Link to='#' className='cancel'>cancel</Link>
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

export default Edit;
