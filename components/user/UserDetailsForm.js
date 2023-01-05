import React, { Component } from 'react';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import AuthService from '../../services/authServices';
import {
  getLocalStorageAuth,
  setLocalStorageAuth,
  apiRoute,
  getApiHeader,
  userProfilePath,
} from '../../utils/helpers';

class UserDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.usernameValidate = new SimpleReactValidator();
    this.emailValidate = new SimpleReactValidator();
    this.changePasswordValidate = new SimpleReactValidator();
    this.userDetailsValidate = new SimpleReactValidator();
    this.state = {
      username: '',
      email: '',
      secondaryEmail: '',
      oldEmail: '',
      oldUsername: '',
      userId: '',
      first_name: '',
      last_name: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
      country: '',
      alert: false,
      alertType: '',
      alertMsg: '',
      password: '',
      profilePic: '',
      image: '',
      countryFlag: '',
      countries: [],
      timezones: [],
      timezone: '',
      dob: '',
      gender: '',
      confirmPassword: '',
      emailAvailability: true,
      usernameAvailability: true,
      passwordStatus: true,
      updatebtn: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.handleUsernameForm = this.handleUsernameForm.bind(this);
    this.handleUserEmailForm = this.handleUserEmailForm.bind(this);
    this.handleChangePasswordForm = this.handleChangePasswordForm.bind(this);
    this.handleUserDetailsForm = this.handleUserDetailsForm.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const authData = getLocalStorageAuth();
    if (authData) {
      const userDetails = authData.userDetails;

      this.setState({
        userId: userDetails.id,
        email: userDetails.email,
        secondaryEmail: userDetails.secondary_email,
        oldEmail: userDetails.email,
        username: userDetails.username,
        oldUsername: userDetails.username,
        first_name: userDetails.first_name,
        last_name: userDetails.last_name,
        phone: userDetails.phone,
        city: userDetails.city,
        address1: userDetails.address1,
        address2: userDetails.address2,
        zip: userDetails.zip_code,
        countryCode: userDetails.country_code,
        country: userDetails.country,
        profilePic: userDetails.profile_pic,
        timezone: userDetails.timezone_id,
        gender: userDetails.gender,
        dob: userDetails.dob,
      });
      const requestOptions = {
        headers: getApiHeader(),
      };

      axios.get(apiRoute('get-all-countries'), requestOptions).then((res) => {
        this.setState({ countries: res.data.countries });
        const result = res.data.countries.filter(
          (item) => item.country == userDetails.country
        );
        if (result[0] && result[0].CountryCode) {
          const flag = result[0].CountryCode.toLowerCase();
          this.setState({ countryFlag: flag });
        }
      });

      axios.get(apiRoute('get-all-timezone'), requestOptions).then((res) => {
        this.setState({ timezones: res.data });
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ updatebtn: true });
  }

  onUsernameChange(e) {
    const userName = e.target.value;
    this.setState({ username: userName });
    AuthService.checkUsernameAvailability(
      userName,
      this.state.oldUsername
    ).then((res) => {
      if (res.data.status !== true) {
        this.setState({ usernameAvailability: false });
      } else {
        this.setState({ usernameAvailability: true });
      }
    });
  }

  onEmailChange(e) {
    const email = e.target.value;
    this.setState({ email: email });
    this.setState({ updatebtn: true });
    AuthService.checkEmailAvailability(email, this.state.oldEmail).then(
      (res) => {
        if (res.data.status.status !== true) {
          this.setState({ emailAvailability: false });
        } else {
          this.setState({ emailAvailability: true });
        }
      }
    );
  }

  userDetailsSupply = (dp) => {

    let data = new FormData();
    data.append('image', dp);
    data.append('email', this.state.email);
    data.append('id', this.state.userId);
    data.append('first_name', this.state.first_name);
    data.append('last_name', this.state.last_name);
    data.append('phone', this.state.phone);
    data.append('city', this.state.city);
    data.append('address1', this.state.address1);
    data.append('address2', this.state.address2);
    data.append('zip_code', this.state.zip);
    data.append('country_code', this.state.countryCode);
    data.append('country', this.state.country);
    data.append('timezone', this.state.timezone);
    data.append('gender', this.state.gender);
    data.append('dob', this.state.dob);
    this.props.setLoading(true);

    AuthService.updateUserDetails(data)
      .then((res) => {
        const auth = getLocalStorageAuth();
        auth.userDetails = res.data.user;
        setLocalStorageAuth(auth);
        this.setState({
          alert: true,
          alertType: 'success',
          alertMsg: res.data.message,
          profilePic: res.data.user.profile_pic,
        });
        const result = this.state.countries.filter(
          (item) => item.country == this.state.country
        );
        if (result[0].CountryCode) {
          const flag = result[0].CountryCode.toLowerCase();
          this.setState({ countryFlag: flag });
        }
        this.props.setLoading(false);
      })
      .catch((error) => {
        this.setState({
          alert: true,
          alertType: 'error',
          alertMsg: 'Something went wrong please try again.',
        });
        this.props.setLoading(false);
      });

  }

  handleImageChange = (e) => {
    this.userDetailsSupply(e.target.files[0]);
    // this.setState({
    //   image: e.target.files[0],
    // });
  };

  handleUsernameForm(e) {
    e.preventDefault();
    if (!this.usernameValidate.allValid()) {
      this.usernameValidate.showMessages();
      this.forceUpdate();
      return false;
    }
    this.props.setLoading(true);
    const userUsername = {
      id: this.state.userId,
      username: this.state.username,
    };
    AuthService.updateUserUsername(userUsername)
      .then((res) => {
        window.scrollTo(0, 0);
        const auth = getLocalStorageAuth();
        auth.userDetails.username = this.state.username;
        setLocalStorageAuth(auth);
        this.setState({
          alert: true,
          alertType: 'success',
          alertMsg: res.data.message,
        });
        this.props.setLoading(false);
      })
      .catch((error) => {
        window.scrollTo(0, 0);
        this.setState({
          alert: true,
          alertType: 'error',
          alertMsg: 'Something went wrong please try again.',
        });
        this.props.setLoading(false);
      });
  }

  handleUserEmailForm(e) {
    e.preventDefault();
    if (!this.emailValidate.allValid()) {
      this.emailValidate.showMessages();
      this.forceUpdate();
      return false;
    }
    this.props.setLoading(true);
    const userEmail = {
      id: this.state.userId,
      email: this.state.email,
    };
    AuthService.updateUserEmail(userEmail)
      .then((res) => {
        window.scrollTo(0, 0);
        const auth = getLocalStorageAuth();
        auth.userDetails.email = this.state.email;
        setLocalStorageAuth(auth);
        this.setState({
          alert: true,
          alertType: 'success',
          alertMsg: res.data.message,
        });
        this.props.setLoading(false);
      })
      .catch((error) => {
        window.scrollTo(0, 0);
        this.setState({
          alert: true,
          alertType: 'error',
          alertMsg: 'Something went wrong please try again.',
        });
        this.props.setLoading(false);
      });
  }

  handleChangePasswordForm(e) {
    e.preventDefault();
    if (!this.changePasswordValidate.allValid()) {
      this.changePasswordValidate.showMessages();
      this.forceUpdate();
      return false;
    }
    if (this.state.password !== this.state.confirmPassword) {
      window.scrollTo(0, 0);
      this.setState({ passwordStatus: false });
      return false;
    } else {
      this.setState({ passwordStatus: true });
    }
    this.props.setLoading(true);
    const userDetails = {
      id: this.state.userId,
      password: this.state.password,
    };
    AuthService.changePassword(userDetails)
      .then((res) => {
        window.scrollTo(0, 0);
        this.setState({
          alert: true,
          alertType: 'success',
          alertMsg: res.data.message,
          confirmPassword: '',
          password: '',
        });
        this.props.setLoading(false);
      })
      .catch((error) => {
        window.scrollTo(0, 0);
        this.setState({
          alert: true,
          alertType: 'error',
          alertMsg: 'Something went wrong please try again.',
        });
        this.props.setLoading(false);
      });
  }

  handleUserDetailsForm(e) {
    e.preventDefault();
    if (!this.userDetailsValidate.allValid()) {
      this.userDetailsValidate.showMessages();
      this.forceUpdate();
      return false;
    }
    if (!this.emailValidate.allValid()) {
      this.emailValidate.showMessages();
      this.forceUpdate();
      return false;
    }
    this.userDetailsSupply(this.state.image);
  }

  onCountryChange = (e) => {
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const phoneCode = optionElement.getAttribute('phoneCode');
    this.setState({ country: e.target.value });
    this.setState({ countryCode: phoneCode });
  };

  render() {
    const { alert, alertType, alertMsg } = this.state;
    return (
      <>
        <div className="mt-3">
          <h3 className='revamp-blog-title'>Profile Information</h3>
        </div>
        {alert && alertType === 'error' && (
          <div className='alert alert-danger' role='alert'>
            {alertMsg}
          </div>
        )}
        {alert && alertType === 'success' && (
          <div className='alert alert-success' role='alert'>
            {alertMsg}
          </div>
        )}
        {this.state.passwordStatus === false && (
          <div className='alert alert-danger' role='alert'>
            <p>Password does not match</p>
          </div>
        )}
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <form onSubmit={this.handleUserDetailsForm}>
              {/* <h6 className='revamp-para-small'>Profile Information</h6> */}
              {this.state.emailAvailability === false && (
                <div className='col-sm-8'>
                  <div
                    className='alert alert-danger alert-dismissible fade show'
                    role='alert'
                  >
                    <p>Email is already in used.</p>
                  </div>
                </div>
              )}
              <div className='profile-flex'>
                <div className='upload-file'>
                  <div className='upload-img'>
                    <img
                      className='responsive-img'
                      src={userProfilePath(this.state.profilePic)}
                    />
                  </div>
                  <div className='upload-btn'>
                    <input type='file' onChange={this.handleImageChange} />
                    <i className='fas fa-camera'></i>
                  </div>
                </div>

              </div>
              <table className='table table-striped profile-table detail-table border-0'>
                <tbody>
                  <tr>
                    <th>First Name:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        {/* <i className='fas fa-user-circle'></i> */}
                        <input
                          id='first_name'
                          value={this.state.first_name}
                          name='first_name'
                          type='text'
                          className='pinf m-0 no-border-btm'
                          onChange={this.onChange}
                        />
                        {this.userDetailsValidate.message(
                          'first_name',
                          this.state.first_name,
                          'required'
                        )}
                        {/* <label for='first_name' className='active'>
                            First Name:
                          </label> */}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Last Name:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        {/* <i className='fas fa-user-circle'></i> */}
                        <input
                          id='last_name'
                          value={this.state.last_name}
                          name='last_name'
                          type='text'
                          className='pinf m-0 no-border-btm'
                          onChange={this.onChange}
                        />
                        {this.userDetailsValidate.message(
                          'last_name',
                          this.state.last_name,
                          'required'
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Email:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        <input
                          id='email'
                          name='email'
                          value={this.state.email}
                          className='pinf m-0 no-border-btm'
                          onChange={this.onEmailChange}
                        />
                        {this.emailValidate.message(
                          'username',
                          this.state.email,
                          'required'
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Address:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        <input
                          id='address'
                          name='address1'
                          className='materialize-textarea pinf m-0 no-border-btm'
                          value={this.state.address1}
                          onChange={this.onChange}
                        />
                        {this.userDetailsValidate.message(
                          'address1',
                          this.state.address1,
                          'required'
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>City:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        <input
                          id='city'
                          value={this.state.city}
                          name='city'
                          type='text'
                          className='pinf m-0 no-border-btm'
                          onChange={this.onChange}
                        />
                        {this.userDetailsValidate.message(
                          'city',
                          this.state.city,
                          'required'
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Zip:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        <input
                          id='zip'
                          name='zip'
                          type='text'
                          value={this.state.zip}
                          className='pinf m-0 no-border-btm'
                          onChange={this.onChange}
                        />
                        {this.userDetailsValidate.message(
                          'zip',
                          this.state.zip,
                          'required|max:7'
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Country:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        <select
                          id='country'
                          name='country'
                          onChange={this.onCountryChange}
                          className="m-0 no-border-btm"
                        >
                          <option>Country *</option>
                          {this.state.countries.map((item, index) => {
                            const selected =
                              this.state.country === item.country ? true : false;
                            return (
                              <option
                                phonecode={item.phonecode}
                                key={index}
                                value={item.country}
                                selected={selected}
                              >
                                {item.country}
                              </option>
                            );
                          })}
                        </select>
                        {this.userDetailsValidate.message(
                          'country',
                          this.state.country,
                          'required'
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Country Code:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        <input
                          id='custom_osm_dial_code'
                          name='countryCode'
                          type='text'
                          value={this.state.countryCode}
                          className='pinfsm m-0 no-border-btm'
                          onChange={this.onChange}
                        />
                        {this.userDetailsValidate.message(
                          'countryCode',
                          this.state.countryCode,
                          'required|integer'
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Phone:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        <input
                          id='phone'
                          name='phone'
                          type='text'
                          value={this.state.phone}
                          className='pinf m-0 no-border-btm'
                          onChange={this.onChange}
                        />
                        {this.userDetailsValidate.message(
                          'phone',
                          this.state.phone,
                          'required|max:17'
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>DOB:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        <input
                          id='dob'
                          name='dob'
                          type='date'
                          value={this.state.dob}
                          className='pinf m-0 no-border-btm'
                          onChange={this.onChange}
                        />
                        {this.userDetailsValidate.message(
                          'dob',
                          this.state.dob,
                          'required'
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Gender:</th>
                    <td className='py-0'>
                      <div className='input-field col-md-6 mt-1'>
                        <select id='gender' name='gender' onChange={this.onChange} className="m-0 no-border-btm">
                          <option value=''>Gender</option>
                          <option
                            value='Male'
                            selected={this.state.gender == 'Male' ? true : false}
                          >
                            Male
                          </option>
                          <option
                            value='Female'
                            selected={this.state.gender == 'Female' ? true : false}
                          >
                            Female
                          </option>
                          <option
                            value='Transgender'
                            selected={this.state.gender == 'Transgender' ? true : false}
                          >
                            Transgender
                          </option>
                          <option
                            value='Not-to-say'
                            selected={this.state.gender == 'Not-to-say' ? true : false}
                          >
                            I prefer not to say
                          </option>
                        </select>

                        {this.userDetailsValidate.message(
                          'gender',
                          this.state.gender,
                          'required'
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* {
                this.state.updatebtn ? ( */}
              <div className='text-right'>
                <button title='Update Profile' className='btn btn-sm'>
                  Save
                </button>
              </div>
              {/* ) : ''
              } */}
            </form>
          </div>
          {/* <div className='col-md-6 mt-md-0 mt-4'>
            <h6 className='revamp-para-small'>Change login details</h6>
            <form id='usernameForm' onSubmit={this.handleUsernameForm}>
              {this.state.usernameAvailability === false && (
                <div className='col-sm-8'>
                  <div
                    className='alert alert-danger alert-dismissible fade show'
                    role='alert'
                  >
                    <p>Username is already in used.</p>
                  </div>
                </div>
              )}
              <div className='profile-inputs'>
                <div className='input-field'>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <i className='fas fa-user-circle active'></i>
                      <input
                        id='username'
                        autoComplete='new-username'
                        name='username'
                        value={this.state.username}
                        className='pinf'
                        onChange={this.onUsernameChange}
                      />
                      {this.usernameValidate.message(
                        'username',
                        this.state.username,
                        'required'
                      )}
                    </div>
                    <div className='col-sm-3'>
                      <button className='btn  btn-sm' type='submit'>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <form id='userEmailForm' onSubmit={this.handleUserEmailForm}>
              {this.state.emailAvailability === false && (
                <div className='col-sm-8'>
                  <div
                    className='alert alert-danger alert-dismissible fade show'
                    role='alert'
                  >
                    <p>Email is already in used.</p>
                  </div>
                </div>
              )}
              <div className='profile-inputs'>
                <div className='input-field'>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <i className='fas fa-envelope'></i>
                      <input
                        id='uemail'
                        name='uemail'
                        value={this.state.email}
                        className='pinf'
                        onChange={this.onEmailChange}
                      />
                      {this.emailValidate.message(
                        'username',
                        this.state.email,
                        'required'
                      )}
                    </div>
                    <div className='col-sm-3'>
                      <button className='btn  btn-sm' type='submit'>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <form
              id='usernameFormbottom'
              onSubmit={this.handleChangePasswordForm}
            >
              <div className='profile-inputs'>
                <div className='input-field'>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <i className='fas fa-unlock-alt'></i>
                      <input
                        autoComplete='new-password'
                        name='password'
                        value={this.state.password}
                        id='password'
                        type='password'
                        className='pinf'
                        onChange={this.onChange}
                      />
                      {this.changePasswordValidate.message(
                        'password',
                        this.state.password,
                        'required'
                      )}
                      <label for='password'>Password*</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='profile-inputs'>
                <div className='input-field'>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <i className='fas fa-unlock-alt'></i>
                      <input
                        id='password1'
                        type='password'
                        name='confirmPassword'
                        className='pinf'
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                      />
                      {this.changePasswordValidate.message(
                        'confirmPassword',
                        this.state.confirmPassword,
                        'required'
                      )}
                      <label for='email'>Confirm password*</label>
                    </div>
                    <div className='col-sm-3'>
                      <button className='btn  btn-sm' type='submit'>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </>
    );
  }
}
export default UserDetailsForm;
