import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function Home() {
  return (<>
            <Script src="/snippets/partner-circle.js" type="text/javascript"/>


<div class="partner-hero-section">
            <div class="circle-MHO circle-partner"><p  class="circle-title">Multi-Housing <br/>Owners</p></div>
            <div class="circle-C circle-partner"><p class="circle-title">Churches</p></div>
            <div class="circle-O circle-partner"><p class="circle-title">Organizations</p></div>

            <div class="partner-hero-content">
                <div class="partner-hero-text">
                    <h1><span class="orange">WayForward</span> Partners</h1>
                    <h5>Bringing real estate owners, churches, and organizations together to impact communities.</h5>
                </div>
                
                
            </div>
        </div>
        <div class="wpw-section">
            <h2>We partner with:</h2>
            <div class="wpw-container">
            <a href="/multi-housing-owners">
                <div class="wpw-card">
                    <h2 class="h2-wpw-card">01</h2>
                    <img src="/images/v1.jpg"  class="wpw-card-image"/>
                    <div class="wpw-text-container">
                        <h4>Multi-Housing Owners</h4>
                        <h6>WayForward provides value to Real Estate Owners and management companies through impact, engagement and satisfaction.</h6>
                    </div>
                    <img src="/images/arrow-black.svg" alt="" className="wpw-arrow"/>
                </div>
                </a>
                <a href="/churches">
                <div class="wpw-card">
                    <h2 class="h2-wpw-card">02</h2>
                    <img src="/images/church_bread.png"  class="wpw-card-image " />
                    <div class="wpw-text-container">
                        <h4>Churches</h4>
                        <h6>WayForward provides value to Churches through training and mobilization.</h6>
                    </div>
                    <img src="/images/arrow-black.svg" alt="" className="wpw-arrow"/>

                </div>
                </a>
                <div class="wpw-card">
                    <h2 class="h2-wpw-card">03</h2>
                    <img src="/images/organizations1.jpg"  class="wpw-card-image"/>
                    <div class="wpw-text-container">
                        <h4>Organizations</h4>
                        <h6>WayForward provides value to organizations through collaboration, training, and networking.</h6>
                    </div>
                    <img src="/images/arrow-black.svg" alt="" className="wpw-arrow"/>

                </div>
            </div>
        </div>
        <div className="values-cards-section">
        <h2>WayForward Values</h2>
        <div class="values-container">
            
            <div className="values-cards">
                <div className="values-card"><h5 className="values-card-title">God’s Kingdom</h5> <p className="values-card-text">We live for God’s glory, not for our own name.</p></div>
                <div className="values-card"><h5 className="values-card-title">Servant Littleness</h5> <p className="values-card-text">Greatness is found in serving with humility and integrity.</p></div>
                <div className="values-card"><h5 className="values-card-title">Holistic Formation</h5> <p className="values-card-text">Abide and bear fruit in every sphere of life. </p></div>
                <div className="values-card"><h5 className="values-card-title">Incarnational Multiplication</h5> <p className="values-card-text">Empowering and mobilizing every believer.</p></div>
                <div className="values-card"><h5 className="values-card-title">Excellence</h5> <p className="values-card-text">Striving for the highest standards in all we do.</p></div> 
            </div>
        </div>
       </div>




  </>);
}
