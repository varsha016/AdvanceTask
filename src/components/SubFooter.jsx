import React from 'react'
import { star } from '../assets/img'
import "./../assets/css/footer.css"

const SubFooter = () => {
  return <>
    <div className='subfooter'>
      <h4 className='center'>Join the AI-Powered Revolution <img src={star} className='start' alt="" />
        <br />
        in Resume Building
      </h4>
      <div>
        <div className='text-desc mt-3'>Creating an outstanding resume has never been this effortless. With AI Resume Maker, you're not just crafting a </div>
        <p className='text-desc'>document—you're shaping your professional future</p>
        <div className='d-flex justify-content-center'>
          <button type="button" className="btn btn-light Getstarted ">Get started today</button>
        </div>
      </div>
    </div>
  </>
}

export default SubFooter