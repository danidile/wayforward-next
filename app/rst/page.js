import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function rst() {
  return (<>

    <div className="rst-section">     
                <div class="rst-container">
                    <img src="/images/rst2.jpg"/>
                    <div class="rst-content">
                        <h3>Resident Support Team</h3>
                        <h6>
                            Join hundreds of people impacting their local communities. 
                        </h6>
                        <p>
                            Resident Support Teams (RTSs) are Christians 18 years and older passionate about engaging their neighbors with the gospel and the 5 C’s while living in multi-housing communities nationwide. 
                        </p>
                    </div>
                </div>      

       </div>
       <div className="fc-section">
               <div className="fc-content">
                   <h2>Our 5 C’s:</h2>
                   <ul>
                       <li><strong>C</strong>are for resident’s holistic wellbeing (physical, emotional, and spiritual)</li>
                       <li><strong>C</strong>onnect residents to local resources and point them to social services</li>
                       <li><strong>C</strong>elebrate with events-with-intent</li>
                       <li><strong>C</strong>ommunity engagement for residents</li>
                       <li><strong>C</strong>alling people to do the same</li>
                   </ul>
               </div>
       </div>
         
        <div className="rst-section">
        <h2>Follow the steps.</h2>

                <div class="rst-container">
                    <>
                    <img src="/images/apply.jpg"/>
                    <div class="rst-content">
                        <h3>01.APPLY</h3>
                        <h6>
                        Apply today!
                        </h6>
                        <p>
                        click the button below to apply and start your journey!
                        </p>
                        
                                <a className="button-big m-top-20" href="/partner">
                                    Let's partner  
                                </a>
                                                          
                    </div>
                    </>
                    <>
                    <div class="rst-content">
                        <h3>02.Get Trained</h3>
                        
                    </div>
                    <img src="/images/study.jpg" className="remove-on-mobile" />

                    </>
                    <>
                    <img className="remove-on-mobile" src="/images/movinin.jpg"/>

                    <div class="rst-content">
                        <h3>03.Move in</h3>
                        <h6>
                        Apply today!
                        </h6>
                        <p>
                        click the button below to apply and start your journey!
                        </p>
                    </div>

                    </>
                    <>
                    <div class="rst-content">
                        <h3>04.Impact</h3>
                        <h6>
                        Apply today!
                        </h6>
                        <p>
                        click the button below to apply and start your journey!
                        </p>
                    </div>
                    <img src="/images/organizations.jpg" className="remove-on-mobile" />

                    </>
                
                </div>      

       </div>



       <Script  src="/snippets/rst.js" />

  </>);
}
