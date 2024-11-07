'use client'
import { sendEmail } from "./newForm";
import { useForm } from "react-hook-form";
export default function ContactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const sendData  =  (event)=>{
    sendEmail(event)
  }
    return (
    <div class="contact-container">

      <div className="contact-module">
        <div class="contact-us-header">
                <h2>Contact us</h2>
        </div>
        <form id="contact-form" class="form-horizontal" role="form" onSubmit={handleSubmit(sendData)}>

          <div className="input-two-cols">
              <div class="form-group">
                    <label class="form-label">Name</label>
                  <input {...register("name")} type="text" placeholder="Name" id="name" name="name"  required />
              </div>

              <div class="form-group">
                <label class="form-label">Email</label>
                  <input {...register("email")} type="email" id="email" placeholder="Email" name="email" required />
              </div>
          </div>
          <div class="form-group">
          <label class="form-label">Phone number</label>
          <input {...register("phone")} class="form-control" type="tel" rows="10" placeholder="+1..." name="phone" required></input>
          </div>
          <div class="form-group">
          <label class="form-label">Message</label>
          <textarea {...register("message")} class="form-control" rows="10" placeholder="Message" name="message" required></textarea>
          </div>
          

          <button class="send-button button-big" id="submit" type="submit" value="SEND">
            Send
          </button>
          
        </form>
        </div>
    </div>
              
          );
  }