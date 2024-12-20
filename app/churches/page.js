import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import ContactForm from "../components/contactForm";

export default function Home() {
  return (
    <>
      <div className="churches-section">
        <div className="churches-content">
          <h2>Churches</h2>
          <h6>
            God calls, commissions and commands the Church to reach the lost in
            apartment complexes.{" "}
          </h6>
        </div>
      </div>

      <div className="rst-section">
        <div class="church-columns-container">
          <div className="numbers-container">
            <h4>
              WayForward provides value to Churches through training and
              mobilization.
            </h4>

            <div className="card-numbers-church">
              <div>
                <p>
                  Research shows only 6% of all Christians in your congregation
                  are integrating their beliefs with their behavior. We can help
                  them walk the talk.
                </p>
              </div>
            </div>
            <div class="divider-vertical-top"></div>
            <div className="card-numbers-church">
              <div>
                <p>
                  Statistically, your church is surrounded by thousands of
                  apartment units within a few mile radius. We can help you
                  reach them.
                </p>
              </div>
            </div>
            <div class="divider"></div>
            <div className="card-numbers-church">
              <div>
                <p>
                  Your own congregation is the most underrated and unutilized
                  pool of missionaries that is waiting to receive permission &
                  commission. We can help you activate them.
                </p>
              </div>
            </div>
            <div class="divider-vertical-bottom"></div>

            <div className="card-numbers-church">
              <div>
                <p>
                  Your church can move from a model focused on addition to one
                  focused on multiplication, from one focused on "come and see"
                  to "go and make disciples. We can help you train
                  disciple-makers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mht-steps-section" id="mht-steps-section">
        <h2>With you every step of the way</h2>
        <div class="mht-steps-container">
          <div class="mht-steps-teacher"></div>

          <ul class="steps-ul">
            <li class="steps-li">
              <div class="step-timeline">
                <div class="steps-number">1</div>
                <div class="steps-vertical-line"></div>
              </div>
              <div class="step-text">
                <h6>Vision cast</h6>
                <p class="steps-duration">30-60 Min</p>
                WayForward meets with the church's leadership (senior, missions
                or discipleship pastor) to discuss the church's vision and
                potential alignment with discipleship training and multi-housing
                ministry
              </div>
            </li>
            <li class="steps-li">
              <div class="step-timeline">
                <div class="steps-number">2</div>
                <div class="steps-vertical-line"></div>
              </div>
              <div class="step-text">
                <h6>Preliminary Planning Meeting</h6>
                <p class="steps-duration">50-60 Min</p>
                Follow-up meeting to discuss training and event details
              </div>
            </li>
            <li class="steps-li">
              <div class="step-timeline">
                <div class="steps-number">3</div>
                <div class="steps-vertical-line"></div>
              </div>
              <div class="step-text">
                <h6>Set Training Dates</h6>
                <p class="steps-duration"></p>
                Establish 2 training dates (Gospel Conversation & Multi-Housing
                Training). Church leadership advertises it to the whole
                congregation allowing people to sign up and participate.
              </div>
            </li>
            <li class="steps-li">
              <div class="step-timeline">
                <div class="steps-number">4</div>
                <div class="steps-vertical-line"></div>
              </div>
              <div class="step-text">
                <h6>Gospel Conversation Training</h6>
                <p class="steps-duration">7 Hours</p>
                Church-wide training for the whole congregation on ways to reach
                the lost, share the Gospel and make disciples. Whoever catches
                the vision can sign up.
              </div>
            </li>
            <li class="steps-li">
              <div class="step-timeline">
                <div class="steps-number">5</div>
                <div class="steps-vertical-line"></div>
              </div>
              <div class="step-text">
                <h6>Multi-Housing Training</h6>
                <p class="steps-duration">7 Hours</p>
                Training to practically implement the Gospel Conversation
                Training principles to apartment complex outreach. Part of this
                training takes place on the field at a nearby apartment complex,
                ideally where a training participant already lives.
              </div>
            </li>
            <li class="steps-li">
              <div class="step-timeline">
                <div class="steps-number">6</div>
                <div class="steps-vertical-line"></div>
              </div>
              <div class="step-text">
                <h6>Quarterly Iron-On-Iron calls offered</h6>
                <p class="steps-duration">60-90 Min</p>
                Ongoing Coaching: WayForward offers ongoing support to the
                church leadership and training participants who catch the vision
                and want to impact their community on a regular basis.
              </div>
            </li>
          </ul>
        </div>

        <div className="testimonial-section">
          <div class="testimonial-container">
            <img src="/images/testimonial2.png" alt="" />

            <div class="testimonial-content">
              <h5>
                <strong>New Life, Spartanburg, SC</strong>
              </h5>
              <br />
              <p>
                <i>
                  {" "}
                  “New Life East Church has partnered with WayForward for over 4
                  years in apartment complexes in our city. Our church members
                  have served in two different apartment locations and have
                  personally grown as disciple makers investing in their
                  neighbor’s lives. Community events have been led at the
                  complex and we have seen God work through as we have served.
                  In addition, WayForward has helped train and mobilize 10 of
                  our New Life members outside our church walls and we support
                  their mission spreading good news in largely unreached places
                  and with people far from God.”
                </i>
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-section">
          <div class="testimonial-container">
            <img src="/images/testimonial2.png" alt="" />
            <div class="testimonial-content">
              <h5>
                <strong>Resident Support Team</strong>
              </h5>
              <br />
              <p>
                <i>
                  “Working as a Resident Support Team with Wayforward for the
                  past 4 years has been such a blessing. We started small but
                  soon saw a simple church gathering form and it is still going
                  strong after 3 years. We've seen a number of lives transformed
                  with 15 professions of faith and close to half of these
                  demonstrating obedience through baptism. Many of these people
                  have learned to be disciple-makers who are now sharing the
                  gospel and discipling others. The tools and simple strategies
                  I have learned with WayForward have become a lifestyle that I
                  will continue to use throughout my life.”
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
