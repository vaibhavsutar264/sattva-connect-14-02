import React, { Fragment } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function faq() {
  return (
    <Layout>
      <Head>
        <meta charSet='utf-8' />
        <title>FAQ.</title>
        <link rel="canonical" href=" https://www.sattvaconnect.com/faq" />
      </Head>
      <div className='light-purplebg'>
        <main>
          <section className='sec sec-inabout sec-faq'>
            <div className='container'>
              <h4 className='revamp-subtitle'>Frequently asked questions</h4>
              {/* <p className='revamp-para'>
                Welcome to FAQ on Sattva Connect. This section is updated
                regularly.
              </p> */}
              {/* <p className='revamp-para'>
                However, if you do not find the answer to your question, please
                send an inquiry to{' '}
                <Link href='/customer-support' rel='alternate'>
                  <a>Customer Support</a>
                </Link>
                . Here you may find the{' '}
                <Link href='/user-dashboard/privacy-policy' rel='alternate'>
                  <a>Privacy Policy</a>
                </Link>{' '}
                and{' '}
                <Link href='/user-dashboard/terms-of-services' rel='alternate'>
                  <a>Terms of Services</a>
                </Link>
                .
              </p> */}
              <div className='months-accordian card p-3'>
                <Accordion
                  className='custom-accordion faq-accordion p-2'
                  allowZeroExpanded={true}
                >
                  <AccordionItem>
                    <AccordionItemHeading className='accordion-header'>
                      <AccordionItemButton>
                        <div className="revamp-para">Membership</div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          x='0'
                          y='0'
                          fill='#5c1b72'
                          enableBackground='new 0 0 100 100'
                          viewBox='0 0 100 125'
                        >
                          {' '}
                          <switch>
                            {' '}
                            <g>
                              {' '}
                              <path d='M71.394 49.187L29.771 19.311a1 1 0 00-1.436 1.333L46.23 50 28.335 79.355a1 1 0 001.436 1.333l41.623-29.876a1 1 0 000-1.625z'></path>{' '}
                            </g>{' '}
                          </switch>{' '}
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <table className='table table-striped profile-table detail-table border-0 sec-privacy'>
                        <tbody>
                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>Sign Up for Membership</span><br /> Go to <a href='www.sattvaconnect.com'>www.SattvaConnect.com</a> and click on Sign Up button on the top right hand-side. Select Membership Plan and follow the instructions. Please note that you do not have to be a member of Sattva Connect to Own a Course.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>Update my account</span><br /> Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar). Update your Member Profile and Payment terms, or specify your Notification settings.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Change Username and Password </span><br /> Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Security to update your Login Details here.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Change Payment Method</span><br />Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Payment and change your Payment Method here.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Update or Change Payment Card  </span><br /> Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Payment and update/change your Payment Card here.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>View Transaction History</span><br />Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Payment and scroll down to view your Payment History.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Print receipts</span><br /> Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Payment and scroll down to view your Transaction History. Print the complete Transaction Overview or Per Transaction receipts.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Cancellation</span><br /> Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Payment and scroll down to view your Membership Plan. Cancel your membership here.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Delete Account </span><br /> Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to My Profile and click on Delete Account.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Reactivate My Account </span><br /> Login to your Sattva Connect account and follow the steps as guided to reactivate your account. Then you may, click on Settings (left hand-side navigation bar) to update your Member Profile and Payment details.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Upgrade Membership</span><br />   Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Payment and upgrade your Membership Plan here.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Downgrade Membership</span><br /> Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Payment and downgrade your Membership Plan here.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Gift a Membership</span><br /> Go to Sign Up. Click on Gift a Friend. Follow the instructions.
                                You can also Gift a Friend through your member account.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Coupon for Membership</span><br /> If the coupon code for a membership is not working do the following:
                                <ol className='pl-4'>
                                  <li>
                                    Check that the Membership Plan is correct,
                                  </li>
                                  <li>
                                    Add Payment Method,
                                  </li>
                                  <li>
                                    Make sure that the Program Software on your device are Up-to-Date,
                                  </li>
                                  <li>
                                    Try a Different Browser,
                                  </li>
                                  <li>
                                    No White Space before OR after the application of coupon code
                                  </li>
                                  <li>
                                    Clear Cache (internet browsing history), and
                                  </li>
                                  <li>
                                    No Active Membership with Sattva Connect. If you do, and still want to use the coupon code, you must cancel your current Membership Plan and Delete your account. Then, you can sign up again. Please note that you will lose access to any purchased courses registered on your old account
                                  </li>
                                  <li>
                                    Contact Us on info@sattvaconnect.com
                                  </li>

                                </ol>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading className='accordion-header'>
                      <AccordionItemButton>
                        <div className="revamp-para">Courses</div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          x='0'
                          y='0'
                          fill='#5c1b72'
                          enableBackground='new 0 0 100 100'
                          viewBox='0 0 100 125'
                        >
                          {' '}
                          <switch>
                            {' '}
                            <g>
                              {' '}
                              <path d='M71.394 49.187L29.771 19.311a1 1 0 00-1.436 1.333L46.23 50 28.335 79.355a1 1 0 001.436 1.333l41.623-29.876a1 1 0 000-1.625z'></path>{' '}
                            </g>{' '}
                          </switch>{' '}
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <table className='table table-striped profile-table detail-table border-0 sec-privacy'>
                        <tbody>
                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>View Transaction History</span><br /> Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Payment and scroll down to Courses.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'> Print Receipts </span><br /> Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar).  Go to Payment and scroll down to view your Transaction History. Print the complete Transaction Overview or Per Transaction receipts.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>View a Course </span><br /> Login to your Sattva Connect account. Click on Home or Courses (left hand-side navigation bar).  Your courses will show up under My Courses.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>How long do I have access to a course?  </span><br /> You have Lifetime Access to the courses that you own (have purchased).
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Leave a Review</span><br /> Login to your Sattva Connect account. Go to the Courses (left hand-side navigation bar). Locate your course under My Courses and click Start Course. Scroll down and leave a review under Review the course, share your experience and inspire the community.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Are there any free courses? </span><br />All members of Sattva Connect enjoys free access to The Enlivening the Spirit retreat and The Alchemy of Life wisdom series with Anand Ji. The courses can be found under My Courses, when the free trial period is done.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Do I need to be(come) a member to own a course? </span><br />No, but you will only have access to the Courses section of the Sattva Connect platform. To unlock the other sections of the platform, you will have to Sign Up for a Membership.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Coupon for Courses</span><br />If the coupon code for a course is not working do the following:
                                <ol className='pl-4'>
                                  <li>
                                    Check that the Coupon Code is correct,
                                  </li>
                                  <li>
                                    Add Payment Method,
                                  </li>
                                  <li>
                                    Make sure that the Program Software on your device are Up-to-Date,
                                  </li>
                                  <li>
                                    Try a Different Browser,
                                  </li>
                                  <li>
                                    No White Space before OR after the application of coupon code
                                  </li>
                                  <li>
                                    Clear Cache (internet browsing history), and
                                  </li>
                                  <li>
                                    Contact Us on info@sattvaconnect.com
                                  </li>
                                </ol>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* <div className='card-body'>

                    </div> */}
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem allowZeroExpanded={true}>
                    <AccordionItemHeading className='accordion-header'>
                      <AccordionItemButton>
                        <div className="revamp-para">Live Studio</div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          x='0'
                          y='0'
                          fill='#5c1b72'
                          enableBackground='new 0 0 100 100'
                          viewBox='0 0 100 125'
                        >
                          {' '}
                          <switch>
                            {' '}
                            <g>
                              {' '}
                              <path d='M71.394 49.187L29.771 19.311a1 1 0 00-1.436 1.333L46.23 50 28.335 79.355a1 1 0 001.436 1.333l41.623-29.876a1 1 0 000-1.625z'></path>{' '}
                            </g>{' '}
                          </switch>{' '}
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <table className='table table-striped profile-table detail-table border-0 sec-privacy'>
                        <tbody>
                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>Who can join the Live Studio?</span><br /> You need to be a Member of Sattva Connect in order to join a Live Class through our Live Studio. If you want to test the Live Studio, you can sign up for a 14-day free trial (cancel anytime).
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>How do I join a Live Class?</span><br /> Login to your Sattva Connect account. Go to Live Studio (left hand-side navigation bar).  Click on Join Live Class. Follow the instructions, adding your camera and mic is optional. The Live Studio has the most optimal performance in Chrome browser.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>Where do I view an old Live Class? </span><br /> Login to your Sattva Connect account. Click on Live Studio (left hand-side navigation bar). Scroll down and find the class you are looking for in the Recorded Live Classes section. Please note that not all Live Classes are recorded. You can search for a particular class in the Free Form Search field.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>Where do I find the Live Studio calendar? </span><br /> There are two ways. If you are a member of Sattva Connect, Login to your Sattva Connect account. Click on Live Studio (left hand-side navigation bar).  Click on Calendar to view any updates to the schedule. If you are not a member of Sattva Connect, click on Live Studio in the top menu. Please note that you must be a member of Sattva Connect to join a Live Class. We have 14 days free trial, so sign up for a membership and cancel anytime.
                              </p>
                            </td>
                          </tr>

                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>I got kicked out of the Live Studio?</span><br /> Refresh your page or Login/ Join Live Class again. Ensure that your internet connection is stable. Please note that there may be a Temporary Drop in
                                Internet Connection, especially if we are streaming from the Sattva Retreat center in the Himalayas/India, and if so then you will get kicked out of the Live Studio. Try to refresh and join Live Class again. The teacher will be live as soon as the internet connection is back on and stable.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>What is Raise Hand in the Live Studio? </span><br /> You can send a Raise Hand Request to the teacher by clicking on the Raise Hand Symbol in your Live Studio. If accepted, you will be given the opportunity to ask questions and/or give feedback directly to the teacher and the students of that particular Live Class.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>How can I comment or read comments in a Live Class?</span><br /> Click on the Comment Symbol in your Live Studio.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>How can view full screen?</span><br /> Click on the Full Screen View in the top menu bar of your Live Studio.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>How can view participants of a Live Class?</span><br /> Click on the 3 dots and select Participants in your Live Studio. Or, click on the Participants Symbol in the top menu bar of your Live Studio.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>How do I change microphone and camera settings?</span><br /> Click on the 3 dots, select Settings and click on Devices. Select camera and microphone and click Apply.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Which browser do I use?</span><br /> The Live Studio works best in Chrome browser, but you can also use other common browsers such as Safari and Firefox.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* <div className='card-body'>

                    </div> */}
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading className='accordion-header'>
                      <AccordionItemButton>
                        <div className="revamp-para">Sattva Yoga Academy</div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          x='0'
                          y='0'
                          fill='#5c1b72'
                          enableBackground='new 0 0 100 100'
                          viewBox='0 0 100 125'
                        >
                          {' '}
                          <switch>
                            {' '}
                            <g>
                              {' '}
                              <path d='M71.394 49.187L29.771 19.311a1 1 0 00-1.436 1.333L46.23 50 28.335 79.355a1 1 0 001.436 1.333l41.623-29.876a1 1 0 000-1.625z'></path>{' '}
                            </g>{' '}
                          </switch>{' '}
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <table className='table table-striped profile-table detail-table border-0 sec-privacy'>
                        <tbody>
                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>Who can request access to the SYA Teacher Exclusive Content?   </span><br /> All students of Sattva Yoga Academy can request access to the SYA Teacher Exclusive Content. You must be a 200hrs, 300hrs, 500hrs + student.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className='w-100' >
                              <p>
                                <span className='sub-text'>How can I get access to the SYA Teacher Exclusive Content?  </span><br />Login to your Sattva Connect account. Click on Settings (left hand-side navigation bar). Go to Sattva Yoga Academy and send us your request. You can expect to hear back from us within 48 hours.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>
                              <p>
                                <span className='sub-text'>Where can I find the SYA Teacher Exclusive Content? </span><br /> Login to your Sattva Connect account. Click on Library. Go to the Browse by Style section. Click on SYA button.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <p className='revamp-para-xs'>
                  For further inquiries contact our <Link href='/customer-support' rel='alternate'>
                    <a>Customer Support</a>
                  </Link>.
                </p>
              </div>

            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
