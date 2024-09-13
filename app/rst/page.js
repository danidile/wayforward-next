import Image from "next/image";
import styles from "./page.module.css";

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

        
  </>);
}
