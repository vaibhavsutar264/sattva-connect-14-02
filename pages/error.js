import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

const error = () => {
  return (
    <Fragment>
      <Head>
        <meta charSet='utf-8' />
        <title>
          Live Streaming Yoga Classes, Meditation & Satsang with Anand Mehrotra
          | Sattva Connect
        </title>
        <meta
          name='description'
          content="Learn & Study with Himalayan Master Anand Mehrotra's Live Streaming Yoga, Meditation Classes & Satsang. Register to join an ongoing live stream event."
        />
        <meta
          name='keywords'
          content='Live Satsang with Anand Mehrotra, Live yoga classes online, Online yoga and meditation'
        />
        <link rel='canonical' href='https://sattvaconnect.com/about-anandji' />
        <script type='application/ld+json'>
          {`
					{"@context": "https://schema.org/",
					"@type": "Person",
					"name": "Anand Mehrotra",
					"url": "https://www.sattvaconnect.com/about-anandji",
					"image": "https://www.internationalyogafestival.org/wp-content/uploads/2019/01/anand-mehrotra.jpg",
					"jobTitle": "Yog-Vedantic pioneer",
					"worksFor": {
						"@type": "Organization",
						"name": "Sattva Yoga"
					},
					"sameAs": [
						"https://www.instagram.com/theanandmehrotra/",
						"https://www.facebook.com/Anandteachings"
					]}
					`}
        </script>
        <script type="application/ld+json">
          {`
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Anand Mehrotra",
            "url": "https://sattvaconnect.com/about-anandji",
            "image": "https://www.sattvaconnect.com/images/anand-teaching.jpg",
            "sameAs": "https://www.instagram.com/theanandmehrotra/",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "Organization",
              "name": "Sattva Connect"
            }  
          `}
          </script>
      </Head>
      <Layout>
        <div className='view intro-2'>
          <section className='inner-banner about-anandji-bg'>
            <div className='container text-center text-white'>
              <h1 className='revamp-signature-heading mb-0'>Oops!</h1>
              <h5 className='revamp-banner-para mt-10px'>Sorry, we couldn't find the page you were looking for. Want to see the latest?</h5>
              <div className='read-more-wrapper animated-four fadeInUp'>
                <Link href='/'><a className='btn waves-effect waves-light btn-lg more yoga_btn error-home'>Go to Homepage</a></Link>
                <Link href="/plans"><a className='btn waves-effect waves-light btn-lg ml-3'>Own new courses</a></Link>
                </div>
            </div>
      
          </section>
        </div>
        <main>

        </main>
      </Layout>
    </Fragment>
  );
};

export default error;

