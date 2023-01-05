import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import CoursesList from '../../components/user/course/CoursesList';
import {
  getUserId,
  apiRoute,
  getApiHeader,
  getLocalStorageAuth,
} from '../../utils/helpers';
import Layout from '../../components/user/Layout';

class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      availableCourse: [],
      loading: true,
    };
  }

  componentDidMount() {
    const userId = getUserId();
    const auth = getLocalStorageAuth();
    if (auth) {
      var hasSubscription = auth.userDetails.has_subscription;
    } else {
      var hasSubscription = '0';
    }
    const requestOptions = {
      headers: getApiHeader(true),
    };

    axios
      .get(apiRoute('my-courses/' + userId + '/' + 0), requestOptions)
      .then((res) => {
        if (hasSubscription == '1') {
          let allCourses = [...res.data.freeCourses, ...res.data.courses];
          var myAllCourses = allCourses.filter(
            (v, i, a) => a.findIndex((t) => t.id === v.id) === i
          );
        } else {
          let allCourses = res.data.courses;
          var myAllCourses = allCourses.filter(
            (v, i, a) => a.findIndex((t) => t.id === v.id) === i
          );
        }
        this.setState({ courses: myAllCourses, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });

    axios
      .get(
        apiRoute('user-available-courses/' + userId + '/' + 0),
        requestOptions
      )
      .then((res) => {
        if (hasSubscription == '1') {
          var myArray = res.data.courses;
          var toRemove = res.data.freeCourses;
          for (var i = myArray.length - 1; i >= 0; i--) {
            for (var j = 0; j < toRemove.length; j++) {
              if (myArray[i] && myArray[i].id === toRemove[j].id) {
                myArray.splice(i, 1);
              }
            }
          }
          var allAvailableCourse = myArray;
        } else {
          var allAvailableCourse = res.data.courses;
        }
        this.setState({ availableCourse: allAvailableCourse });
      });
  }

  render() {
    return (
      <>
        <Layout loading={this.state.loading}>
          <main className='admin-content'>
            <div className='coursePage'>
              <section className='sec most-courses light-purplebg'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 col'>
                      <h4 className='revamp-subtitle'>My Courses</h4>
                    </div>
                    {/* <div className='col-md-6 col text-right'>
                      <Link href='/user/me'>
                        <a className='btn btn-sm'>Back</a>
                      </Link>
                    </div> */}
                  </div>
                  <CoursesList courses={this.state.courses} isPurchased='1' />

                  <div className='row'>
                    <div className='col-md-6 col'>
                      <h4 className='revamp-subtitle'>Featured Courses</h4>
                    </div>
                  </div>

                  <CoursesList
                    courses={this.state.availableCourse}
                    isPurchased='0'
                  />
                </div>
              </section>
            </div>
          </main>
        </Layout>
      </>
    );
  }
}

export default MyCourses;
