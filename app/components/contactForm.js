

export default function ContactForm() {
    return (
        <div class="contact-container">
        <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
            <label class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name" name="name" value="" required />
      </div>

      <div class="form-group">
        <label class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Email" name="email" value="" required />
      </div>
      <div class="form-group">
      <label class="form-label">Message</label>
      <textarea class="form-control" rows="10" placeholder="Message" name="message" required></textarea>
      </div>

      <button class="send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    </div>
              
          );
  }