import React from 'react'

const Booking = () => {
  return (
    <div className='booking'>
      <form action="" className='booking__form'>
        <div className="booking__parameters">
          <select name="" id="" className="booking__paramter">
            <option value="round trip">round trip</option>
            <option value="one way">one way</option>
          </select>
          <select name="" id="" className="booking__paramter">
            <option value="first class">first class</option>
            <option value="bussines class">bussines class</option>
            <option value="luxury">luxury</option>
          </select>
          <select name="" id="" className="booking__paramter">
            <input type="range" name='person-counter' min='1' max='10'></input>
          </select>
        </div>
        <div className="booking__main-data">
          <div>
            <input type="text" className="booking__main-data_direction-input" placeholder='FROM' />
            <button className='booking__main-data_switch-btn'></button>
            <input type="text" className="booking__main-data_direction-input" placeholder='TO' />
          </div>
          <div>
            <input type="date" className='booking__main-data_date-of-departure'/>
            <input type="date" className='booking__main-data_date-of-arrive'/>
          </div>
        </div>
        <p className='booking__form-additionals'>
          <a className='booking__form-additionals_link' href='#'>Add Requirements</a>
        </p>
        <button type="submit" className='booking__form_submit-btn'>Book Flights</button>
      </form>
    </div>
  )
}
export default Booking;
