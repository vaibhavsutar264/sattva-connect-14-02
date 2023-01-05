import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { apiRoute, getApiHeader } from '../utils/helpers';
import Layout from '../components/Layout';
import Moment from 'react-moment';
import axios from 'axios';
import moment from 'moment';
import { Calendar, momentLocalizer, Navigate } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/router';

const  UpcomingStream = () => {
  const [Banner, setBanner] = useState([]);
  const [AllStream, setAllStream] = useState([]);
  const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);
  const router = useRouter();
  console.log(AllStream);
  console.log(AllStream[0]?.schedule[0]);
  const liveDate = moment(AllStream[0]?.schedule[0]).format('h:mm');
  console.log(moment(AllStream[0]?.schedule[0]).toDate());
  console.log(liveDate);  

  const [selected, setSelected] = useState('');
useEffect(() => {
  if(selected === ''){
    return
  }else{
    router.push(`#${selected}`);
  }
}, [selected]);
const handleSelectSlot = (e) => {
  console.log(e.id);
  setSelected(e.id);
}
  useEffect(()=>{
    const requestOptions = {
      headers: getApiHeader(),
    };
    axios
      .get(
        apiRoute('cms-page-banner/MTg='),
        requestOptions
      )
      .then((res) => {
        console.log(res.data);
        setBanner(res.data);
      });


      axios
      .get(
        apiRoute('get-upcomming-streams'),
        requestOptions
      )
      .then((res) => {
        console.log(res.data);
        setAllStream(res.data);
      });
  },[])
  useEffect(() => {
    let tempEvents = [];
    AllStream?.map((item, index) => {
        item.schedule.map((item2,index)=>{
          console.log(item?.event + item2);
              const data = {
            title: `${moment(item2).format('h:mm a')} | ${item?.event}`,
            id: index,
            allDay: false,
            start: moment(item2).toDate(),
            end: moment(item2).add(30, 'minutes').toDate(),
        };
        tempEvents.push(data);
        setEvents(tempEvents);
        })
    });
  }, [AllStream])



  return (
    <Fragment>
      <Head>
        <meta charSet='utf-8' />
        <title>
          Live Streaming Yoga Classes, Satsang with Anand Mehrotra | Sattva
          Connect Broadcast Channel
        </title>

        <meta
          name='description'
          content='Join us Live Streaming Yoga Classes, Satsang with Anand Mehrotra @ Sattva Connect Live Stream Channel. Register to join an ongoing live stream event.'
        />
        <link rel="canonical" href="https://sattvaconnect.com/upcoming-stream" />
<meta property="og:url" content="https://sattvaconnect.com/upcoming-stream/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Live Streaming Yoga Classes, Satsang with Anand Mehrotra | Sattva Connect Broadcast Channel" />
<meta property="og:description" content="Join us Live Streaming Yoga Classes, Satsang with Anand Mehrotra @ Sattva Connect Live Stream Channel. Register to join an ongoing live stream event." />
<meta property="og:image" content="https://sattvaconnect.com/images/banner/meetUsImg.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="sattvaconnect.com" />
<meta property="twitter:url" content="https://sattvaconnect.com/upcoming-stream/" />
<meta name="twitter:title" content="Live Streaming Yoga Classes, Satsang with Anand Mehrotra | Sattva Connect Broadcast Channel" />
<meta name="twitter:description" content="Join us Live Streaming Yoga Classes, Satsang with Anand Mehrotra @ Sattva Connect Live Stream Channel. Register to join an ongoing live stream event." />
<meta name="twitter:image" content="https://sattvaconnect.com/images/banner/meetUsImg.jpg" />
        <meta
          name='keywords'
          content='Live Streaming Yoga, Live yoga classes online, Live Stream Yoga Classes, Live Satsang with Anand Mehrotra'
        />
      </Head>
      <Layout isHome={true}>
        {Banner &&

<div className='view intro-2'>
          <section
            className='inner-banner'
            style={{
              backgroundImage: `url(/images/banner/meetUsImg.jpg)`,
            }}
          >
            <div className='container text-center text-white'>
              {Banner.title ? <h1 className='revamp-signature-heading mb-0'>{Banner.title}</h1> : ''}
              {Banner.description ? (
                <h2 className='sp-posttitle animated-two fadeInUp sp-animation-2 revamp-banner-para'>
                  {Banner.description}
                </h2>
              ) : (
                ''
              )}
              {Banner.link ? (
                <div className='read-more-wrapper animated-four fadeInUp'>
                  <a
                    href={Banner.link}
                    className='btn waves-effect waves-light btn-lg'
                  >
                    Learn more
                  </a>
                </div>
              ) : (
                ''
              )}
            </div>
          </section>
        </div>
        }
        
        <main>
          <section className='sec sec-inabout light-purplebg'>
            <div className='myContainer'>
              <div className='row'>
                <div className='col-md-12'>
                  <p className='revamp-para text-center w-90 margin-auto' >
                  International master teachers share their love for the yogic teachings and practices with you through daily live classes. Broadcast from all over the world. Check out your local time and join us live! Let's liberate and celebrate!
                  </p>
                </div>
              </div>
              </div>
              </section>
              <section className='sec sec-inabout light-purplebg'>
              <div className="container">
                <div className="calendar--block mb-5">
                <Calendar
                  selected={selected}
                  popup
                  selectable
                  localizer={localizer}
                  views={['month']}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{height:'80vh', marginLeft: '15px', marginRight: '15px', backgroundColor: 'white' }}
                  className='training__calendar p-4'
                  onSelectEvent={handleSelectSlot}
                />
                <p className='link-text p-4 text-right'>All times are listed in IST (Indian Standard Time). Check out your local time <a href="https://www.worldtimebuddy.com/">here</a> and join us live.</p>
                </div>
                
              </div>    
              <div className='container'>
              {AllStream && AllStream.map((item, index) => {
                return (
                  <div className='upcminglivestream up-anchor' id={index} key={index}>
                    <div className='card'>
                      <div className='row mb-5 mt-5'>
                        <div className='col-xl-4 clo-lg-4 col-md-4 col-sm-6'>
                          <div className='card-image'>
                            <img
                              src={item.image}
                              className='img-fluid'
                              alt=''
                            />
                          </div>
                        </div>
                        <div className='col-xl-8 clo-lg-8 col-md-8 col-sm-6 mt-sm-0 mt-3'>
                          <div className='stamTitle'>
                            <h4 className='revamp-subtitle d-contents'>{item.event}</h4>
                            <p className='streamTeacherName'>
                              with <span className='quote-writer-text black-text'>{item.name}</span>
                            </p>
                          </div>

                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                          <p className='underline'>
                            <span>
                              <strong>Schedule:</strong>
                            </span>{' '}
                          </p>

                          {item.schedule.length > 0 ? (
                            <div className='singleSchedule'>
                              <p><Moment format="DD MMM YYYY HH:mm">{item.schedule[0]}</Moment></p>
                            </div>
                          ) : (
                            ''
                          )}
                          {item.schedule.length > 1 ? (
                            <a className=' showMoreSchedule scheduleBtn'>
                              VIEW MORE
                              <i
                                class='fa fa-angle-down'
                                aria-hidden='true'
                              ></i>
                            </a>
                          ) : (
                            ''
                          )}
                          <div className='allSchedule'>
                            {item.schedule.map((items, index) => {
                              return index !== 0 ? <p><Moment format="DD MMM YYYY HH:mm">{items}</Moment></p> : '';
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          {/* <section className='sec upcoming-last-sec'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 text-white text-center'>
                  <h2>
                    You have to be a member in order to join a Live Stream
                    event.
                  </h2>
                  <Link href='/plans'>
                    <a className='btn btn-lg mt-3'>Sign Up</a>
                  </Link>
                </div>
              </div>
            </div>
          </section> */}
        </main>
      </Layout>
    </Fragment>
  );
}

// export async function getStaticProps() {
//   const getBanner = await fetch(apiRoute('cms-page-banner/MTg='));
//   const banner = await getBanner.json();

//   const getStreams = await fetch(apiRoute('get-upcomming-streams'));
//   const allStream = await getStreams.json();
//   return {
//     props: {
//       banner,
//       allStream,
//     },
//     revalidate: 1,
//   };
// }

export default UpcomingStream;
