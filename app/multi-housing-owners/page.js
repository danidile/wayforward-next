import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function Home() {
  return (<>

    <div className="mho-section">
           
           <div className="mho-content">
                <h2>
                Real Estate Owners
                </h2>
                <h6>
                WayForward provides value to RE Owners through Kingdom Impact, Resident Engagement and Staff Satisfaction.
                </h6>

               
           </div>
           
       </div>
        
       <div className="rst-section">   
       <div class="church-columns-container">
                    <div class="box-content">
                        <h4>WayForward provides value to Churches through training and mobilization.
                        </h4>
                        
                        
                        <div class="text-columns">
                        <p>
                        94-98% of people in multi-housing communities are not connected to a faith family. That means only 2-6% of residents are Christians engaging their properties with Churches. However, research shows only 6% of all Christians in America are integrating their beliefs with their behavior. That means ~.03% of all Multi-Housing Residents are integrated disciples impacting communities for God’s Kingdom leaving a vast amount of disconnected and unengaged people. <br/>
                        <br/>
                        Most Christian Real Estate owners and operators also are not pursuing any Kingdom Impact with their companies.
                        </p>
                        <p>
                        <img src="/images/v32.jpg" alt=""/>
                        WayForward helps owners and operators rethink a new bottom line for their company by placing Resident Support Teams on site to engage their neighbors and solve these issues with faith-driven initiatives. <br/>
                        </p> 
                        </div>

                        
                    </div>
                    
                
                </div>   
                    

       </div>

      <div className="testimonial-section">     
            <div class="testimonial-container">
            <img src="/images/testimonial2.png" alt=""/>

                <div class="testimonial-content">
                        <h5><strong>Property Manager</strong></h5>
                        <br/>
                        <p>
                        <i> 
                        “I like having WayForward on-site as they are always positive, energetic, and provide support. They have organized events for residents creating a warm space for residents to get to know each other and coexist. My experience working with them has been nothing but uplifting.”                         </i>
                        </p>
                </div>
            </div>      

       </div>
       <div className="testimonial-section">     
            <div class="testimonial-container">
                <img src="/images/testimonial2.png" alt=""/>
                <div class="testimonial-content">
                        <h5><strong>StoneSteps Real Estate</strong></h5>
                        <br/>
                        <p>
                        <i>
                        “The WayForward team placed at our apartment complex has been a tremendous help to our onsite staff through planning resident events, greeting new move-ins, and increasing renewal percentages. The WayForward team’s work not only is helping the property financially, but also helping minister, care , and support residents.”
                        </i>
                        </p>
                </div>
            </div>      

       </div>
      
  </>);
}
