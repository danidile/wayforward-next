import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function Home() {
  return (<>

    <div className="churches-section">
           
           <div className="churches-content">
                <h1>
                Churches
                </h1>
                <h6>
                   WayForward provides value to Churches through training and mobilization.
                </h6>
           <br/>
                <a className="button-big m-top-20" href="#mht-steps-section">
                    View RoadMap 
                </a>
               
           </div>
           
       </div>
        
       <div className="rst-section">     
                <div class="church-columns-container">
                    <div class="box-content">
                        
                        
                        
                        <div class="text-columns">
                        <div>
                        
                        Drawing on over six years of experience, WayForward partners with churches to catalyze new initiatives through training and mobilization to effectively engage multi-housing communities. We aim to advance the God’s Kingdom in areas where 94%-98% of multi-housing residents are disconnected from God and unengaged by Churches.
                        <br/>
                        Since its founding, WayForward has aimed to spread the message of Jesus and make disciples who, in turn, make more disciples. However, research shows only 6% of all Christians in America are integrating their beliefs with their behavior. That means ~.03% of all Multi-Housing Residents are integrated disciples impacting communities for God’s Kingdom leaving a vast amount of disconnected and unengaged people.
                        </div>
                        <p>
                        <img src="/images/church.webp" alt=""/>
                        We believe this mission is central to the Church's purpose and should be treated with urgency. Every individual deserves the chance to hear a clear gospel message and have the opportunity to be a disciple-maker. The Church is the primary means of achieving this.
                        We would love to discuss how we can equip and mobilize your church for this important work in your community.
                        </p> 
                        </div>
                        <br/>
                        <br/>
                        
                    </div>
                    
                
                </div>      

       </div>



       <div class="mht-steps-section" id="mht-steps-section">
        <h2>
            With you every step of the way
        </h2>
      <div class="mht-steps-container">
        <div class="mht-steps-teacher">
        
        </div>
        
        <ul class="steps-ul">
          
        <li class="steps-li">
            <div class="step-timeline">
              <div class="steps-number">1</div>
              <div class="steps-vertical-line"></div>
            </div>
            <div class="step-text">
              <h6>
                Vision cast
              </h6>
              <p class="steps-duration">
                30-60 Min
              </p>
              WayForward meets with church pastor / program director to discuss the churches vision and potential alignment / interest with multi-housing ministry

            </div>
          </li>
          <li class="steps-li">
            <div class="step-timeline">
              <div class="steps-number">2</div>
              <div class="steps-vertical-line"></div>
            </div>
            <div class="step-text">
              <h6>
                Preliminary Planning Meeting
              </h6>
              <p class="steps-duration">
                50-60 Min
              </p>
                Follow-up meeting to discuss training and event details
            </div>
          </li>
          <li class="steps-li">
            <div class="step-timeline">
              <div class="steps-number">3</div>
              <div class="steps-vertical-line"></div>
            </div>
            <div class="step-text">
              <h6>
              Set Training Dates
              </h6>
              <p class="steps-duration">
              </p>
                Establish 2 training dates (Gospel Conversation & Multi-Housing Training)
            </div>
          </li>
          <li class="steps-li">
            <div class="step-timeline">
              <div class="steps-number">4</div>
              <div class="steps-vertical-line"></div>
            </div>
            <div class="step-text">
              <h6>
              Gospel Conversation Training
              </h6>
              <p class="steps-duration">
                7 Hours
              </p>
                Church-wide training intensive
            </div>
          </li>
          <li class="steps-li">
            <div class="step-timeline">
              <div class="steps-number">5</div>
              <div class="steps-vertical-line"></div>
            </div>
            <div class="step-text">
              <h6>
              Multi-Housing Training 
              </h6>
              <p class="steps-duration">
                7 Hours
              </p>
              Training intensive targeting multi-housing missionaries and staff leader(s).
            </div>
          </li>
          <li class="steps-li">
            <div class="step-timeline">
              <div class="steps-number">6</div>
              <div class="steps-vertical-line"></div>
            </div>
            <div class="step-text">
              <h6>
              Quarterly Iron-On-Iron calls offered 
              </h6>
              <p class="steps-duration">
                60-90 Min
              </p>
              WayForward offers ongoing support to teams
            </div>
          </li>
          
        </ul>
      </div>
      <p><strong>Contact us to have WayForward train and mobilize disciples in your local church.</strong></p>
                        <a href="/rst" className="button-big">
                                Contact Us
                        </a>
      <div className="testimonial-section">     
            <div class="testimonial-container">
            <img src="/images/testimonial2.png" alt=""/>

                <div class="testimonial-content">
                        <h5><strong>New Life, Spartanburg, SC</strong></h5>
                        <br/>
                        <p>
                        <i> “New Life East Church has partnered with WayForward for over 4 years in apartment complexes in our city. Our church members have served in two different apartment locations and have personally grown as disciple makers investing in their neighbor’s lives. Community events have been led at the complex and we have seen God work through as we have served. In addition, WayForward has helped train and mobilize 10 of our New Life members outside our church walls and we support their mission spreading good news in largely unreached places and with people far from God.”
                        </i>
                        </p>
                </div>
            </div>      

       </div>
       <div className="testimonial-section">     
            <div class="testimonial-container">
                <img src="/images/testimonial2.png" alt=""/>
                <div class="testimonial-content">
                        <h5><strong>Resident Support Team</strong></h5>
                        <br/>
                        <p>
                        <i>“Working as a Resident Support Team with Wayforward for the past 4 years has been such a blessing. We started small but soon saw a simple church gathering form and it is still going strong after 3 years. We've seen a number of lives transformed with 15 professions of faith and close to half of these demonstrating obedience through baptism. Many of these people have learned to be disciple-makers who are now sharing the gospel and discipling others. The tools and simple strategies I have learned with WayForward have become a lifestyle that I will continue to use throughout my life.”</i>
                        </p>
                </div>
            </div>      

       </div>
      
   </div>
  </>);
}
