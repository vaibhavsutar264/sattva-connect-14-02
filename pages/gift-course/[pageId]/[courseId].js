import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { apiRoute, getApiHeader } from '../../../utils/helpers';
import BuyCourseForm from '../../../components/course/GiftCourseForm';
import BuyCourseFormLanguage from '../../../components/course/GiftCourseFormLanguage';
import Layout from '../../../components/Layout';
import Fade from 'react-reveal/Fade';

const GiftCourse = ({ banner, course, courseId, pageId }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Layout isHome={true}>
      <Head>
        <meta charSet='utf-8' />
        <title>Gift Course.</title>
        <meta name='description' content='Gift Course.' />
      </Head>
      {loading && (
        <div className='preloader-background'>
          <div className='big sattva_loader active'>
            <img src={'/images/loader.png'} />
          </div>
        </div>
      )}
      <div className='main coursePage'>
        {banner ? (
          <div>
            <div
              className='secCourseBanner'
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            >
              <div className='container'>
                <Fade bottom>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-7 col-md-8 col-10 pr-0'>
                      <h1
                        className='textTheme'
                        dangerouslySetInnerHTML={{
                          __html: banner.title,
                        }}
                      ></h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: banner.description,
                        }}
                      ></p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className='CourseBannerContent'>
              <div className='container'>
                <h1
                  className='textTheme'
                  dangerouslySetInnerHTML={{
                    __html: banner.title,
                  }}
                ></h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: banner.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <section className='sec light-purplebg'>
          <div className='container'>
            {course && course.is_in_english == 1 ? (
              <BuyCourseForm
                affiliateUrlId=''
                courseId={courseId}
                course={course}
                pageId={pageId}
              />
            ) : (
              <BuyCourseFormLanguage
                affiliateUrlId=''
                courseId={courseId}
                course={course}
                pageId={pageId}
              />
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { pageId, courseId } = params;
  const getBanner = await fetch(apiRoute('cms-page-banner/' + pageId));
  const banner = await getBanner.json();

  const courseDetails = await fetch(apiRoute('course-detail/' + courseId));
  const course = await courseDetails.json();

  return {
    props: { banner, course, courseId, pageId },
  };
};
export default GiftCourse;
