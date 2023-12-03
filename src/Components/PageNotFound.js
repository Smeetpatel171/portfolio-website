import React from 'react'
import oops from "../Assets/Images/oops.jfif"
export default function PageNotFound() {
  return (
    <div className='pagenotfound'>
      <img src={oops} alt="" />
      <h1>Opps! Page Not Found!</h1>

    </div>
  )
}
