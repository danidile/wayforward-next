import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="apply-section">
        <div className="apply-container">
          <div className="give-methods-container">
            <div className="apply-content">
              <h4>
                Join the impact! Your donation can transform lives in apartments
                nationwide.
              </h4>
              <br/>
              <p><b>Donate. Pray. Join the movement.</b></p>
            </div>

            <div className="cta-donate">
              <h4>Methods to donate:</h4>
              <button class="accordion">
                Zeffy:{" "}
                <img
                  src="/images/right-arrow.png"
                  className="accordian-arrow"
                />
                <div class="panel">
                  <a
                    href="https://www.zeffy.com/en-US/fundraising/b6443d64-dd5a-4436-90de-e2a6d7133c0c"
                    className="button-big"
                  >
                    Donate
                  </a>
                </div>
              </button>
              <button class="accordion  accordion-2">
                Grants:{" "}
                <img
                  src="/images/right-arrow.png"
                  className="accordian-arrow"
                />
                <div class="panel">
                  <p>
                    Give from a personal 501(c)3
                    <br />
                    Give from Impact Foundation
                    <br />
                    Give from National Christian Foundation [NCF]
                    <br />
                    Give from Signatry
                  </p>
                </div>
              </button>

              <button class="accordion accordion-2">
                Mail a check to:{" "}
                <img
                  src="/images/right-arrow.png"
                  className="accordian-arrow"
                />
                <div class="panel">
                  <p>
                    WayForward 401 Congress Ave. STE. 3250 Austin, TX 78701
                    Attn: Dominic Rosato
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Script src="/snippets/give.js" type="text/javascript" />
    </>
  );
}
