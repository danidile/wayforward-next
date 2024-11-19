import Script from "next/script";
import ContactForm from "./components/contactForm";
export default async function Home() {
  return (
    <>
      <Script src="/snippets/homePageSlider.js" type="text/javascript" />

      <div className="hero-section">
        <h1>Impacting Communities</h1>
        <h5>Leading the way in forming disciple-makers in every community.</h5>
        <ul className="buttons-hero-ul">
          <li>
            <a href="/partner" className="button-big">
              Let's Partner
            </a>
          </li>
          <li>
            <a href="/rst" className="button-big">
              Become a RST
            </a>
          </li>
        </ul>
      </div>

      <div class="impact-section">
        <h5>
          WayForward partners with multi-housing owners, churches, and
          organizations to address disconnected and unengaged communities by
          fostering meaningful connections and engagement through faith-driven
          initiative.
        </h5>
        <div class="impact-images">
          <img src="/images/v3.webp" className="img-impact-3" />
        </div>
      </div>
      <div className="numbers-section">
        <h2>Why Multi-Housing?</h2>
        <div className="numbers-container">
          <div className="card-numbers">
            <img src="/images/management.png" alt="" />
            <div>
              <h5>Living </h5>
              <p>
                Today 37% of the U.S. population lives in some form of
                multi-housing.
              </p>
            </div>
          </div>
          <div class="divider-vertical-top"></div>
          <div className="card-numbers">
            <img src="/images/alone.png" alt="" />
            <div>
              <h5>Isolation</h5>
              <p>On average, 1 in 3 people struggle with loneliness.</p>
            </div>
          </div>
          <div class="divider"></div>
          <div className="card-numbers">
            <img src="/images/church.png" alt="" />
            <div>
              <h5>Community</h5>
              <p>
                Up to 98% of multi-housing residents are unengaged or
                unchurched.
              </p>
            </div>
          </div>
          <div class="divider-vertical-bottom"></div>

          <div className="card-numbers">
            <img src="/images/bible.png" alt="" />
            <div>
              <h5>Action</h5>
              <p>
                Only 6% of Christians actively integrate their beliefs with
                their behavior.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="how-we-work-section">
        <h2 className="title-how-we-work">How we work</h2>
        <div className="hww-container">
          <img src="/images/next.png" id="arrow-forward" />
          <img src="/images/next.png" id="arrow-back" />
          <div className="slider-hww" id="hww-slider">
            <div className="hww-slide" id="hww-slide-1">
              <h1>01</h1>
              <h6>
                We partner with Real Estate owners to make an eternal impact and
                Kingdom ROI.
              </h6>
              <a href="/multi-housing-owners">
                <div className="learn-more">
                  <p>Learn more</p>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </div>
              </a>
            </div>
            <div className="hww-slide" id="hww-slide-2">
              <h1>02</h1>
              <h6>
                We place Resident Support Teams in our partner’s multi-housing
                communities.
              </h6>
              <a href="/rst">
                <div className="learn-more">
                  <p>Learn more</p>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </div>
              </a>
            </div>
            <div className="hww-slide" id="hww-slide-3">
              <h1>03</h1>
              <h6>
                We holistically train & form disciple-makers who make disciples
                of Jesus.
              </h6>
              <a href="/training">
                <div className="learn-more">
                  <p>Learn more</p>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </div>
              </a>
            </div>
            <div className="hww-slide" id="hww-slide-4">
              <h1>04</h1>
              <h6>
                We mobilize Churches to effectively reach their neighboring
                multi-housing communities.
              </h6>
              <a href="/churches">
                <div className="learn-more">
                  <p>Learn more</p>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="data-section">
        <h2>WayForward</h2>
        <ul>
          <li className="data-li">
            <h3>6+ Years</h3>
          </li>
          <li className="data-li">
            <h3>35,000+ units served</h3>
          </li>
          <li className="data-li">
            <h3>5+ states</h3>
          </li>
          <li className="data-li">
            <h3>100,000+ spiritually engaged</h3>
          </li>
        </ul>
      </div>

      <div className="cta-section">
        <img src="images/cta-bg3.jpg" className="cta-image-bg"></img>
        <div className="cta-content">
          <div className="cta-left">
            <h2>Join WayForward</h2>
            <h5>Impacting Communities</h5>
          </div>
          <div className="cta-right">
            <a href="/partner" className="button-3">
              Become a Partner
            </a>
            <a href="/rst" className="button-3">
              Become A RST
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
