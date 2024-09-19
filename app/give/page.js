import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function Home() {
  return (<>
    <div className="apply-section">
            <div className="apply-container">
                <div className="apply-content">
                    <h1 className="apply-title">GIVE</h1>
                    <h3>
                        Give to support our Resident Support Teams boots on the ground.
                    </h3>
                    <p>
                        Track your impact.
                        Transform lives in communities you could never go to.
                    </p>
                    
                    <a href="https://www.google.com/url?q=https://www.zeffy.com/en-US/fundraising/b6443d64-dd5a-4436-90de-e2a6d7133c0c&sa=D&source=docs&ust=1726693158445325&usg=AOvVaw2CS_oQcMK_tjxvyBU40WBf" className="button-big">
                        <div>
                            Donate now
                        </div>
                    </a>
                          
                </div>
                <div className="give-methods-container">
                        <div className="cta-donate">
                            <h6>Methods to donate:</h6>
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
