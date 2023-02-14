import React, { Component } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Constants from '../../constants';
import DropIn from 'braintree-web-drop-in-react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  apiRoute,
  getApiHeader,
  getGpayMerchantId,
  getLocalStorage,
} from '../../utils/helpers';
import SimpleReactValidator from 'simple-react-validator';
import CountryOptions from '../CountryOptions';
import CourseServices from '../../services/courseServices';
import PhoneCodeOptions from '../PhoneCodeOptions';
import {
  
  CardNumberElement,
  CardNumberElementComponent,
  CardCvcElementComponent,
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from 'react-toastify';

import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import FacebookLogin from 'react-facebook-login';

const max = 9;
const rand1 = Math.floor(Math.random(1) * Math.floor(max));
const rand2 = Math.floor(Math.random(1) * Math.floor(max));
const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  zip: '',
  country: '',
  countryCode: '',
  phone: '',
  email: '',
  confirmEmail: '',
  planId: '',
  planName: '',
  planPrice: '',
  labelClass: '',
  couponCode: '',
  other: '',
  freeTrialDays: 14,
  emailAvailability: true,
  usenameAvailability: true,
  successMessage: false,
  confirmPasswordError: false,
  pageLoading: true,
  errors: [],
  error: false,
  errorMsg: '',
  security: true,
  recaptcha: false,
  terms: '',
  newslatter: '',
  confirmEmailError: false,
  showOtherField: false,
  couponApplied: false,
  couponReadOnly: false,
  appiedCouponCode: '',
  couponApplyError: false,
  clientId: false,
  loading: false,
  gpayMerchantId: getGpayMerchantId(),
  readonly: '',
  affiliate_id: ' ',
  fb: true,
  fb_id: '',
  fbIdAvailability: true,
  stripeApiKeyValue:'',
};

class RegistrationForm extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.paymentData = {
      amount: 21000, 
    };
    this.stripe = this.props.stripe;
    this.elements2 = this.props.elements;
    this.validator = new SimpleReactValidator();
    this.recaptchaRef = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.createSession = this.createSession.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
    this.state = initialState;

    this.fbLogindata = this.fbLogindata.bind(this);

  }

  componentDidMount() {

    // this.fetchUserS.bind(this);
  console.log(this.props.elements && this.props.elements.getElement(CardNumberElement))
    
    const script = document.createElement("script");

    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;

    document.body.appendChild(script);


    console.log(this.props.affiliateId);
    console.log(this.props);
    CourseServices.getClintId().then((res) => {
      this.setState({
        clientId: res.data,
      });
    });
    CourseServices.getApiKeyData().then((res) => {
      this.setState({
        stripeApiKeyValue: res,
      });
    });
    console.log(CourseServices.getApiKeyData());
    const requestOptions = {
      headers: getApiHeader(),
    };
    axios
      .get(apiRoute('get-plan-details/' + this.props.planId), requestOptions)
      .then((res) => {
        this.setState({
          planId: res.data.braintree_id,
          planName: res.data.name,
          planPrice: res.data.price,
        });
      });
    const affiliate_id = localStorage.getItem('uniqueAffiliate_id');
    if (affiliate_id) {
      this.setState({ affiliate_id: affiliate_id });
    }
    //facebook javascript

    window.fbAsyncInit = function () {
      FB.init({
        appId: Constants.FB_LIVE_APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v10.0',
        localStorage: false,
      });
    };


  //  const datafunction = async()=>{
  //     const data =  await axios.get("http://localhost:4000/api/v1/stripeapikey");
  //     console.log(data);
  //     // this.setState({
  //     //   stripeApiKeyValue: data.stripeApiKey,
  //     // });
  //   }
  //   this.datafunction.bind(this)
  //   this.datafunction()

  //   console.log(this.datafunction());

  }

//   fetchUserS = () => {
//     let url = 'http://localhost:4000/api/v1/stripeapikey';
//     this.fetchApi(url);
//  };

//   fetchApi = (url) => {
//   axios.get(url)
//   .then((res) => res.json())
//   .then((res) => this.setState({
//     stripeApiKeyValue: res.stripeApiKey,
//      }))

