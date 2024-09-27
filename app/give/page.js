import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function Home() {
  return (<>
   
   <div className="rst-section">     
                <div class="box-container">
                    <div class="box-content">
                        <h4>How can we reach the ends of the earth,
                            If we don’t reach our neighborhoods first?
                        </h4>
                        
                        <p>
                        DONATE - Support Teams in local communities.<br/>
                        PRAY - Change lives you could never reach otherwise. <br/>
                        STAY INFORMED - Track your impact month to month. 
                        </p>
                        <a href="/rst" className="button-big">
                                Become an RST
                        </a>
                    </div>
                    
                
                </div>      

       </div>


    <div className="apply-section">
            <div className="apply-container">
                
                <div className="give-methods-container">
                                <div className="apply-content">
                                    <h4>
                                        Give to support our Resident Support<br/> Teams boots on the ground.
                                    </h4>
                                    <p>
                                        Track your impact.
                                        Transform lives in communities you could never go to.
                                    </p>

                                </div>
                                    
                        <div className="cta-donate">
                            <h4>Methods to donate:</h4>
                                <button class="accordion">Grants: <img src="/images/right-arrow.png" className="accordian-arrow" />
                                    <div class="panel">
                                        <p>
                                        ·  	Give from a personal 501(c)3<br/>
                                        ·  	Give from Impact Foundation<br/>
                                        ·  	Give from National Christian Foundation [NCF]<br/>
                                        ·  	Give from Signatry
                                        </p>
                                    </div>
                                </button>
                                

                                <button class="accordion accordion-2">Mail a check to: <img src="/images/right-arrow.png" className="accordian-arrow" />
                                    <div class="panel">
                                        <p>
                                            WayForward 401 Congress Ave. STE. 3250 Austin, TX 78701 Attn: Dominic Rosato
                                        </p>
                                    </div>
                                </button>
                                
                        </div>
                    </div>  
                
            </div>
    </div>
   
        
    <Script src="/snippets/give.js" type="text/javascript"/>

                
        
       
    
  </>);
}
