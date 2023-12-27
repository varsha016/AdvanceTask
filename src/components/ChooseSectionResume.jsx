import React from 'react'
import "./../assets/css/ChooseSectionResume.css"
import { Arrowleft, ChooseAI, box, eye, interface_icon, magicpen, maineye, note, note_2, task_square, women } from '../assets/img'

const ChooseSectionResume = () => {
  const data = [
    {
      tital: "Real-time preview",
      desc: "Preview the resumes real-time while adding the details.",
      pic: maineye,
    },
    {
      tital: "Real-time preview",
      desc: "Preview the resumes real-time while adding the details.",
      pic: note_2,
    },
    {
      tital: "Real-time preview",
      desc: "Preview the resumes real-time while adding the details.",
      pic: box,
    },
    {
      tital: "Real-time preview",
      desc: "Preview the resumes real-time while adding the details.",
      pic: magicpen,
    },
  ]

  const subData = [
    {
      tital: "Step by step guidance",
      icon: task_square
    },
    {
      tital: "Select from curated templates",
      icon: note
    },
    {
      tital: "Realtime resume preview",
      icon: eye
    },
  ]
  return (<>
    <div className="container">
      <h3 className='resumemakerHeading'>Why choose AI resume maker? </h3>
      <div className="row row-content ">
        <div className="col-md-6 col-sm-12">
          <img src={ChooseAI} className='chooseAI' width={500} alt="" />
        </div>
        <div className="col-4 offset-md-2">
          <div class="card p-4 card-main">
            {
              data.map(item => (
                <div className='d-flex gap-4 '>

                  <img src={item.pic} className='choose-resume' alt="" />
                  <div>
                    <span>{item.tital}</span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>

      <div class="card card-centers">
        <div class="card-header p-0">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className='card-sub-content'>
                <h3>Intelligent Guidance</h3>
                <p>Our AI-powered platform provides step-by-step guidance as you build your resume. From selecting the right template to tailoring content, our AI ensures your resume reflects your unique strengths.</p>
                <button type="button" class="btn btn-light">Try now</button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={women} className='women-img' width={545} height={313} alt="" />
            </div>
          </div>
        </div>
        <div class="card-body d-flex flex-wrap justify-content-center align-items-center">
          {
            subData.map(item => (
              <div className='d-flex align-items-center gap-3 p-1 mx-2'>
                <img src={item.icon} className='icons' alt="" />
                <p className='mt-2'>{item.tital}</p>
              </div>
            ))
          }

        </div>
      </div>



      <div className="row mb-4">
        <div className="col-md-6 col-sm-12">
          <img src={interface_icon} className='interface-img' width={500} alt="" />
        </div>
        <div className="col-md-5 col-sm-12 offset-md-1 interface-content">
          <h3 className='User-Friendly'>User-Friendly Interface</h3>
          <p>No more struggling with complex formatting tools. Our intuitive interface makes it easy to enter your information, choose from a variety of templates, and customize your resume effortlessly.</p>
          <img src={Arrowleft} className='arrowleft' width={300} alt="" />
        </div>
      </div>
    </div>
  </>
  )
}

export default ChooseSectionResume