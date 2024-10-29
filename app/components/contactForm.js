

export default function ContactForm() {
    return (
    <div class="contact-container">
        <div class="contact-us-header">
                <h2>Contact us</h2>
                <p>Contact our team</p>
        </div>
        <form id="contact-form" class="form-horizontal" role="form">
       
          <div class="form-group">
                <label class="form-label">Name</label>
              <input type="text" placeholder="Name" id="name" name="name"  required />
          </div>

          <div class="form-group">
            <label class="form-label">Email</label>
              <input type="email" id="email" placeholder="Email" name="email" required />
          </div>
          <div class="form-group">
          <label class="form-label">Message</label>
          <textarea class="form-control" rows="10" placeholder="Message" name="message" required></textarea>
          </div>

          <button class="send-button button-big" id="submit" type="submit" value="SEND">
            Send
          </button>
          
        </form>
    </div>
              
          );
  }