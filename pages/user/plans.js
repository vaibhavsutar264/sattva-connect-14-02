import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/user/Layout';
import CoursesSlider from '../../components/home/CoursesSlider';
import { apiRoute, getApiHeader } from '../../utils/helpers';
import axios from 'axios';

const Plans = () => {
  const [courses, setCourses] = useState({});
  useEffect(() => {
    const requestOptions = {
      headers: getApiHeader(),
    };

    axios.get(apiRoute('get-courses-data/0'), requestOptions).then((res) => {
      setCourses(res.data);
    });
  }, []);
  return (
    <Fragment>
      <Layout>
        <div className='t3-wrapper'>
          <main>
            {/* <section className='sec sec-inabout'>
              <div className='container'>
                <h4>Membership Plans</h4>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='plans-container'>
                      <div className='card center-align'>
                        <div className=''>
                          <div className='card-image grey darken-4 '>
                            Monthly Plan
                          </div>
                        </div>
                        <div className='osm-item-description clearfix'>
                          <p className='planP'>
                            $21 (70 cents a day for a new you)
                          </p>
                          <div className='osm-item-description-text text-center'>
                            <p>
                              Gain unlimited access to a great variety of
                              wisdom, yoga and meditation classes, daily live
                              streams from experienced international teachers
                              and Enlivening the Spirit, a 5-day retreat from
                              the foothills of the Himalayas.
                            </p>
                          </div>
                          <div className='span12'>
                            <p className='purpleText mb-3  text-center'>
                              <i>14 days free trial, cancel anytime</i>
                            </p>
                          </div>
                          <div className='card-action text-center'>
                            <Link href='/user/user-registration/2'>
                              <a className='btn btn-lg'>
                                Start your free trial now
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='plans-container'>
                      <div className='card center-align'>
                        <div className=''>
                          <div className='card-image grey darken-4 '>
                            Yearly Plan
                          </div>
                        </div>
                        <div className='osm-item-description clearfix'>
                          <p className='planP'>
                            $210 (50 cents a day for a new you)
                          </p>
                          <div className='osm-item-description-text text-center'>
                            <p>
                              Commit to yourself for a year and get an
                              additional 2 months free. Gain unlimited access to
                              a great variety of wisdom, yoga and meditation
                              classes, daily live streams from experienced
                              international teachers and Enlivening the Spirit,
                              a 5-day retreat from the foothills of the
                              Himalayas.
                            </p>
                          </div>
                          <div className='span12'>
                            <p className='purpleText mb-3  text-center'>
                              <i>14 days free trial, cancel anytime</i>
                            </p>
                          </div>
                          <div className='card-action text-center'>
                            <Link href='/user/user-registration/5'>
                              <a className='btn btn-lg'>
                                Start your free trial now
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            <section className='sec sec-inabout light-purplebg'>
              <div className='container'>
                <h1 className='revamp-heading text-align-center'>Membership Plans</h1>
                <div className='row mt-5'>
                  <div className="col-lg-1"></div>
                  <div className='col-lg-5 col-md-8 plans-mx-auto px-mob-none pr-4'>
                    <div className='plans-container mb-4'>
                      <div className="plan-box">
                        <div className="plan-header mb-3">
                          <h3 className='purple-text revamp-subheading'>Monthly Plan</h3>
                          <p className='revamp-para-small fs-italic'>14 days free trial, cancel anytime</p>
                        </div>
                        <div className="plan-pricing">
                          <h3 className='purple-text revamp-subheading'>$21</h3>
                          <p className='revamp-para-small'>(70 cents a day)</p>
                        </div>
                        <button class="benefit-btn   OnlineCoursesBtn wow fadeInUp">
                          <Link href='/user/user-registration/2'>
                            <a class="puprleHover_Golden">Start your free trial now!</a>
                          </Link>
                        </button>
                        <div className="plan-details mt-4">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>Unlimited access to 1000+ yoga classes </p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>Live Studio (master teachers) </p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>Lifestyle Magazine</p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>Yoga Series (highly curated content)</p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>5-day Enlivening the Spirit Retreat with Anand Ji</p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>The Alchemy of Life Wisdom Series with Anand Ji</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-5 col-md-8 plans-mx-auto px-mob-none pb-5 pl-4'>
                    <div className='plans-container'>
                      <div className="plan-box">
                        <div className="plan-header mb-3">
                          <h3 className='purple-text revamp-subheading'>Yearly Plan</h3>
                          <p className='revamp-para-small fs-italic'>14 days free trial, cancel anytime</p>
                        </div>
                        <div className="plan-pricing">
                          <h3 className='purple-text revamp-subheading'>$210</h3>
                          <p className='revamp-para-small'>(Save $42, 50 cents a day)</p>
                        </div>
                        <button class="benefit-btn   OnlineCoursesBtn wow fadeInUp">
                          <Link href='/user/user-registration/5'>
                            <a class="puprleHover_Golden">Start your free trial now!</a>
                          </Link>
                        </button>
                        <div className="plan-details mt-4">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>Unlimited access to 1000+ yoga classes </p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>Live Studio (master teachers) </p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>Lifestyle Magazine</p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>Yoga Series (highly curated content)</p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>5-day Enlivening the Spirit Retreat </p>
                          </div>
                        </div>
                        <div className="plan-details">
                          <div className="plan-check mr-3">
                            <img src="./images/purple_check.svg" alt="" />
                          </div>
                          <div className="plan-detail-text">
                            <p className='revamp-para-small'>The Alchemy of Life Wisdom Series </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              </div>
            </section>
            <CoursesSlider title={'Own a Course'} coursesData={courses.courses} />
            <section className=' sec-members text-center'>
              <div className="quote-container">
                <div className="quote-box">
                  <div className="quote-text-box">
                    <p className='quote-text'><img className='pr-10' src="/images/quote-left.svg" />To live our most authentic lives, we must move beyond the<br /> fearful chattering of the mind and dive deep into the awakened heart.<br /> Sattva Connect is your support to an Awakened Life.<img className='pl-10' src="/images/quote-right.svg" /></p>
                  </div>
                  <div className="quote-writer">
                    <h5 className='quote-writer-text'>-Anand Mehrotra</h5>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Plans;
