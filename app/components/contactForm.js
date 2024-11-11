"use client";
import { sendEmail } from "./newForm";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [ emailState, setEmailState ] = useState({
    submitted: false,
    error: "",
    sent:"",
    sending: false
  });
  console.log(emailState.submitted);
  
  const sendData = async (event) => {
    setEmailState({
      submitted: true,
      error:"",
      sent: "",
      sending: true

    });
    const emailInfo = await sendEmail(event); // Use 'await' to get the resolved value
    if (emailInfo.error) {
      setEmailState({
        submitted: true,
        error: emailInfo.error,
        sent: "",
        sending: false

      });
    }else{
      setEmailState({
        submitted: true,
        error:"",
        sent: emailInfo.sent,
        sending: false

      });
    }
  };


  return (
    <div class="contact-container">
      <div className="contact-module">
        <div class="contact-us-header">
          <h2>Contact us</h2>
        </div>
        {emailState.sending &&
          (
            <span class="loader"></span>
          )
        }
        {!emailState.submitted && (
          <form
            id="contact-form"
            class="form-horizontal"
            role="form"
            onSubmit={handleSubmit(sendData)}
          >
            <div className="input-two-cols">
              <div class="form-group">
                <label class="form-label">Name</label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Phone number</label>
              <input
                {...register("phone")}
                class="form-control"
                type="tel"
                rows="10"
                placeholder="+1..."
                name="phone"
                required
              ></input>
            </div>
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea
                {...register("message")}
                class="form-control"
                rows="10"
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>

            <button
              class="send-button button-big"
              id="submit"
              type="submit"
              value="SEND"
            >
              Send
            </button>
          </form>
        )}
        {
          emailState.error && (
            <p className="email-error">{emailState.error}
            <br/><br/>
            <p>Please if this error reoccurs contact us directly at dominic@wayforwardcommunity.org</p>
            </p>
          )
        }
        {
          emailState.sent && (
            <p className="email-sent">{emailState.sent}

            </p>
          )
        }
      </div>
    </div>
  );
}
