import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Constants from '../../constants';
import AuthService from '../../services/authServices';
import SimpleReactValidator from 'simple-react-validator';
import { setLocalStorageAuth, sitePath } from '../../utils/helpers';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      username: '',
      password: '',
      error: false,
      errorMessage: false,
      loading: false,
    };
  }

  componentDidMount() {
    let vimeo = localStorage.getItem('videoUrl');
    if (vimeo) {
      axios
        .get('https://vimeo.com/api/oembed.json?url=' + vimeo)
        .then((res) => {
          localStorage.removeItem('videoUrl');
          localStorage.setItem('vimeoId', res.data.video_id);
        })
        .catch((error) => {
          localStorage.removeItem('videoUrl');
          this.props.clearAllAlerts();
        });
    } else {
      localStorage.removeItem('vimeoId');
    }
  }

  subscriberLogin = (
    username,
    password,
    vimeoId = null,
    courseDetails = false,
    history
  ) => {
    AuthService.subscriberLogin(username, password, vimeoId)
      .then((data) => {
        setLocalStorageAuth(data.data);
        setTimeout(() => {
          if (courseDetails) {
            Router.push(
              sitePath(
                '/buy-course/' +
                  courseDetails.pageId +
                  '/' +
                  courseDetails.courseId
              )
            );
          } else {
            if (data.data.userDetails.vimeoVideoId) {
              Router.push(
                sitePath('/video-details/' + data.data.userDetails.vimeoVideoId)
              );
            } else {
              Router.push(sitePath('/user/me'));
            }
          }
        }, 500);

        this.setState({ loading: false });
      })
      .catch((error) => {
        if (error.response && error.response.status) {
          let errorData = error.response.data;
          this.setState({
            errorMessage: errorData.message,
            error: true,
          });
        } else {
          this.setState({
            errorMessage: 'Something Went Wrong, Try Again',
            error: true,
          });
        }
        this.setState({ loading: false });
      });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return false;
    }
    let vimeoId = '';
    if (localStorage.getItem('vimeoId')) {
      vimeoId = localStorage.getItem('vimeoId');
    }
    this.setState({ loading: true });
    this.subscriberLogin(
      this.state.username,
      this.state.password,
      vimeoId,
      this.props.courseDetails,
      this.props.history
    );
  };

  render() {
    return (
      <div className='row justify-content-center'>
        <div className='col-md-8 col-sm-12'>
          {this.state.loading && (
            <div className='preloader-background'>
              <div className='big sattva_loader active'>
                <img src={Constants.SITE_URL + '/images/loader.png'} />
              </div>
            </div>
          )}
          {this.state.error && (
            <div className='alert alert-danger' role='alert'>
              {this.state.errorMessage}
            </div>
          )}
          <div className='card subscription-card customer-support'>
            <form
              autocomplete='off'
              className='form form-horizontal'
              onSubmit={this.onSubmit}
            >
              <h4>Member Login</h4>
              <div className=''>
                <div className='input-field'>
                  <label id='username-lbl' htmlFor='username'>
                    Username or Email<span className='required'>&#160;*</span>
                  </label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {this.validator.message(
                    'username',
                    this.state.username,
                    'required'
                  )}
                </div>
              </div>
              <div className=''>
                <div className='input-field'>
                  <label id='password-lbl' htmlFor='password'>
                    Password<span className='required'>&#160;*</span>
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    aria-required='true'
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {this.validator.message(
                    'password',
                    this.state.password,
                    'required'
                  )}
                </div>
              </div>
              <div className='login-links'>
                <div className='input-field'>
                  <Link href='forgot-password'>
                    <a>Forgot your password?</a>
                  </Link>
                </div>
              </div>
              <div className=''>
                <div className='input-field s12'>
                  <button type='submit' className='btn btn-lg'>
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class='card subscription-card customer-support mt-20'>
            <h4>Not A Member?</h4>
            <div class='sattva_login_inner_note'>
              If you don't have an account please click on button give below.
            </div>
            <div class=''>
              <div class='input-field'>
                <ul>
                  <li>
                    <Link href='/plans'>
                      <a class='btn btn-lg'>BECOME A MEMBER</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
