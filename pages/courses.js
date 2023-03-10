import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { apiRoute } from '../utils/helpers';
import Constants from '../constants';
import CoursesList from '../components/course/CoursesList';

class Courses extends Component {
  
  render() {
    console.log(this.props.banner);
    console.log(this.props.courses);
    return (
      <Layout isHome={true}>
        <Head>
          <meta charSet='utf-8' />
          <title>Online Courses on Yogic Teaches and Practices</title>
          <meta name="description" content="Sattva Connect offers you Online Courses to deepen your knowlegde into the Authentic Teachings and Full-Spectrum Practices of Yoga. " />

          <meta property="og:url" content="https://sattvaconnect.com/courses/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Online Courses on Yogic Teaches and Practices" />
          <meta property="og:description" content="Sattva Connect offers you Online Courses to deepen your knowlegde into the Authentic Teachings and Full-Spectrum Practices of Yoga. " />
          <meta property="og:image" content="https://www.sattvaconnect.com:8443/backendportal/public/images/banner/courseBanner-min_1601380703.jpg" />


          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="sattvaconnect.com" />
          <meta property="twitter:url" content="https://sattvaconnect.com/courses/" />
          <meta name="twitter:title" content="Online Courses on Yogic Teaches and Practices" />
          <meta name="twitter:description" content="Sattva Connect offers you Online Courses to deepen your knowlegde into the Authentic Teachings and Full-Spectrum Practices of Yoga. " />
          <meta name="twitter:image" content="https://www.sattvaconnect.com:8443/backendportal/public/images/banner/courseBanner-min_1601380703.jpg" />
          <link rel="canonical" href="https://www.sattvaconnect.com/courses" />
          <meta
            name='keywords'
            content='Online yoga courses, Online meditation courses'
          />
          <meta
            name='description'
            content='Sattva Connect offers you Online Courses to deepen your knowlegde into the Authentic Teachings and Full-Spectrum Practices of Yoga. '
          />
        </Head>
        <Banner banner={this.props.banner} />
        <div className='main coursePage light-purplebg'>
          <section
            class='sec sec-inabout pb-0 aos-init aos-animate'
            data-aos='fade-right'
          >
            <div className='myContainer'>
              <h4></h4>
              <p className='revamp-para text-center w-90 margin-auto'>
                Welcome to{' '}
                <a href='https://www.sattvaconnect.com' title='Sattva Connect'>
                  Sattva Connect
                </a>{' '}
                Courses! Here is an opportunity for you to deepen your knowledge into the yogic teachings and practices. The conscious person is always committed to learning. We offer a great variety of courses to support your growing understanding. Sattva Connect is Your Support to an Awakened Life!
              </p>
              {/* <p className='revamp-para text-center'>
                More courses are already being developed. You will see them
                soon!
              </p>
              <p className='revamp-para text-center'>May you be inspired!</p> */}
            </div>
          </section>
          <div className='coursePage'>
            <section className='sec most-courses'>
              <div className='container'>
                {/* <h4>Featured</h4> */}
                <div className='row'>
                  {this.props.courses &&
                    this.props.courses.map((item, index) => {
                      return <CoursesList course={item} key={index} />;
                    })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
export async function getStaticProps() {
  const getBanner = await fetch(apiRoute('cms-page-banner/Mw=='));
  const banner = await getBanner.json();
  
  const res = await fetch(apiRoute('get-courses-data/0'));
  const allData = await res.json();
  const courses = allData.courses;
  console.log(courses);

  return {
    props: {
      courses,
      banner,
    },
    revalidate: 100,
  };
}

export default Courses;
