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
       <div className="values-cards-section">
        <div className="values-cards">
        <div className="values-card"><h6 className="values-card-title">God’s Kingdom</h6> <p className="values-card-text">We live for God’s glory, not for our own name.</p></div>
        <div className="values-card"><h6 className="values-card-title">Servant Littleness</h6> <p className="values-card-text">Greatness is found in serving with humility and integrity.</p></div>
        <div className="values-card"><h6 className="values-card-title">Holistic Formation</h6> <p className="values-card-text">Abide and bear fruit. </p></div>
        <div className="values-card"><h6 className="values-card-title">Incarnational Multiplication</h6> <p className="values-card-text">Empowering and mobilizing every believer.</p></div>
        <div className="values-card"><h6 className="values-card-title">Excellence</h6> <p className="values-card-text">Striving for the highest standards in all we do.</p></div>
        
        </div>
       </div>




       <Script  src="/snippets/rst.js" />

  </>);
}
