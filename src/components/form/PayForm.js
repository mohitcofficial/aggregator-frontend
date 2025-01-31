"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "./PayForm.module.css";
import axios from "axios";
import UserApiServices from "@/services/User.api.services";
import { USER_URLs } from "@/services/http.services";

function PayForm({ location }) {
  const initialInputValue = {
    user_name: "",
    user_email: "",
    user_mobile: "",
  };
  const [plan, setPlan] = useState(1);
  const [price, setPrice] = useState(location?.gstRegistrationPrice || 0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [tenure, setTenure] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [formState, setFormState] = useState(initialInputValue);

  const formRef = useRef(null);

  useEffect(() => {
    if (plan === 0) setPrice(location?.gstRegistrationPrice);
    else if (plan === 1) setPrice(location?.businessRegistrationPrice);
    else setPrice(location?.mailingAddressPrice);
  }, [plan]);

  useEffect(() => {
    let currentDiscountedPrice = +(price * tenure).toFixed(2);
    if (tenure === 1) {
      setDiscount(0);
      setDiscountedPrice(currentDiscountedPrice);
    } else if (tenure === 2) {
      setDiscount(5);
      currentDiscountedPrice = +(
        price * tenure -
        0.05 * price * tenure
      ).toFixed(2);
      setDiscountedPrice(currentDiscountedPrice);
    } else {
      setDiscount(10);
      currentDiscountedPrice = +(price * tenure - 0.1 * price * tenure).toFixed(
        2
      );
      setDiscountedPrice(currentDiscountedPrice);
    }

    const currentFinalPrice = +(
      currentDiscountedPrice +
      0.18 * currentDiscountedPrice
    ).toFixed(2);

    setFinalPrice(currentFinalPrice);
  }, [tenure, price]);

  const inputChangeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
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
    return errors;
  };

  const checkoutHandler = async () => {
    try {
      const body = {
        locationId: location._id,
        plan,
        tenure,
        name: formState.user_name,
        email: formState.user_email,
        phone: formState.user_mobile,
      };
      const { key } = await UserApiServices.getKey();

      const { order } = await UserApiServices.checkout(body);

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Virtualxcel Solutions",
        description: "Virtual Office Payment",
        image:
          "https://res.cloudinary.com/doqggqsvo/image/upload/v1735890937/Logo_orhakx.png",
        order_id: order.id,
        callback_url: USER_URLs.paymentverification,
        prefill: {
          name: body.name,
          email: body.email,
          contact: body.phone,
        },
        notes: {
          address: "Virtualxcel Office",
          userName: body.name,
          userEmail: body.email,
          userPhone: body.phone,
          amount: order.amount / 100,
        },
        theme: {
          color: "#000",
        },
      };
      const razor = new window.Razorpay(options);
      if (razor) razor.open();
    } catch (error) {
      console.error("Error during checkout:", error.message);

      alert("Sorry Payment Server is down! Please contact us via call");
    }
  };

  const paymentHandler = (e) => {
    e.preventDefault();
    let getFormErrors = formValidation();
    setFormErrors(getFormErrors);
    if (Object.keys(getFormErrors).length === 0) {
      checkoutHandler();
    } else {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <form onSubmit={paymentHandler} className={classes.form} ref={formRef}>
      <div className={classes.contentContainer}>
        <p className={classes.heading}>Pay Here</p>
        <div className={classes.plansContainer}>
          {location?.gstRegistrationPrice !== 0 && (
            <div
              onClick={() => setPlan(0)}
              className={`${classes.plan} ${plan === 0 && classes.active}`}
            >
              GST Certification Plan
            </div>
          )}
          {location?.businessRegistrationPrice !== 0 && (
            <div
              onClick={() => setPlan(1)}
              className={`${classes.plan} ${plan === 1 && classes.active}`}
            >
              Business Certification Plan
            </div>
          )}
          {location?.mailingAddressPrice !== 0 && (
            <div
              onClick={() => setPlan(2)}
              className={`${classes.plan} ${plan === 2 && classes.active}`}
            >
              Mailing Address
            </div>
          )}
        </div>
        <label className={classes.label} htmlFor="">
          Name*
        </label>
        <input
          className={classes.input}
          type="text"
          placeholder="Enter your name"
          value={formState.user_name}
          name="user_name"
          onChange={inputChangeHandler}
        />
        <p className={classes.errorMessage}>{formErrors.user_name}</p>
        <label className={classes.label} htmlFor="">
          E-mail*
        </label>
        <input
          className={classes.input}
          type="email"
          placeholder="Enter your E-mail"
          value={formState.user_email}
          name="user_email"
          onChange={inputChangeHandler}
        />
        <p className={classes.errorMessage}>{formErrors.user_email}</p>
        <label className={classes.label} htmlFor="">
          Mobile*
        </label>
        <input
          className={classes.input}
          type="text"
          placeholder="Enter your Mobile Number"
          value={formState.user_mobile}
          name="user_mobile"
          onChange={inputChangeHandler}
        />
        <p className={classes.errorMessage}>{formErrors.user_mobile}</p>
        <label className={classes.label} htmlFor="">
          Location
        </label>
        <div className={classes.label2}>{location?.name}</div>
        <label className={classes.label} htmlFor="">
          Tenure (yearly)
        </label>
        <select
          id="tenure"
          className={classes.select}
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
        >
          <option className={classes.option} value="1">
            1
          </option>
          <option className={classes.option} value="2">
            2
          </option>
          <option className={classes.option} value="3">
            3
          </option>
        </select>
        <div className={classes.summaryContainer}>
          <div className={classes.summaryContentContainer}>
            <p className={`${classes.summaryHeading}`}>Order Summary</p>
            <div className={classes.summaryData}>
              <span>Price</span>
              <span>= &#8377;{price}</span>
            </div>
            <div className={classes.summaryData}>
              <span>Tenure</span>
              <span>
                &#8377;{price} &#215; {tenure} = &#8377;{price * tenure}
              </span>
            </div>
            <div className={classes.summaryData}>
              <span>Discount</span>
              <span>
                &#8377;{price * tenure} - {discount}% = &#8377;{discountedPrice}
              </span>
            </div>
            <div className={classes.summaryData}>
              <span>Tax (GST)</span>
              <span>
                &#8377;{discountedPrice} + 18% = &#8377;{finalPrice}
              </span>
            </div>
            <div className={classes.summaryData}>
              <span>Final Amount</span>
              <span>= &#8377;{Math.round(finalPrice)}</span>
            </div>
          </div>
        </div>
        <button className={classes.payButton}>
          Pay &#8377;{Math.round(finalPrice)}
        </button>
      </div>
    </form>
  );
}

export default PayForm;
