import React from 'react'

//INTERNAL IMPORT
import {footer} from '../../components/Global/Footer'


const Home = () => {
  return (
    <div className='techwave_fn_content'>
      <div className='techwave_fn_page'>
        <div className='techwave_fn_home'>
          <div className='section_home'>
            <div className='section_left'>
              <div className='techwave_fn_title_holder'>
                <h1 className='title'>Automate Your crupto trading</h1>
              
              <p className='desc'>crypto trading financial bot for buyiing and sell crypto</p>
              </div>
            
            <div className='techwave_fn_interactive_list'>
              <ul>
                <li>
                  <div className='item'>
                    <a>
                      <span className='icon'>
                        <img src="img/lioghtcion/light-19.png" alt="" />
                      </span>
                      <h2 className='title'>Buy any token</h2>
                      <p className='desc'>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Quis, rerum ut recusandae itaque maiores
                         officia delectus doloremque harum 
                        ducimus modi, excepturi necessitatibus a
                        met assumenda maxime dignissimos! Officia
                         voluptatibus nulla tempora?</p>
                         <span className='arrow'>
                          <img src="img/lioghtcion/light-22.png" alt="" className='fn__svg' />
                         </span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className='item'>
                    <a>
                      <span className='icon'>
                        <img src="img/lioghtcion/light-19.png" alt="" />
                      </span>
                      <h2 className='title'>Sell any token</h2>
                      <p className='desc'>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Quis, rerum ut recusandae itaque maiores
                         officia delectus doloremque harum 
                        ducimus modi, excepturi necessitatibus a
                        met assumenda maxime dignissimos! Officia
                         voluptatibus nulla tempora?</p>
                         <span className='arrow'>
                          <img src="img/lioghtcion/light-16.png" alt="" className='fn__svg' />
                         </span>
                    </a>
                  </div>
                </li>
                
              </ul>
            </div>
            </div>
         

          <div className='section_right'>
            <div className="company_info">
              <img src="img/light-logo.png" alt="" />
              <p className="fn__animated_text">Lorem ipsum dolor sit
                 amet consectetur, adipisicing elit. Ipsam
                  animi deleniti beatae accusantium, 
                  reprehenderit voluptates quo. Molestiae
                   commodi numquam non saepe, porro dolor.
                    Minus illum sequi quae voluptatum, harum odio.</p>
                    <hr />
                    <div className="fn__memebers">
                      <div />
                      <div className="active item">
                        <span className="circle"></span>
                        <span className="text">1231234 online</span>
                      </div>

                      <div className="item">
                         <span className="circle"></span>
                        <span className="text">22334 memeber</span>
                      </div>
                    </div>
            </div>
          </div>
           </div>


        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default Home
