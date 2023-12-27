import React from 'react'
import { AIresumeMaker, AllResumes, ChooseSectionResume, Footer, MyNavbar, SubFooter, } from '../components'


const Home = () => {
  return <>
    <MyNavbar />
    <AIresumeMaker />
    <div className='container-main'>
      <ChooseSectionResume />
      <AllResumes />
      <SubFooter />
      <Footer />
    </div>
  </>
}

export default Home