//      console.log(this.state.stripeApiKeyValue);
//   };



  fbLogindata = () => {
    window.FB.login(() => {
      FB.api('/me', { fields: 'last_name,first_name,email' }, (response) => {
        console.log(response);
        this.setState({ firstName: response.last_name });
        CourseServices.checkFbId(response.id)
          .then((res) => {
            console.log(res);
            if (res.data.status == true) {
              console.log(res.data.status);
              this.setState({ fbIdAvailability: true });
            } else {
              console.log(res.data.status);
              this.setState({ fbIdAvailability: false });
            }
          })
          .catch((error) => {
            this.setState({ fbIdAvailability: false });
          });

        CourseServices.checkUserEmail(response.email)
          .then((res) => {
            if (res.data.status == true) {
              this.setState({ emailAvailability: true });
            } else {
              console.log(res.data.status);
              this.setState({ emailAvailability: false });
            }
          })
          .catch((error) => {
            this.setState({ emailAvailability: false });
          });
        this.setState({ firstName: response.first_name });
        this.setState({ lastName: response.last_name });
        this.setState({ email: response.email });
        this.setState({ confirmEmail: response.email });
        this.setState({ fb_id: response.id });
      });
    });
  };

  onCountryChange(e) {
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var phoneCode = optionElement.getAttribute('phoneCode');
    this.setState({ country: e.target.value });
    this.setState({ countryCode: phoneCode });
  }

  createSession = async (price,couponValue, emailValue,planDuration) => {
try {
  const { data: response } = await axios.post(
    // "http://localhost:8080/subs/session",
    "http://localhost:4000/api/v1/session",
    {
      price,
      couponValue,
      emailValue,
      planDuration
    }
  );
  if (typeof window !== 'undefined') {
    window.location.href = response.url;
}
} catch (error) {
  toast(error);
}

    // window.location.href = response.url;
  }

  onCheckboxChange = (e) => {
    if (e.target.checked) {
      this.setState({ [e.target.name]: 1 });
    } else {
      this.setState({ [e.target.name]: '' });
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  onRecaptchaChange = (e) => {
    this.setState({ securityVal: e.target.value });
    let currentVal = Number(e.target.value);
    const currectVal = this.state.currectSecurity;
    if (currentVal !== currectVal) {
      this.setState({ security: false });
    } else {
      this.setState({ security: true });
    }
  };

  onPasswordChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value !== '' && this.state.confirmPassword !== '') {
      if (this.state.confirmPassword !== e.target.value) {
        this.setState({ confirmPasswordError: true });
        return false;
      } else {
        this.setState({ confirmPasswordError: false });
      }
    } else {
      this.setState({ confirmPasswordError: false });
    }
  }

  onConfirmPasswordChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.password !== '' && e.target.value !== '') {
      if (this.state.password !== e.target.value) {
        this.setState({ confirmPasswordError: true });
        return false;
      } else {
        this.setState({ confirmPasswordError: false });
      }
    } else {
      this.setState({ confirmPasswordError: false });
    }
  }

  onEmailChange(e) {
    const email = e.target.value;
    this.setState({ email: email });
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      CourseServices.checkUserEmail(email)
        .then((res) => {
          if (res.data.status == true) {
            this.setState({ emailAvailability: true });
          } else {
            this.setState({ emailAvailability: false });
          }
        })
        .catch((error) => {
          this.setState({ emailAvailability: false });
        });
    } else {
      return false;
    }
    if (this.state.confirmEmail !== '' && e.target.value !== '') {
      if (this.state.confirmEmail !== e.target.value) {
        this.setState({ confirmEmailError: true });
        return false;
      } else {
        this.setState({ confirmEmailError: false });
      }
    } else {
      this.setState({ confirmEmailError: false });
    }
  }

  onConfirmEmailChange = (e) => {
    const email = e.target.value;
    this.setState({ confirmEmail: email });
    if (this.state.email !== '' && e.target.value !== '') {
      if (this.state.email !== e.target.value) {
        this.setState({ confirmEmailError: true });
        return false;
      } else {
        this.setState({ confirmEmailError: false });
      }
    } else {
      this.setState({ confirmEmailError: false });
    }
  };

  onUsernameChange(e) {
    const username = e.target.value;
    this.setState({ username: username });
    CourseServices.checkUserUsername(username)
      .then((res) => {
        if (res.data.status == true) {
          this.setState({ usenameAvailability: true });
        } else {
          this.setState({ usenameAvailability: false });
        }
      })
      .catch((error) => {
        this.setState({ usenameAvailability: false });
      });
  }

  async getStripeApiKey(){
    const data = await axios.get("http://localhost:4000/api/v1/stripeapikey");
    console.log(data);
    // this.setState({
    //   stripeApiKeyValue: data.stripeApiKey,
    // });
  }

  async onSubmit(e) {
    e.preventDefault();

    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      window.scrollTo(0, 0);
      return false;
    }
    if (this.state.password !== this.state.confirmPassword) {
      window.scrollTo(0, 0);
      this.setState({ confirmPasswordError: true });
      return false;
    } else {
      this.setState({ confirmPasswordError: false });
    }
    if (this.state.email !== this.state.confirmEmail) {
      window.scrollTo(0, 0);
      this.setState({ confirmEmailError: true });
      return false;
    } else {
      this.setState({ confirmEmailError: false });
    }

    if (!this.state.emailAvailability) {
      window.scrollTo(0, 0);
      return false;
    }
    if (!this.state.usenameAvailability) {
      window.scrollTo(0, 0);
      return false;
    }
    if (this.state.couponCode !== '' && this.state.couponApplied == false) {
      this.setState({ couponApplyError: true });
      window.scrollTo(0, 0);
      return false;
    }
    const recaptcha = await this.recaptchaRef.current.getValue();
    if (!recaptcha) {
      window.scrollTo(0, 0);
      const widId = this.recaptchaRef.current.getWidgetId();
      this.recaptchaRef.current.reset(widId);
      this.setState({ security: false });
      return false;
    } else {
      this.setState({ security: true });
    }

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
    //   paymentType: 'card',
    //   paymentNonce: 1212,
    //   paymentDetails: {
    //     name: 'fff',
    //     email: 'vaibhav@gmail.com',
    //     address: {
    //       line1: 'addereded',
    //       city: 'fffvcff',
    //       state: 'ddddd',
    //     },},
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
          amount: this.props.planId == 2? Math.round(21 * 100):Math.round(210 * 100), 
          //round is used to roundoff value with greater amount and 100 is multiplied to get the value in paise because strip save amount in paise
        };
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/payment/process",
          paymentDataValue,
          config
        );
  
        let client_secret = data.client_secret; 
        //this is the strip client key which we get from above data
  
        if (!this.props.stripe || !this.props.elements) return;
        // it means that it this strip and elements are not there then dont go further just do nothing
        
        // and if it is there then below process
        const result = this.props.stripe && await this.props.stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: this.props.elements && this.props.elements.getElement(CardNumberElement),
            billing_details: {
              name: 'fff',
              email: 'vaibhav@gmail.com',
              address: {
                line1: 'addereded',
                city: 'fffvcff',
                state: 'ddddd',
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
  howYouKnowChange = (e) => {
    const text = e.target.value;
    if (text == 'Other') {
      this.setState({ showOtherField: true });
    } else {
      this.setState({ showOtherField: false, other: '' });
    }
  };

  applyCouponCode = () => {
    this.setState({ loading: true });
    const details = {
      plan: this.props.planId,
      couponCode: this.state.couponCode,
      event: '1',
    };
    const requestOptions = {
      headers: getApiHeader(),
    };
    axios
      .post(apiRoute('check-subscriber-coupon'), details, requestOptions)
      .then((res) => {
        if (res.data.type == '2') {
          this.setState({
            couponApplied: true,
            freeTrialDays: res.data.freeDays,
            appiedCouponCode: this.state.couponCode,
            couponReadOnly: true,
            error: false,
            errors: [],
          });
        } else {
          this.setState({
            couponApplied: true,
            planPrice: res.data.price,
            appiedCouponCode: this.state.couponCode,
            couponReadOnly: true,
            error: false,
            errors: [],
          });
        }
        this.setState({ loading: false });
      })
      .catch((error) => {
        window.scrollTo(0, 0);
        var errorsArray = [];
        errorsArray.push({ message: 'Invalid coupon code.' });
        this.setState({
          couponApplied: false,
          error: true,
          errors: errorsArray,
          couponReadOnly: false,
          couponCode: '',
        });
        this.setState({ loading: false });
      });
  };

  onResolved = () => {
    this.setState({ recaptcha: this.recaptcha.getResponse() });
    console.log(this.recaptcha.getResponse());
  };
  fbEvent = () => {
    this.setState({ fb: false });
  };
  // responseFacebook = (response) => {
  //   console.log(response);
  //   console.log(response.id);
  //   CourseServices.checkFbId(response.id)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.status == true) {
  //         console.log(res.data.status);
  //         this.setState({ fbIdAvailability: true });
  //       } else {
  //         console.log(res.data.status);
  //         this.setState({ fbIdAvailability: false });
  //       }
  //     })
  //     .catch((error) => {
  //       this.setState({ fbIdAvailability: false });
  //     });

  //   CourseServices.checkUserEmail(response.email)
  //     .then((res) => {
  //       if (res.data.status == true) {
  //         console.log(res.data.status);
  //         this.setState({ emailAvailability: true });
  //       } else {
  //         console.log(res.data.status);
  //         this.setState({ emailAvailability: false });
  //       }
  //     })
  //     .catch((error) => {
  //       this.setState({ emailAvailability: false });
  //     });

  //   this.setState({ firstName: response.first_name });
  //   this.setState({ lastName: response.last_name });
  //   this.setState({ email: response.email });
  //   this.setState({ confirmEmail: response.email });
  //   this.setState({ fb_id: response.id });
  // };
  render() {
    const { clientId } = this.state;
    // console.log(this.stripe);
    // console.log(this.props.elements);
    // console.log(CardNumberElement)
    // console.log(this.props.elements && this.props.elements.getElement(CardNumberElement));
    return (
      <>
        {this.state.loading && (
          <div className='preloader-background'>
            <div className='big sattva_loader active'>
              <img src={Constants.SITE_URL + '/images/loader.png'} />
            </div>
          </div>
        )}
          
        <div className='card subscription-card'>
          <form
            onSubmit={this.onSubmit}
            id='giftCourseForm'
            autocomplete='off'
            className='form form-horizontal'
          >
            <div>
        </div>
            <div className='reg-head-div'>
              <div className='signUp-title-div'>
                <h4 className='revamp-subtitle mb-3'>Account Information</h4>
                <p className='revamp-para mb-1'>
                  You can sign up with your email address or you can sign up
                  using Facebook.
                </p>
              </div>
              <div className='mb-3'>
                <p>
                  {' '}
                  <a
                    className='fb-button'
                    onClick={this.fbLogindata}
                    type='button'
                    style={{ fontWeight: '500' }}
                  >
                    <img
                      height='36px'
                      width='36px'
                      className='facebook-image mr-3'
                      src={Constants.SITE_URL + '/images/signup-fb.svg'}
                    />
                    Signup with facebook
                  </a>
                </p>
              </div>
            </div>

            <div className='customer-support p-0'>
              {this.state.errors.map((item, index) => {
                return (
                  <div
                    className='alert alert-danger alert-dismissible fade show'
                    role='alert'
                  >
                    <p>{item.message}</p>
                  </div>
                );
              })}

              {this.state.confirmPasswordError == true && (
                <div
                  className='alert alert-danger alert-dismissible fade show'
                  role='alert'
                >
                  <p>Password does not match.</p>
                </div>
              )}
              {this.state.confirmEmailError == true && (
                <div
                  className='alert alert-danger alert-dismissible fade show'
                  role='alert'
                >
                  <p>Email does not match.</p>
                </div>
              )}
              {this.state.emailAvailability == false && (
                <div
                  className='alert alert-danger alert-dismissible fade show'
                  role='alert'
                >
                  <p>Email is already in used.</p>
                </div>
              )}

              {this.state.fbIdAvailability == false && (
                <div
                  className='alert alert-danger alert-dismissible fade show'
                  role='alert'
                >
                  <p>This facebook account already in used.</p>
                </div>
              )}

              {this.state.usenameAvailability == false && (
                <div
                  className='alert alert-danger alert-dismissible fade show'
                  role='alert'
                >
                  <p>Username is already in used.</p>
                </div>
              )}
              {this.state.couponApplyError == true && (
                <div
                  className='alert alert-danger alert-dismissible fade show'
                  role='alert'
                >
                  <p>Please apply coupon before submitting the form.</p>
                </div>
              )}
              {this.state.security === false && (
                <div
                  className='alert alert-danger alert-dismissible fade show'
                  role='alert'
                >
                  <p>Recaptcha is required.</p>
                </div>
              )}
              <div className='control-group revamp-form-field'>
                <label
                  id='firstName-lbl'
                  for='firstName'
                  className='control-label'
                >
                  First Name<span className='required'>&#160;*</span>
                </label>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  value={this.state.firstName}
                  onChange={this.onChange}
                  placeholder='Your first name'
                />
                {this.validator.message(
                  'firstName',
                  this.state.firstName,
                  'required|max:50'
                )}
              </div>
              <div className='control-group revamp-form-field alt'>
                <label
                  id='lastName-lbl'
                  for='lastName'
                  className='control-label'
                >
                  Last Name<span className='required'>&#160;*</span>
                </label>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  placeholder='Your last name'
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
                {this.validator.message(
                  'lastName',
                  this.state.lastName,
                  'required|max:50'
                )}
              </div>
              <div className='control-group revamp-form-field' >
                <label id='email-lbl' for='email' className='control-label'>
                  Email<span className='required'>&#160;*</span>
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  placeholder='Your email'
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
                {this.validator.message(
                  'email',
                  this.state.email,
                  'required|email'
                )}
              </div>
              <div className='control-group revamp-form-field alt'>
                <label
                  id='cofirmEmail-lbl'
                  for='cofirmEmail'
                  className='control-label'
                >
                  Retype-Email<span className='required'>&#160;*</span>
                </label>
                <input
                  type='text'
                  name='cofirmEmail'
                  id='cofirmEmail'
                  placeholder='Retype your email'
                  value={this.state.confirmEmail}
                  onChange={this.onConfirmEmailChange}
                />
                {this.validator.message(
                  'cofirmEmail',
                  this.state.confirmEmail,
                  'required|email'
                )}
              </div>
              <div className='control-group revamp-form-field'>
                <label
                  id='username-lbl'
                  for='username'
                  className='control-label'
                >
                  Username<span className='required'>&#160;*</span>
                </label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Your username'
                  autoComplete='new-username'
                  value={this.state.username}
                  onChange={this.onUsernameChange}
                />
                {this.validator.message(
                  'username',
                  this.state.username,
                  'required'
                )}
              </div>
              <div className='control-group revamp-form-field alt'>
                <label
                  id='password-lbl'
                  for='password'
                  className='control-label'
                >
                  Password<span className='required'>&#160;*</span>
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Your password'
                  autoComplete='new-password'
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                />
                {this.validator.message(
                  'password',
                  this.state.password,
                  'required|min:6'
                )}
              </div>
              <div className='control-group revamp-form-field'>
                <label
                  id='confirmPassword-lbl'
                  for='confirmPassword'
                  className='control-label'
                >
                  Retype-password<span className='required'>&#160;*</span>
                </label>
                <input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Retype your password'
                  value={this.state.confirmPassword}
                  onChange={this.onConfirmPasswordChange}
                />
                {this.validator.message(
                  'confirm password',
                  this.state.confirmPassword,
                  'required|min:6'
                )}
              </div>
              <div className='control-group revamp-form-field alt'>
                <label
                  id='address1-lbl'
                  for='address1'
                  className='control-label'
                >
                  Address
                  {/* <span className='required'>&#160;*</span> */}
                </label>
                <input
                  type='text'
                  name='address1'
                  id='address1'
                  placeholder='Your address'
                  value={this.state.address1}
                  onChange={this.onChange}
                />
                {/* {this.validator.message(
                  'address1',
                  this.state.address1,
                  'required'
                )} */}
              </div>
              <div className='control-group revamp-form-field'>
                <label id='city-lbl' for='city' className='control-label'>
                  City
                  {/* <span className='required'>&#160;*</span> */}
                </label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  placeholder='Your city'
                  value={this.state.city}
                  onChange={this.onChange}
                />
                {/* {this.validator.message('city', this.state.city, 'required')} */}
              </div>
              <div className='control-group revamp-form-field alt'>
                <label id='zip-lbl' for='zip' className='control-label'>
                  Zip Code
                  {/* <span className='required'>&#160;*</span> */}
                </label>
                <input
                  type='text'
                  name='zip'
                  id='zip'
                  placeholder='Zipcode'
                  value={this.state.zip}
                  onChange={this.onChange}
                />
                {/* {this.validator.message('zip', this.state.zip, 'required')} */}
              </div>
              <div className='control-group revamp-form-field'>
                <label for='country' className='control-label'>
                  Country<span className='required'>&#160;*</span>
                </label>
                <select
                  id='country'
                  name='country'
                  onChange={this.onCountryChange}
                >
                  <option selected>Select Country</option>
                  <CountryOptions />
                </select>
                {this.validator.message(
                  'country',
                  this.state.country,
                  'required'
                )}
              </div>
              <div className='control-group revamp-form-field alt'>
                <label for='country' className='control-label'>
                  Dial Code(+)
                  {/* <span className='required'>&#160;*</span> */}
                </label>
                <select
                  id='countryCode'
                  name='countryCode'
                  value={this.state.countryCode}
                  onChange={this.onChange}
                >
                  <option> Dial Code(+)</option>
                  <PhoneCodeOptions />
                </select>
                {/* {this.validator.message(
                  'countryCode',
                  this.state.countryCode,
                  'required'
                )} */}
              </div>
              <div className='control-group revamp-form-field'>
                <label id='phone-lbl' for='phone' className='control-label'>
                  Phone
                  {/* <span className='required'>&#160;*</span> */}
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder='Your phone'
                  value={this.state.phone}
                  onChange={this.onChange}
                />
                {/* {this.validator.message(
                  'phone',
                  this.state.phone,
                  'required|max:16'
                )} */}
              </div>
              <div
                className='control-group revamp-form-field alt'
                id='field_osm_osmosmhowdidyougettoknow_us'
              >
                <div className='control-label'>
                  <label
                    id='osm_osmosmhowdidyougettoknow_us-lbl'
                    for='osm_osmosmhowdidyougettoknow_us'
                    class=''
                  >
                    How did you get to know us?
                    <span className='required'>&nbsp;*</span>
                  </label>
                </div>
                <div className='controls'>
                  <select
                    id='osm_osmosmhowdidyougettoknow_us'
                    name='howknowUs'
                    onChange={this.howYouKnowChange}
                  >
                    <option value='Sattva Yoga Academy'>
                      Sattva Yoga Academy
                    </option>
                    <option value='Sattva Collection'>Sattva Collection</option>
                    <option value='Google'>Google</option>
                    <option value='Facebook'>Facebook</option>
                    <option value='Instagram'>Instagram</option>
                    <option value='Family and friends'>
                      Family and friends
                    </option>
                    <option value='SC member'>SC member</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>
              </div>
              {this.state.showOtherField && (
                <div className='control-group'>
                  <label for='other' className='control-label'>
                    Other
                  </label>
                  <textarea
                    name='other'
                    value={this.state.other}
                    onChange={this.onChange}
                  ></textarea>
                  {this.validator.message(
                    'other',
                    this.state.other,
                    'required'
                  )}
                </div>
              )}
              <div className='control-group revamp-form-field'>
                <label id='Plan-lbl' for='Plan' className='control-label'>
                  Plan<span className='required'>&#160;*</span>
                </label>
                <input
                  type='text'
                  name='Plan'
                  id='Plan'
                  value={this.state.planName}
                  readOnly
                />
              </div>
              <div className='control-group revamp-form-field alt'>
                <label
                  id='couponCode-lbl'
                  for='couponCode'
                  className='control-label'
                >
                  Coupon Code
                </label>
                <input
                  type='text'
                  style={{ flex: '1' }}
                  name='couponCode'
                  readOnly={this.state.couponReadOnly}
                  id='couponCode'
                  placeholder='Coupon code'
                  value={this.state.couponCode}
                  onChange={this.onChange}
                />
                {this.state.couponApplied == false ? (
                  <button
                    type='button'
                    class='btn btn-lg waves-effect waves-light '
                    onClick={this.applyCouponCode}
                  >
                    Apply{' '}
                  </button>
                ) : (
                  <button
                    type='button'
                    class='btn btn-lg waves-effect waves-light '
                  >
                    Applied
                  </button>
                )}
                {/* <div className='row'>
                  <div className='col-sm-12 position-relative'>
                    <label
                      id='couponCode-lbl'
                      for='couponCode'
                      className='control-label'
                    >
                      Coupon Code
                    </label>
                    <input
                      type='text'
                      name='couponCode'
                      readOnly={this.state.couponReadOnly}
                      id='couponCode'
                      value={this.state.couponCode}
                      onChange={this.onChange}
                    />
                    {this.state.couponApplied == false ? (
                      <button
                        type='button'
                        class='btn btn-lg waves-effect waves-light couponBtn'
                        onClick={this.applyCouponCode}
                      >
                        Apply{' '}
                      </button>
                    ) : (
                      <button
                        type='button'
                        class='btn btn-lg waves-effect waves-light couponBtn'
                      >
                        Applied
                      </button>
                    )}
                  </div>
                </div> */}
              </div>
              <div className='control-group revamp-form-field'>
                <label id='Price-lbl' for='Price' className='control-label'>
                  Price<span className='required'>&#160;*</span>
                </label>
                <input
                  type='text'
                  name='Price'
                  id='Price'
                  value={'$' + this.state.planPrice}
                  readOnly
                />
                <button
                  variant="primary"
                  className="mt-2"
                  onClick={() => this.createSession(this.state.planPrice,this.state.couponCode,this.state.email,this.state.planName)}
                >
                  Buy now
                </button>
              </div>
              <h4 className='mt-3 revamp-subtitle'>Payment Information</h4>
              <p className='mb-3 freeTrailMsg revamp-para-small black-text'>
                Your credit card will not be charged after your 14-days free trial, unless you cancel before the trial period ends. This can be done from your account settings. Please note that your membership is automatically renewed after every billing cycle.
              </p>
                
                  <div>
            <CardNumberElement id='card-number-element' className="paymentInput-card" />
                </div>
                <div>
                <CardExpiryElement className="paymentInput" />
                </div>
                <div>
                <CardCvcElement className="paymentInput" />
                </div>
              <div className='checkbox'>
                <input
                  id='terms'
                  type='checkbox'
                  name='terms'
                  value='terms'
                  onChange={this.onCheckboxChange}
                  checked={this.state.terms}
                />
                <label htmlFor='terms'>
                  I accept the
                  <a href='/terms-of-services' target='_blank'>
                    {' '}
                    Terms and Conditions
                  </a>
                  <span className='required'>&#160;*</span>
                </label>
                {this.validator.message('terms', this.state.terms, 'required')}
              </div>

              <div className='checkbox'>
                <input
                  id='newslatter'
                  type='checkbox'
                  name='newslatter'
                  value='newslatter'
                  onChange={this.onCheckboxChange}
                  checked={this.state.newslatter}
                />
                <label htmlFor='newslatter'>
                  Yes, I would like to receive weekly updates from Sattva
                  Connect (newsletter)
                </label>
              </div>
              <div className='control-group'>
                <div className='security-check'>
                  <div className='input-group-prepend user-reg-security'>
                    <ReCAPTCHA
                      ref={this.recaptchaRef}
                      sitekey='6LeO0r0ZAAAAAN2hNPGgn_eHl3Ki_Oxn0JaPtujV'
                      onChange={this.onResolved}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='input-field text-right'>
              <button type='submit' className='btn btn-lg'>
                Start your Sattva journey now
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export async function getStaticProps() {
  const {data} =  await axios.get("http://localhost:4000/api/v1/stripeapikey");
  const pageData = data
  return {
    props: {
      pageData,
    },
    revalidate: 1,
  };
}

// const datafunction = async()=>{
//   const data =  await axios.get("http://localhost:4000/api/v1/stripeapikey");
//   console.log(data);
//   // this.setState({
//   //   stripeApiKeyValue: data.stripeApiKey,
//   // });
// }
// this.datafunction.bind(this)
// this.datafunction()

// console.log(this.datafunction());

export default RegistrationForm;
