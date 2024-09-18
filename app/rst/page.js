import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function Home() {
  return (<>

    <div className="rst-hero-container">
           
           <img src="/images/rst.jpg" className="rst-hero-image"></img>
           <div className="rst-hero-content">
               <h1>Resident Support Team</h1>
               <h6>
                   Join hundreds of people impacting their local communities. 
               </h6>
               <p>
                   Resident Support Teams (RTSs) are Christians 18 years and older passionate about engaging their neighbors with the gospel and the 5 C’s while living in multi-housing communities nationwide. 
               </p>
               <button href="/rst.html"className="button-1">Get started</button>
               
           </div>
           
       </div>
       <div className="fc-section">
               <div className="fc-content">
                   <h2>Our 5 C’s:</h2>
                   <ul>
                       <li>Care for resident’s holistic wellbeing (physical, emotional, and spiritual)</li>
                       <li>Connect residents to local resources and point them to social services</li>
                       <li>Celebrate with events-with-intent</li>
                       <li>Community engagement for residents</li>
                       <li>Calling people to do the same</li>
                   </ul>
               </div>
       </div>
        <div className="steps-section">
            <h2>Follow the steps.</h2>
            <div className="steps-container">
                <div className="steps-card"><h6 className="steps-title">APPLY</h6></div>
                <div className="steps-card"><img src="/images/arrow.png" className="steps-arrow"/></div>
                <div className="steps-card"><h6 className="steps-title">GET TRAINED</h6></div>
                <div className="steps-card"><img src="/images/arrow.png" className="steps-arrow" /></div>
                <div className="steps-card"><h6 className="steps-title">MOVE IN</h6></div>
                <div className="steps-card"><img src="/images/arrow.png" className="steps-arrow" /></div>
                <div className="steps-card"><h6 className="steps-title">IMPACT</h6></div>
            </div>
        </div>
        <div className="apply-section">
            <div className="apply-container">
                <img className="apply-img" src="/images/church.jpg" alt=""/>
                <div className="apply-content">
                    <h1 className="apply-title">01.APPLY</h1>
                    <h3>Apply today!</h3>
                    <p>click the button below to apply and start your journey!</p>
                    
                    <a href="" className="button-big">
                        <div>
                            Let's partner
                        </div>
                    </a>              
                    </div>
            </div>
        </div>
        <div className="apply-section">
            <div className="apply-container">
                <div className="apply-content">
                    <h1 className="apply-title">OPENINGS</h1>
                    <h3>Current WayForward Openings</h3>
                    <p>click the button below to apply and start your journey!</p>
                    <a href="" className="button-big">
                        <div>
                            Let's partner
                        </div>
                    </a>
                </div>
                <img className="apply-img" src="/images/map.jpg" alt=""/>

            </div>
        </div>



       <Script  src="/snippets/rst.js" />

  </>);
}
