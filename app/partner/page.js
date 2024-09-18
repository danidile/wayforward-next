import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function Home() {
  return (<>

<div class="partner-hero-section">
            <div class="circle-MHO circle-partner"></div>
            <div class="circle-C circle-partner"></div>
            <div class="circle-O circle-partner"></div>

            <div class="partner-hero-content">
                <div class="partner-hero-text">
                    <h1><span class="orange">WayForward</span> Partners</h1>
                    <h6>Bringing real estate owners, churches, and organizations together to impact communities.</h6>
                </div>
                <img src="/images/rst3.jpg" class="partner-hero-img"/>
                
                
            </div>
        </div>
        <div class="wpw-section">
            <h2>We partner with:</h2>
            <div class="wpw-container">
                <div class="wpw-card">
                    <h2 class="h2-wpw-card">01</h2>
                    <img src="/images/multi1.jpg"  class="wpw-card-image"/>
                    <div class="wpw-text-container">
                        <h5>MULTI-HOUSING OWNERS</h5>
                        <p>WayForward provides value to RE Owners through resident engagement and staff satisfaction.</p>
                    </div>
                </div>
                <div class="wpw-card">
                    <h2 class="h2-wpw-card">02</h2>
                    <img src="/images/church1.jpg"  class="wpw-card-image"/>
                    <div class="wpw-text-container">
                        <h5>CHURCHES</h5>
                        <p>WayForward provides value to Churches through training and mobilization.</p>
                    </div>
                </div>
                <div class="wpw-card">
                    <h2 class="h2-wpw-card">03</h2>
                    <img src="/images/organizations1.jpg"  class="wpw-card-image"/>
                    <div class="wpw-text-container">
                        <h5>ORGANIZATIONS</h5>
                        <p>WayForward provides value to organizations through collaboration, training, and networking.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="values-cards-section">
        <h2>WayForward Values</h2>
        <div class="values-container">
            <img src="/images/vc1.jpg" alt=""/>
            <div className="values-cards">
                <div className="values-card"><h6 className="values-card-title">God’s Kingdom</h6> <p className="values-card-text">We live for God’s glory, not for our own name.</p></div>
                <div className="values-card"><h6 className="values-card-title">Servant Littleness</h6> <p className="values-card-text">Greatness is found in serving with humility and integrity.</p></div>
                <div className="values-card"><h6 className="values-card-title">Holistic Formation</h6> <p className="values-card-text">Abide and bear fruit. </p></div>
                <div className="values-card"><h6 className="values-card-title">Incarnational Multiplication</h6> <p className="values-card-text">Empowering and mobilizing every believer.</p></div>
                <div className="values-card"><h6 className="values-card-title">Excellence</h6> <p className="values-card-text">Striving for the highest standards in all we do.</p></div> 
            </div>
        </div>
       </div>




  </>);
}
