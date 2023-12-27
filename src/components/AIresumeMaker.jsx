import React from 'react'
import { Frame, pen } from '../assets/img'
import "./../assets/css/AIresumeMaker.css"

const AIresumeMaker = () => {
  return <>


    <div className='main'>
      <div className='mainss'>

        <div className='firstPen'>
          <span><img src={pen} alt="" className='bg-pen' />Templates Library</span>
          <span><img src={pen} alt="" className='bg-pen' />Real-time preview</span>
        </div>
        <div className='secondPen'>
          <span className='mt-5'><img src={pen} alt="" className='bg-pen ' />Keyword Optimization</span>
          <h1 className='heading-text'>
            Welcome to <span className='color-text'>AI Resume</span>
            <br />
            <span className='color-text'>Maker !</span>  Your path to
            <br />
            professional success !</h1>
          <span className='mt-5'><img src={pen} alt="" className='bg-pen ' />Dynamic Content Generation</span>
        </div>
        <div className='main-content'>
          <div className='btn-home mt-4'>
            <button type="button" className="btn btn-background">Start building</button>

          </div>
        </div>
      </div>

      <div className='main-sub'>
        <img src={Frame} className='sub-img' alt="" />
      </div>

    </div>
  </>
}

export default AIresumeMaker