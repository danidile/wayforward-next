import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function rst() {
  return (<>
       <div className="churches-section">
           
           <div className="churches-content">
           <h2>Resident Support Team</h2>
           <h6>
                Join hundreds of people impacting their local communities. 
            </h6>
            <p>
                Resident Support Teams (RTSs) are Christians 18 years and older passionate about engaging their neighbors with the gospel and the 5 C’s while living in multi-housing communities nationwide. 
            </p>

           </div>
           
       </div>
       
         
        <div className="rst-section">
        <h3>Follow the steps.</h3>

                <div class="rst-container">
                    <>
                    <img src="/images/apply.jpg"/>
                    <div class="rst-content">
                        <h3>01.Apply</h3>

                        
                                <a className="button-big m-top-20" href="https://share.hsforms.com/10GIJLd5ZSeyaCCOBuM8xyg4ne2f">
                                Apply Here                
                                </a>
                                                          
                    </div>
                    </>
                    <>
                    <div class="rst-content">
                        <h3>02.Get Trained</h3>
                        <a className="button-big m-top-20" href="https://share.hsforms.com/10GIJLd5ZSeyaCCOBuM8xyg4ne2f">
                            Go to training platform            
                        </a>
                    </div>
                    <img src="/images/study.jpg" className="remove-on-mobile" />

                    </>
                    <>
                    <img className="remove-on-mobile" src="/images/movinin.jpg"/>

                    <div class="rst-content">
                        <h3>03.Move in</h3>
                        
                    </div>

                    </>
                    <>
                    <div class="rst-content">
                        <h3>04.Impact</h3>
                        
                    </div>
                    <img src="/images/organizations.jpg" className="remove-on-mobile" />

                    </>
                
                </div>      

       </div>

       <div className="data-section">
            <h2>
                WayForward 
            </h2>
            <ul>
                <li className="data-li"><h5>Care for resident’s holistic wellbeing (physical, emotional, and spiritual)</h5></li>
                <li className="data-li"><h5>Connect residents to local resources and point them to social services</h5></li>
                <li className="data-li"><h5>Celebrate with events-with-intent</h5></li>
                <li className="data-li"><h5>Community engagement for residents</h5></li>
                <li className="data-li"><h5>Calling people to do the same</h5></li>
            </ul>
        </div>



       <Script  src="/snippets/rst.js" />

  </>);
}