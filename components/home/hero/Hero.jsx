import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate=useNavigate();
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO TalkFusion' title='Best Online Language learning Website' />
            <p>Far far away, behind the word mountains, far from the countries india, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn' onClick={()=>navigate("/start")}>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
