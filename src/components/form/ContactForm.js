"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import LoadingAnimaiton from "../../../public/images/LoadingAnimation.svg";
import classes from "./ContactForm.module.css";
import { sendGTMEvent } from "@next/third-parties/google";
import UserApiServices from "@/services/User.api.services";

function ContactForm() {
  const router = useRouter();
  const initialInputValue = {
    user_name: "",
    user_email: "",
    user_mobile: "",
    user_location: "",
    user_message: "",
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
      subject: "Enquiry-Landing Page",
      text: mailBody,
    };
    setLoading(true);
    try {
      const resp = await UserApiServices.sendMail(body);
      sendGTMEvent({ event: "formSubmit", value: "Landing Page" });
      setLoading(false);
      toast.success("Thank You For Contacting Us !");
      setFormState(initialInputValue);
      router.push("/thank-you");
    } catch (error) {
      // console.log(error);
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
                        <h4>This message is from the Landing Page</h4>
                        <br>
                        <h3>Name: </h3> <p>${formState.user_name}</p>
                        <h3>Email: </h3> <p>${formState.user_email}</p>
                        <h3>Phone No: </h3> <p>${formState.user_mobile}</p>
                        <h3>Preferred Location: </h3> <p>${formState.user_location}</p>
                        <h3>Requirement: </h3> <p>${formState.user_message}</p>
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
    if (formState.user_location.trim() === "") {
      errors.user_location = "Location is Required! ";
    }
    if (!phoneRegex.test(formState.user_mobile)) {
      errors.user_mobile =
        "Phone Number must be 10 or 11 digits long and contain only numbers! ";
    }
    if (formState.user_mobile.trim() === "") {
      errors.user_mobile = "Phone Number is Required! ";
    }
    return errors;
  };

  const fontSize = { xs: 14, sm: 15, md: 16, lg: 16 };

  return (
    <form
      className={classes.form}
      ref={formRef}
      onSubmit={formSubmitHandler}
      method="POST"
    >
      <p className={classes.heading}>Get in Touch with Us!</p>
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
        placeholder="Preferred Location"
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
        className={`${classes.button} ${loading ? classes.loading : ""}`}
        type="submit"
      >
        {loading ? (
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={LoadingAnimaiton}
              fill={true}
              alt=""
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

export default ContactForm;
