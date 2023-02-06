import React, { Fragment, useEffect, useRef } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";


const Payment = () => {

  const stripe = useStripe();
  const elements = useElements();

  // console.log(elements.getElement(CardNumberElement));

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(stripe)
    console.log(elements)
    // if (!this.validator.allValid()) {
    //   this.validator.showMessages();
    //   this.forceUpdate();
    //   window.scrollTo(0, 0);
    //   return false;
    // }
    // if (this.state.password !== this.state.confirmPassword) {
    //   window.scrollTo(0, 0);
    //   this.setState({ confirmPasswordError: true });
    //   return false;
    // } else {
    //   this.setState({ confirmPasswordError: false });
    // }
    // if (this.state.email !== this.state.confirmEmail) {
    //   window.scrollTo(0, 0);
    //   this.setState({ confirmEmailError: true });
    //   return false;
    // } else {
    //   this.setState({ confirmEmailError: false });
    // }

    // if (!this.state.emailAvailability) {
    //   window.scrollTo(0, 0);
    //   return false;
    // }
    // if (!this.state.usenameAvailability) {
    //   window.scrollTo(0, 0);
    //   return false;
    // }
    // if (this.state.couponCode !== '' && this.state.couponApplied == false) {
    //   this.setState({ couponApplyError: true });
    //   window.scrollTo(0, 0);
    //   return false;
    // }
    // const recaptcha = await this.recaptchaRef.current.getValue();
    // if (!recaptcha) {
    //   window.scrollTo(0, 0);
    //   const widId = this.recaptchaRef.current.getWidgetId();
    //   this.recaptchaRef.current.reset(widId);
    //   this.setState({ security: false });
    //   return false;
    // } else {
    //   this.setState({ security: true });
    // }

    // if (!this.instance) {
    //   return false;
    // }
    // this.setState({ loading: true });
    // const { nonce, type, details } = await this.instance.requestPaymentMethod();
    // const userDetail = {
    //   username: this.state.username,
    //   password: this.state.password,
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   address1: this.state.address1,
    //   address2: this.state.address2,
    //   city: this.state.city,
    //   zip: this.state.zip,
    //   country: this.state.country,
    //   countryCode: this.state.countryCode,
    //   phone: this.state.phone,
    //   email: this.state.email,
    //   planId: this.props.planId,
    //   affiliateId: this.props.affiliateId,
    //   plan: this.state.planId,
    //   planName: this.state.planName,
    //   planPrice: this.state.planPrice,
    //   couponCode: this.state.appiedCouponCode,
    //   newslatter: this.state.newslatter,
    //   recaptcha: recaptcha,
    //   paymentType: type,
    //   paymentNonce: nonce,
    //   paymentDetails: details,
    //   event: '1',
    //   affiliate_id: this.state.affiliate_id,
    //   fb_id: this.state.fb_id,
    // };

    // CourseServices.userRegistration(userDetail)
    //   .then((res) => {
    //     window.scrollTo(0, 0);
    //     const userEmailDetails = {
    //       firstName: this.state.firstName,
    //       lastName: this.state.lastName,
    //       email: this.state.email,
    //     };
    //     const requestOptions = {
    //       headers: getApiHeader(),
    //     };
    //     if (this.state.newslatter == '1') {
    //       axios.post(
    //         apiRoute('add-user-to-mailchimp'),
    //         userEmailDetails,
    //         requestOptions
    //       );
    //     }
    //     this.setState({ loading: false });
    //     Router.push(
    //       Constants.SITE_URL +
    //       '/user-registration-success/' +
    //       this.state.planPrice
    //     );
    //   })
    //   .catch((error) => {
    //     window.scrollTo(0, 0);
    //     this.setState({ loading: false });
    //     const widId = this.recaptchaRef.current.getWidgetId();
    //     this.recaptchaRef.current.reset(widId);
    //     var errorsArray = [];
    //     if (error.response.status === 422) {
    //       var errors = error.response.data.errors;
    //       Object.keys(errors).forEach(function (key) {
    //         errorsArray.push({ message: errors[key][0] });
    //       });
    //       this.setState({ error: true, errors: errorsArray });
    //     } else {
    //       errorsArray.push({ message: error.response.data.message });
    //       this.setState({ error: true, errors: errorsArray });
    //     }
    //   });


      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const paymentDataValue = {
          amount: 111111, 
          //round is used to roundoff value with greater amount and 100 is multiplied to get the value in paise because strip save amount in paise
        };
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/payment/process",
          paymentDataValue,
          config
        );
  
        let client_secret = data.client_secret; 
        //this is the strip client key which we get from above data
  
        if (!stripe || !elements) return;
        // it means that it this strip and elements are not there then dont go further just do nothing
        
        // and if it is there then below process
        const result = stripe && await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: elements.getElement(CardNumberElement),
            billing_details: {
              name: 'cdcd',
              email: 'abc@gmail.com',
              address: {
                line1: 'dcdcd',
                city: 'mumbai',
                state: 'maharashtra',
              },
            },
          },
        });
  
        if (result.error) {
            console.log(result.error);
        } else {
          if (result.paymentIntent.status === "succeeded") {
            console.log('successful payments');
          } else {
            console.log("There's some issue while processing payment ");
          }
        }
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <Fragment>
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <div>
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
