import React from 'react'
import { iconMain } from '../assets/img'
import "./../assets/css/navbar.css"

const MyNavbar = () => {
  return <>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <img src={iconMain} alt="" />
    <h6 class="navbar-brand" href="#">Resume.AI</h6>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div className='d-flex gap-4'>
        <button class="btn btn-hover" type="submit">Sign In</button>{' '}
        <button class="btn btn-background" type="submit">Create my resume</button>
      </div>
    </div>
  </div>
</nav>
  </>
}

export default MyNavbar