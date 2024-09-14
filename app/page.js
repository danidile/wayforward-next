import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";


export default function Home() {
  return (<>
          <Script src="/snippets/homePageSlider.js" type="text/javascript"/>


    <div className="hero-section">
            <h1>Impacting Communities
            </h1>
            <h6>Leading the way in forming disciple-makers in every community.</h6>

    </div>
        <div className="numbers-section">
            <h2>
                Why Multi-Housing? 
            </h2>
            <h6>Some more numbers for you</h6>
            <div className="numbers-container">
                <div className="card-numbers">
                    <img src="/images/management.png" alt=""></img>
                    <h5>Living situation</h5>
                    <p>
                        Today 37% of the U.S. population live in some form of multi-housing. 
                    </p>
                </div>
                <div className="card-numbers">
                    <img src="/images/alone.png" alt=""></img>
                    <h5>Community</h5>
                    <p>
                        On average, 1 in 3 people struggle with loneliness.  
                    </p>
                </div>
                <div className="card-numbers">
                    <img src="/images/church.png" alt=""></img>
                    <h5>Church attendency</h5>
                    <p>
                        Up to 98% of multi-housing residents are unengaged or unchurched. 
                    </p>
                </div>
                <div className="card-numbers">
                    <img src="/images/bible.png" alt=""></img>
                    <h5>Action</h5>
                    <p>
                        Only 6% of Christians actively integrate their faith with action.
                    </p>
                </div>
                
            </div>

            <a href="" className="button-big" id="button-big"><h6>What are you going to do about it?</h6></a>
        </div>

    
        

        <div className="how-we-work-section">
            <h2 className="title-how-we-work">How we work.</h2>
            <h6>Our method</h6>
            <div className="hww-container">
                <div className="slider-hww" id="hww-slider">
                    <div className="hww-slide" id="hww-slide-1">
                        <h1>01</h1>
                        <h6>We partner with Real Estate owners to make an eternal impact and Kingdom ROI.</h6>
                        <div className="learn-more">
                            <p>
                                Learn more
                            </p> 
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </div>
                    </div>
                    <div className="hww-slide" id="hww-slide-2">
                        <h1>02</h1>
                        <h6>We partner with Real Estate owners to make an eternal impact and Kingdom ROI.</h6>
                        <div className="learn-more">
                            <p>
                                Learn more
                            </p> 
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </div>
                    </div>
                    <div className="hww-slide" id="hww-slide-3">
                        <h1>03</h1>
                        <h6>We partner with Real Estate owners to make an eternal impact and Kingdom ROI.</h6>
                        <div className="learn-more">
                            <p>
                                Learn more
                            </p> 
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </div>
                    </div>
                    <div className="hww-slide" id="hww-slide-4">
                        <h1>04</h1>
                        <h6>We partner with Real Estate owners to make an eternal impact and Kingdom ROI.</h6>
                        <div className="learn-more">
                            <p>
                                Learn more
                            </p> 
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="data-section">
            <h2>
                WayForward 
            </h2>
            <ul>
                <li className="data-li"><h3>6+ Years</h3></li>
                <li className="data-li"><h3>35,000+ units served</h3></li>
                <li className="data-li"><h3>5+ states</h3></li>
                <li className="data-li"><h3>100,000+ spiritually engaged</h3></li>
            </ul>
        </div>


        <div className="cta-section">
            <img src="images/cta-bg3.jpg" className="cta-image-bg"></img>
            <div className="cta-content">
                <div className="cta-left">
                    <h2>Join WayForward</h2>
                    <h5>Impact your Community.</h5>
                </div>
                <div className="cta-right">
                    <a href="/rst.html" className="button-3">Become An RST</a>
                    <a href="/rst.html" className="button-3">Partner</a>
                </div>
            </div>
        </div>

       
  </>);
}
