import React, { useState } from 'react'
import { resume, resumeGuy, resumeSec, resumeSop, resumeSophia, } from '../assets/img';
import ArrowNext from "../assets/img/ArrowNext.png"
import ArrowPrev from "../assets/img/ArrowPrev.png"

import "./../assets/css/allResume.css"



const AllResumes = () => {
    const [images, setImages] = useState([
        resume,
        resumeGuy,
        resumeSec,
        resumeSop,
        resumeSophia

    ])
    const [currentResume, setCurrentResume] = useState(0);

    const goToPrevious = () => {
        const newIndex = currentResume === 0 ? images.length - 1 : currentResume - 1;
        setCurrentResume(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentResume === images.length - 1 ? 0 : currentResume + 1;
        setCurrentResume(newIndex);
    };
    return (<>
        <div className='mainData row'>
            <h3 className='headLine'>Explore the library</h3>


            <div className='col-md-12 offset-0'>
                <div className='imgAll'>
                    <button onClick={goToPrevious} className='btnPrev'><img src={ArrowPrev} alt="Arrow Prev" /></button>

                    <img src={resumeGuy} alt={`Image ${currentResume}`} />
                    <img src={resumeSophia} alt={`Image ${currentResume}`} />
                    <img src={resumeSec} alt={`Image ${currentResume}`} />
                    <img src={resumeSop} alt={`Image ${currentResume}`} />
                    <img src={resume} alt={`Image ${currentResume}`} />
                    <button onClick={goToNext} className='btnNext'><img src={ArrowNext} alt="Arrow next" /></button>
                </div>

            </div>




        </div>
    </>

    )
}

export default AllResumes