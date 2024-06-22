import React from 'react'
import "./schedule.css"
import { Link } from 'react-router-dom'
function Schedule() {
  return (
    <tr className='schedules'>
      {/* value  */}
    <td>
    <p className='day'>Monday</p>
    </td>
    <td>
    <p className='time'>15 mins</p>
    </td>
    <td>
    <p className='meetingType'>Business meeting</p>
    </td>
    <td>
    <p className='meetwith'>Ali Bhai</p>
    </td>
    <td className='statuscontainer'>
    <p className='status'>scheduled</p>
    
    </td>
    
    <td className='statuscontainer'>
    <Link style={{ textDecoration: 'none' }}>
    <p className='cancel'>cancel</p>
    </Link>
    <Link style={{ textDecoration: 'none' }}>
    <p className='reschedule'>Reschedule</p>
    </Link>
    </td>
    </tr>
  )
}

export default Schedule