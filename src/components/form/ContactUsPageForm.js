"use client";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import UserApiServices from "../../services/User.api.services";
import classes from "./ContactUsPageForm.module.css";

function ContactUsPageForm() {
  const initialInputValue = {
    user_name: "",
    user_email: "",
    user_message: "",
    user_mobile: "",
    user_location: "",
  };

  const formRef = useRef();
  const [formState, setFormState] = useState(initialInputValue);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const inputChangeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const sendMail = async (mailBody) => {
    const body = {
      to: "sales@virtualxcel.in",
      subject: "Enquiry",
      text: mailBody,
      name: formState.user_name,
      email: formState.user_email,
      phoneNumber: formState.user_mobile,
      location: formState.user_location,
      requirement: formState.user_mobile,
    };
    setLoading(true);
    try {
      const resp = await UserApiServices.sendMail(body);
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "submit", {
          event_category: "form",
          event_label: "Contact Form",
          event_action: "submit",
        });
      }
      setLoading(false);
      toast.success("Thank You For Contacting Us !");
      setFormState(initialInputValue);
    } catch (error) {
      toast.error("Something Went Wrong ! Try Again Later");
      setLoading(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let getFormErrors = formValidation();
    setFormErrors(getFormErrors);
    if (Object.keys(getFormErrors).length === 0) {
      const mailBody = `<h2>Message Recieved from ${formState.user_email}</h2>
                        <br>
                        <br>
                        <h3>Name: </h3> <p>${formState.user_name}</p>
                        <h3>Email: </h3> <p>${formState.user_email}</p>
                        <h3>Phone No: </h3> <p>${formState.user_mobile}</p>
                        <h3>Requirement: </h3>  <p>${formState.user_location}</p>
                        <h3>Requirement: </h3>  <p>${formState.user_message}</p>
                        <br>
                        Have a good day!`;

      sendMail(mailBody);
    }
  };

  const formValidation = () => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10,11}$/;
    if (formState.user_name.trim() === "") {
      errors.user_name = "Username is Required! ";
    }
    if (!regex.test(formState.user_email)) {
      errors.user_email = "Invalid Email Format! ";
    }
    if (formState.user_email.trim() === "") {
      errors.user_email = "Email is Required! ";
    }
    if (!phoneRegex.test(formState.user_mobile)) {
      errors.user_mobile =
        "Phone Number must be 10 or 11 digits long and contain only numbers! ";
    }
    if (formState.user_mobile.trim() === "") {
      errors.user_mobile = "Phone Number is Required! ";
    }
    if (formState.user_location.trim() === "") {
      errors.user_location = "Location is Required! ";
    }
    if (formState.user_message.trim() === "") {
      errors.user_message = "Message is Required! ";
    }
    return errors;
  };

  return (
    <form
      className={classes.form}
      ref={formRef}
      onSubmit={formSubmitHandler}
      method="POST"
    >
      <label className={classes.label} htmlFor="email">
        <span>We’d love </span>
        to hear from you!
      </label>
      <p className={classes.subHeading}>
        Tell us your requirements and our workspace experts will reach out to
        you at the earliest.
      </p>
      <input
        placeholder="Name"
        className={classes.input}
        type="text"
        onChange={inputChangeHandler}
        name="user_name"
        value={formState.user_name}
      />

      <p className={classes.errorMessage}>{formErrors.user_name}</p>

      <input
        placeholder="E-mail"
        className={classes.input}
        type="email"
        onChange={inputChangeHandler}
        name="user_email"
        value={formState.user_email}
      />

      <p className={classes.errorMessage}>{formErrors.user_email}</p>

      <div className={classes.inputContainer}>
        <p className={classes.text2}>+91</p>
        <input
          placeholder="Phone Number"
          className={classes.input2}
          type="text"
          onChange={inputChangeHandler}
          name="user_mobile"
          value={formState.user_mobile}
        />
      </div>

      <p className={classes.errorMessage}>{formErrors.user_mobile}</p>

      <input
        placeholder="Location"
        className={classes.input}
        type="text"
        onChange={inputChangeHandler}
        name="user_location"
        value={formState.user_location}
      />

      <p className={classes.errorMessage}>{formErrors.user_location}</p>

      <textarea
        placeholder="Requirement"
        className={classes.textArea}
        name="user_message"
        onChange={inputChangeHandler}
        value={formState.user_message}
      />

      <p className={classes.errorMessage}>{formErrors.user_message}</p>

      <button
        disabled={loading}
        className={`${classes.button}
         `}
        type="submit"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactUsPageForm;
