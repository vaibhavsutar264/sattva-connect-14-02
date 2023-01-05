import React, { Fragment, useEffect, useState } from 'react';
import HomeBanner from '../components/home/HomeBanner';
import Layout from '../components/Layout';
import Head from 'next/head';
import Slider from "react-slick";
import dynamic from 'next/dynamic';
import { apiRoute, backendportal, getApiHeader } from '../utils/helpers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import CoursesSlider from '../components/home/CoursesSlider';
import axios from 'axios';
import UpcomingStreamSlider from '../components/home/UpcomingStreamSlider';
import TestimonialSlider from '../components/home/TestimonialSlider';
import validator from 'validator'

const Testimonials = dynamic(() => import('../components/home/Testimonials'), {
  ssr: false,
});
const Intentions = dynamic(() => import('../components/home/Intentions'), {
  ssr: false,
});

var settings ={};
const Home = ({ index }) => {

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const [intentions, setIntentions] = useState([]);
  const [courses, setCourses] = useState({});
  const [upcomingStream, setUpcomingStream] = useState({});
  const [Email, SetIsEmail] = useState(false);
  const [ErrorMsg, SetErrorMsg] = useState(false);
  const[subscribeMsg,SetSubscribeMsg] = useState(false);




  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  const onSubscribe = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    axios.get(apiRoute(`mailchimp-subscribe/${e.target.email.value}`))
    .then(function (response) {
      if(response.data.id){
        SetSubscribeMsg("Thanks For subscribing");
        SetErrorMsg(true);
        setTimeout(function(){
          SetErrorMsg(false);
         }, 4000);
      }
      else {
        SetSubscribeMsg("You are already subscribed thank you !");
        SetErrorMsg(true);
        setTimeout(function(){
          SetErrorMsg(false);
         }, 4000);      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  if(isDesktopOrLaptop){
    settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 3,
     autoplay:false,
     arrows:false

   }
 }else{
    settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay:false,
     arrows:false

   }
 
 }
 var communitySettings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1
}

useEffect(() => {
   
  if (index) {
    localStorage.setItem('uniqueAffiliate_id', index);
  }

  const requestOptions = {
    headers: getApiHeader(),
  };
  axios.get(apiRoute('cms-all-testimonials'), requestOptions).then((res) => {
    setIntentions(res.data);
  });

  axios.get(apiRoute('get-courses-data/0'), requestOptions).then((res) => {
    setCourses(res.data);
  });  

  axios.get(apiRoute('get-latest-upcomming-streams'), requestOptions).then((res) => {
    setUpcomingStream(res.data);
  });

},[]);

  
  const getBackgroundImage = (image) => {
    var img = {
      backgroundImage: `url(${image})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center`,
    };
    return img;
  };

 const changeSubscribe = (e) => {
  if (validator.isEmail(e.target.value)) {
    SetIsEmail(false);
  }
  else if(e.target.value==null){
    SetIsEmail(false);
  }
  else {
    SetIsEmail(true);
    SetErrorMsg("Enter Valid Email");
  } 

  alert(e.target.value);
}

  
  return (
    <Fragment>
      <Head>
      {/* <!-- COMMON TAGS --> */}

<title>Online Yoga Classes | Live Streaming Meditation & Satsang With Anand Mehrotra | Sattva Connect</title>
{/* <!-- Search Engine --> */}
<meta name="description" content="Sattva Connect provide Online Yoga Classes & Live Streaming Meditation with Anand Mehrotra. Learn from Master Teachers, Register to join Now!" />
<meta name="image" content="https://sattvaconnect.com/images/banner/slider1.c5dbe1df_1577254476.jpg" />
{/* <!-- Schema.org for Google --> */}
<meta itemprop="name" content="Online Yoga Classes | Live Streaming Meditation & Satsang With Anand Mehrotra | Sattva Connect" />
<meta itemprop="description" content="Sattva Connect provide Online Yoga Classes & Live Streaming Meditation with Anand Mehrotra. Learn from Master Teachers, Register to join Now!" />
<meta itemprop="image" content="https://sattvaconnect.com/images/banner/slider1.c5dbe1df_1577254476.jpg" />
{/* <!-- Twitter --> */}
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Online Yoga Classes | Live Streaming Meditation & Satsang With Anand Mehrotra | Sattva Connect" />
<meta name="twitter:description" content="Sattva Connect provide Online Yoga Classes & Live Streaming Meditation with Anand Mehrotra. Learn from Master Teachers, Register to join Now!" />
<meta name="twitter:site" content="@SattvaConnect" />
<meta name="twitter:creator" content="@SattvaConnect" />
<meta name="twitter:image:src" content="https://sattvaconnect.com/images/banner/slider1.c5dbe1df_1577254476.jpg" />
<meta name="twitter:player" content="https://player.vimeo.com/video/293595927" />
{/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
<meta name="og:title" content="Online Yoga Classes | Live Streaming Meditation & Satsang With Anand Mehrotra | Sattva Connect" />
<meta name="og:description" content="Sattva Connect provide Online Yoga Classes & Live Streaming Meditation with Anand Mehrotra. Learn from Master Teachers, Register to join Now!" />
<meta name="og:image" content="https://sattvaconnect.com/images/banner/slider1.c5dbe1df_1577254476.jpg" />
<meta name="og:url" content="https://sattvaconnect.com/" />
<meta name="og:site_name" content="Sattva Connect" />
<meta name="og:locale" content="en_US" />
<meta name="og:video" content="https://player.vimeo.com/video/293595927" />
<meta name="og:type" content="website" />
<meta name='keywords' content='Online yoga classes, kundalini yoga online classes, online yoga classes for beginners, Hatha yoga online class, Prenatal yoga classes online, online meditation classes, Live Streaming Yoga, Live Stream Yoga Classes, Live Satsang with Anand Mehrotra, Live yoga classes online, Online yoga and meditation, yoga exercises online' />
        <link rel='canonical' href='https://www.sattvaconnect.com/' />
      </Head>
      <div className="indexLogo">
      <Layout isHome={true}>
        <HomeBanner />
        <main className='homePage'>
         {/* {isTabletOrMobile && <h1>Hello Mobile</h1>}
         {isDesktopOrLaptop&& <h1>Hello Lapop</h1>} */}

          {/* sandeep comment
          <div className="sec-2 side-design">
            <div className="myContainer">
                <div className="row">
                    <div className="col-md-5 video_content_area">
                        <div className="video-content ">
                            <h1 className="wow fadeInUp revamp-heading" >Sattva Connect</h1>
                            <p className="wow fadeInUp revamp-para" >Practice yoga as it was intended. The only online yoga platform originating in Rishikesh, India - the Yoga Capital of the World. Learn directly from the source. Study with Himalayan Master, Anand Mehrotra.</p>
                        </div>
                    </div>
                    <div className="col-md-7 video_img_area">
                        <div className='video_imgArea' id='YourIFrame'>
                             <iframe id='YourIFrame' className='responsive_video' src='https://player.vimeo.com/video/293595927?autopause=0&amp;loop=0'
        frameBorder='0' width='100%' height='567' allowFullScreen ></iframe>
                            comment end */}

                            {/*<img src="/images/video.png" alt="" srcset="" />*/}
                            {/*<video loop="" controls="" width="640" height="480">
                              <source type="video/mp4" src="http://player.vimeo.com/video/3873878"></source>
                            </video>*/}

                            {/* sandeep comment
                            <div className="video-icon">
                              comment end */}

                            {/*<img src="/images/video-icon.svg"/>*/}
                          {/*}  <i class="far fa-play-circle" id='playPause'></i>*/}

                          {/* sandeep comment
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        comment end */}
          {/* <section className=' bg-cover bg-position-right'>
                <div className="sec-3 membersBenifits"
                style={getBackgroundImage(
                  backendportal(
                    '/images/img-3.jpg'
                  )
                )}
                >
            <div className="myContainer">
                <div className="row">
                    <div className="col-md-6 member_left">
                        <div className="lf-list">
                            <h1 className="wow fadeInUp">Membership Benefits</h1>
                            <ul className="wow fadeInUp">
                                <li>Learn from the Source </li>
                                <li>Study with Himalayan Master, Anand Mehrotra </li>
                                <li>Integrative Yogic Teachings and Practices </li>
                                <li>Global Community </li>
                                <li>Master Teachers</li>
                                <li>Yogic Lifestyle </li>
                                <li>Yoga Where You Are </li>
                                <li>Yoga at Your Own Pace </li>
                                <li>Yoga to Suit Your Needs </li>
                                <li>Daily Live Classes</li>
                                <li>5-Day Enlivening the Spirit Retreat with Anand Mehrotra</li>
                                <li>The Alchemy of Life, a 6-Episode Wisdom Series with Anand Mehrotra</li>
                            </ul>
                            <Link href="/plans">
                            <button className="btn-list wow fadeInUp" >
                                <a className='puprleHover_Golden'>Start Your Free Trial</a>
                            </button></Link>
                            
                        </div>
                    </div>
                    <div className="col-md-6 member_right">
                        <div className="rt-list">
                            <h1 className="wow fadeInUp" >Online Course Benefits</h1>
                            <ul className="wow fadeInUp" >
                                <li>Advanced Yogic Studies </li>
                                <li>Refine and Expand Your Consciousness</li>
                                <li>Deepen Your Wisdom</li>
                                <li>Take Your Practice to the Next Level</li>
                                <li>Lifetime Access</li>
                                <li>Extra Credits with Yoga Alliance</li> 
                                <li>No Membership Needed</li>
                            </ul>
                            <Link href="/courses">
                            <button className="btn-list wow fadeInUp" >
                                <a className='puprleHover_Golden' >Own a Course</a>
                            </button>
                            </Link>
                            <div className="list-img">
                                <h2 className="wow fadeInUp" >Download Sattva Connect Mobile App</h2>
                                <p>
                         Previous comment       <a href='javascript:void(0)'> <img src="/images/appstore.png" className="wow fadeInUp" /></a>
                                <a href='https://play.google.com/store/apps/details?id=com.app.sattvaconnect'
                                target='_blank'> <img src="/images/playstore.png" className="wow fadeInUp" /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div> 
          </section> */}
          {/* <section className=' bg-cover bg-position-right'>
            <div className="sec-3 membersBenifits"
              style={getBackgroundImage(
                backendportal(
                  '/images/img-3.jpg'
                )
              )}
            >
              <div className="myContainer text-center text-white">
              <h2>Membership Benefits</h2>
              <p>To be an integrated being you need an integrated practice. Sattva Connect gives you access to teachings and practices on all aspects of being; body, mind and spirit.</p>
              </div>
            </div> 
          </section> */}
          <section className='sec-2 inigraty_practice'>
            <div className='myContainer text-center text-white pb-100'>
              <h2 className='revamp-heading'>Sattva Connect</h2>
              <p className='revamp-para w-90 mb-4'>The only online platform originating in Rishikesh, India, Yoga Capital of the World. Learn directly from the source. Study with Himalayan Master, Anand Mehrotra. Practice yoga as it was intended!</p>
              <div className="video_img_area video-width">
                <div className='video_imgArea' id='YourIFrame'>
                  <iframe id='YourIFrame' className='responsive_video' src='https://player.vimeo.com/video/293595927?autopause=0&amp;loop=0' frameBorder='0' width='100%' height='567' allowFullScreen ></iframe>
                  <div className="video-icon"></div>
                </div>
              </div>
            </div>
 
          </section>
          <section className=' sec-members text-center'>
            <div className="quote-container">
                <div className="quote-box">
                  <div className="quote-text-box">
                    {/* <img src="/images/right-quote.svg" className="right-quote"/> */}
                    <p className='quote-text'><img className='pr-10' src="/images/quote-left.svg" />Your purpose here is to evolve, to transform,<br /> to experience your radical aliveness, to awaken to your true nature.<br /> You are the path. The path is you. The time is now.<img className='pl-10' src="/images/quote-right.svg" /></p>
                    {/* <img src="/images/left-quote.svg" className="left-quote"/> */}
                  </div>
                  <div className="quote-writer">
                    <h5 className='quote-writer-text'>-Anand Mehrotra</h5>
                  </div>
                </div>
            </div>



            {/* I M A G E     B A N N E R


            <div className="sec-4">
                <div className="testimoial-1 wow fadeInUp home_testimonial1 text-left" >
                    <img src="/images/quote-up.png" className="up"/>
                    <div className="container text-left ml-5">
                    <p>
                        When you infuse your life with kriya, the learning process<br/>
                        quickens and the lessons that may have taken many lifetimes<br/>
                        to learn, are learned quicker and quicker.
                    </p>
                    <img src="/images/quote-dw.png" className="down"/>
                    </div>
                    <h5>-Anand Mehrotra</h5>
                  
                </div>
            </div> */}
          </section>
          <section className='sec inigraty_practice benefit-footer'>
            <div className='myContainer text-center text-purple pb-50'>
              <h2 className='revamp-heading'>Our Offerings</h2>
              <p className='revamp-para w-90'>Sign up to become a member or choose one of our many courses to start your transformation today. </p>
              <div className='row'>
                <div className="col-xl-2"></div>
                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 cardsHovering'>
                  <div className="benefit-card">
                    {/* <div className="benefit-img">
             
                      <img src="/images/gold_yoga.png" alt="Teaching" />
                    </div> */}
                    <div className="benefit-info">
                      <h2 className='benefit-title '>Membership Benefits</h2>
                      <p className='revamp-para-small w-100 mb-3 '>Unlimited access to 1000+ classes on all aspects of Yoga - New classes uploaded weekly - Daily live classes – 2 free courses – Global community</p>
                      <button class="benefit-btn   OnlineCoursesBtn wow fadeInUp"><a href='/plans' class="puprleHover_Golden">Become a Member</a></button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 cardsHovering'>
                  <div className="benefit-card">
                    {/* <div className="benefit-img">
             
                      <img src="/images/gold_lotus.png" alt="Teaching" />
                    </div> */}
                    <div className="benefit-info">
                      <h2 className='benefit-title '>Course Benefits</h2>
                      <p className='revamp-para-small w-100 mb-3 '>Advanced Yogic Studies –Take your practice to the next level – Lifetime Access – Study at your own pace – Extra credits with Yoga Alliance.</p>
                      <button class="benefit-btn   OnlineCoursesBtn wow fadeInUp"><a href='/courses' class="puprleHover_Golden">Own a Course</a></button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2"></div>
              </div>
            </div>
          </section>
          <section className="email-sec">
          <div className="sec-10 h-auto bg-white">
              <div className="myContainer">
                { ErrorMsg &&
                  <div className="col-5">
                  <div className="alert alert-danger" role="alert">
                      {subscribeMsg}
                    </div>
                    </div>
                }
                
                <div className="mail">
                  <div>
                  <h3 className="wow fadeInUp flex-1 mb-1"><span className='quote-writer-text black-text mr-2 tilt'>Download</span> our mobile app!</h3>
                    <p className='revamp-para'>Experience the benefits of a virtual studio<br /> at home and on-the-go with any device.</p>
                  </div>

                    {/* onChange={(e)=>changeSubscribe(e)} */}
                    <div className="app-box">
                  {/* <div className="app-button w-ios">
                    <i class="fab fa-apple"></i>
                    <div className="app-text">
                      <span>Download on the</span>
                      <p>App Store</p>
                    </div>
                  </div> */}
                   <a href='https://play.google.com/store/apps/details?id=com.app.sattvaconnect'
                    target='_blank'>
                      <div className="app-button w-and">
                  <i class="fab fa-google-play"></i>
                    <div className="app-text">
                      <span>GET IT ON</span>
                      <p>Google Play</p>
                    </div>
                  </div>
                    </a>
                  
                </div>
                </div>
              </div>
          </div>
        </section>         
          <section className=' sec-members text-center'>
          <div className="quote-container">
                <div className="quote-box">
                  <div className="quote-text-box">
                    {/* <img src="/images/right-quote.svg" className="right-quote"/> */}
                    <p className='quote-text'><img className='pr-10' src="/images/quote-left.svg" />Wake yourself up with a Power Vinyasa or an activating Kriya Set,<br /> reconnect with what is important with a lunchtime Wisdom Talk,<br /> clear your energy before bed with a relaxing Restorative Flow.<br /> Find practices that suit your every mood.<img className='pl-10' src="/images/quote-right.svg" /></p>
                    {/* <img src="/images/left-quote.svg" className="left-quote"/> */}
                  </div>
                  <div className="quote-writer">
                    <h5 className='quote-writer-text'>-Anand Mehrotra</h5>
                  </div>
                </div>
            </div>

            {/* <div className="sec-4">
                <div className="testimoial-1 wow fadeInUp home_testimonial1 text-left" >
                    <img src="/images/quote-up.png" className="up"/>
                    <div className="container text-left ml-5">
                    <p>
                        When you infuse your life with kriya, the learning process<br/>
                        quickens and the lessons that may have taken many lifetimes<br/>
                        to learn, are learned quicker and quicker.
                    </p>
                    <img src="/images/quote-dw.png" className="down"/>
                    </div>
                    <h5>-Anand Mehrotra</h5>
                  
                </div>
            </div> */}
          </section>
          <section className='sec inigraty_practice sec-practice'>
            <div className='myContainer text-center text-white pb-50'>
              <h2 className='revamp-heading'>Integrative Practice of Yoga</h2>
              <p className='revamp-para'>With an Integrative Practice of Yoga, you will experience a deeper level of understanding and wholeness. Practice yoga as it was intended!</p>
              <div className='row'>
              {/* <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='interactive_practce_Yoga'>
                    <div className='par_titles'>Sattva Kriya Kundalini</div>
                    <figcaption className='par_title_desc hath'>
                    <p>Learn to balance Shiva and Shakti, the Divine Masculine and Divine Feminine 
                    energies within your Being. Create energetic shifts in the physical, mental, emotional
                    and energetic bodies. Awaken your infinite potential!</p>
                    </figcaption>
                  </figure>
                </div> */}
                {/* pankaj */}
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='par_wrap interactive_practce_Yoga'>
                    <div className='par_title'>Sattva Kriya Kundalini</div>
                    <figcaption className='par_title_desc hath overflow-scroll'>
                    <p className='revamp-para-small w-90 '>Learn to balance Shiva and Shakti, the Divine Masculine and Divine Feminine 
                    energies within your Being. Create energetic shifts in the physical, mental, emotional
                    and energetic bodies. Awaken your infinite potential!</p>
                    </figcaption>
                  </figure>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='par_wrap'>
                    <div className='par_title'>Sattva Meditation</div>
                    <figcaption className='par_title_desc hath overflow-scroll'>
                    <p className='revamp-para-small w-90 '>
                    The greater access you have to silence, the greater access you have to natural 
                    intelligence. Establish your daily sadhana, take on a japa practice, or listen to a 
                    guided meditation.
                    </p>
                    </figcaption>
                  </figure>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='par_wrap'>
                    <div className='par_title'>Sattva Pranayama</div>
                    <figcaption className='par_title_desc hath overflow-scroll'>
                    <p className='revamp-para-small w-90 '>Work with the flow of energy (prana) in the body to experience optimal energy levels.
                    Calm, ground, elevate and expand your energy through a wide variety of techniques 
                    and classes. Master your energy, master your life!</p>
                    </figcaption>
                  </figure>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='par_wrap'>
                    <div className='par_title'>Sattva Hatha/Vinyasa</div>
                    <figcaption className='par_title_desc hath overflow-scroll'>
                    <p className='revamp-para-small w-90 '>Learn static and dynamic poses (asanas) in our Asana Lab and Hatha classes. 
                    Discover intelligent sequencing of yogic postures for increased flexibility, strength, 
                    alignment of the physical body and nervous system. Distribute, ground and integrate 
                    the heightened levels of energy built through pranayama and kriya practices.</p> 
                    </figcaption>
                  </figure>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='par_wrap'>
                    <div className='par_title'>Sattva Supreme Wisdom</div>
                    <figcaption className='par_title_desc hath overflow-scroll'>
                    <p className='revamp-para-small w-90 '>Awaken your innate wisdom. Expand your consciousness state. Sit in the presence 
                    of Truth, as you explore the timeless teachings of yoga. Live a life of purpose and 
                    meaning.</p>
                    </figcaption>
                  </figure>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='par_wrap'>
                    <div className='par_title'>Sattva Naad/Mantra</div>
                    <figcaption className='par_title_desc hath overflow-scroll'>
                    <p className='revamp-para-small w-90 '>Everything in nature responds to vibration and frequency. Work with the power of 
                    sound to experience the expansive energy of the electromagnetic field of the heart.</p>
                    </figcaption>
                  </figure>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='par_wrap'>
                    <div className='par_title'>Sattva Yogic Lifestyle</div>
                    <figcaption className='par_title_desc hath overflow-scroll'>
                    <p className='revamp-para-small w-90 '>Yoga is a way of life. Live a whole life, a life of living enlightenment. Sattva Connect 
                    is here to support your expansion. </p>
                    </figcaption>
                  </figure>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='par_wrap'>
                    <div className='par_title'>Sattva Prenatal</div>
                    <figcaption className='par_title_desc hath overflow-scroll'>
                    <p className='revamp-para-small w-90 '>Sattva Prenatal is a journey into the sacred feminine, into wisdom, into wholeness. 
                    Classes include meditation, pranayama, hatha, kundalini/kriya practices, partner 
                    work and freedom movement, linked together through intelligent sequencing.</p>
                    </figcaption>
                  </figure>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 cardsHovering'>
                  <figure className='par_wrap'>
                    <div className='par_title'>Sattva Sacred Ritual</div>
                    <figcaption className='par_title_desc hath overflow-scroll'>
                    <p className='revamp-para-small w-90 '>A sacred ritual is a conscious action to invoke a desired response from nature, refine
                    your consciousness state, and help you enter a state of receptivity - connecting you 
                    to the vertical love, the love that frees. Yoga is about you claiming the rituals back.</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
              {/* Removed class intigratyTbs from button */}
              <button class="btn-list wow fadeInUp"><a href='/plans' class="puprleHover_Golden">Start Your Free Trial</a></button>
            </div>
          </section>


          {/*<Intentions />*/}
          {/* <Testimonials /> */}
          <section>
          <div className="sec-6"></div>
          </section>
          <CoursesSlider coursesData={courses.courses} />


          <section className=' sec-members text-center'>
          <div className="quote-container">
                <div className="quote-box">
                  <div className="quote-text-box">
                    {/* <img src="/images/right-quote.svg" className="right-quote"/> */}
                    <p className='quote-text'><img className='pr-10' src="/images/quote-left.svg" />To live our most authentic lives, we must move beyond the <br/>fearful chattering of the mind and dive into <br/> the awakened heart.<img className='pl-10' src="/images/quote-right.svg" /></p>
                    {/* <img src="/images/left-quote.svg" className="left-quote two"/> */}
                  </div>
                  <div className="quote-writer">
                    <h5 className='quote-writer-text'>-Anand Mehrotra</h5>
                  </div>
                </div>
            </div>
          </section>
          {/* I M A G E  B A N N E R
        <section>
        <div className="sec-8">
       
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="testimoial-1 wow fadeInUp home_testimonial2">
                        <img src="/images/quote-up.png" className="up"/>
                        <p>
                            To live our most authentic lives, we must move beyond the<br/>
                            fearful chattering of the mind and dive into<br/> the awakened heart.
                        </p>
                        <img src="/images/quote-dw.png" className="down"/>
                        <h5>-Anand Mehrotra</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>    */}
        <UpcomingStreamSlider streamData={upcomingStream}/>

      {/* <section>
          <div className="sec-9">
              <h1 className="wow fadeInUp">Practice Live Together</h1>
                  <p className="wow fadeInUp">Meet us for live satsang, kirtan, guided meditations and other yogic practices. Master teachers broadcasting daily from all <br/>over the world. As we practice together, we elevate our energy and rise higher. Be inspired. Live inspired.</p>
              <div className="online-courses_sliders2 wow fadeInUp">
              <Slider {...settings}>
                  <div className="courses-slider">
                      <img src="/images/11.png"/>
                      <div className="courses-txt">
                      <h5>GENTLE VINYASA FLOW</h5>
                      <p>Monday 24 May at 11:00 IST</p>
                      </div>
                  </div>
                  <div className="courses-slider">
                      <img src="/images/12.png"/>
                      <div className="courses-txt">
                      <h5>HIMALAYAN KUNDALINI</h5>
                      <p>Monday 24 May at 11:00 IST</p>
                      </div>
                  </div>
                  <div className="courses-slider">
                      <img src="/images/13.png"/>
                      <div className="courses-txt">
                      <h5>HIMALAYAN KRIYA MEDITATION</h5>
                      <p>Monday 24 May at 11:00 IST</p>
                      </div>
                  </div>
                  <div className="courses-slider">
                      <img src="/images/11.png"/>
                      <div className="courses-txt">
                      <h5>GENTLE VINYASA FLOW</h5>
                      <p>Monday 24 May at 11:00 IST</p>
                      </div>
                  </div>
                  <div className="courses-slider">
                      <img src="/images/12.png"/>
                      <div className="courses-txt">
                      <h5>HIMALAYAN KUNDALINI</h5>
                      <p>Monday 24 May at 11:00 IST</p>
                      </div>
                  </div>
                  <div className="courses-slider">
                      <img src="/images/13.png"/>
                      <div className="courses-txt">
                      <h5>HIMALAYAN KRIYA MEDITATION</h5>
                      <p>Monday 24 May at 11:00 IST</p>
                      </div>
                  </div>
                  </Slider>
              </div>
              <Link href="/upcoming-stream">
              <button className="courses-btn live wow fadeInUp">
                  <a className='puprleHover_Golden'>View Live Stream Calendar </a>
              </button>
              </Link>
              <Link href="/upcoming-stream">
              <button className="courses-btn live wow fadeInUp">
                  <a className='puprleHover_Golden'>Join Live Stream</a>
              </button>
              </Link>
          </div>
        </section> */}
        <section className="email-sec">
          <div className="sec-10">
              <div className="myContainer">
                { ErrorMsg &&
                  <div className="col-5">
                  <div className="alert alert-danger" role="alert">
                      {subscribeMsg}
                    </div>
                    </div>
                }
                
              <form
               onSubmit={onSubscribe}
                >
                <div className="mail">
                    <h3 className="wow fadeInUp"><span className='quote-writer-text black-text mr-2 tilt'>Subscribe</span> to our Newsletter</h3>
                    {/* onChange={(e)=>changeSubscribe(e)} */}
                      <input required  type="email" name="email" placeholder="Email Address"/>
                      <button className="submit wow fadeInUp" id='mc-embedded-subscribe'>
                      Subscribe
                      </button>
                    
                </div>
                </form>
              </div>
          </div>
        </section>
        <section>
        <div className="sec-11"></div>
        </section>
        <TestimonialSlider testData={intentions}/>
<section style={{position: 'relative'}}>
        <div className="sec-13 gradientsec">
         
            <div className="myContainer flex-column-center p-relative">
                <div className="connect-txt">
                    <h2 className="wow fadeInUp revamp-heading text-center">Sattva Connect is for you if</h2>
                  </div>
                  <div className="connect-card-container my-5">
                   <div className="connect-card">
                     <div className="connect-pointer mb-4">
                       <div className="tick-point mr-4">
                        <img src="/images/check.svg" alt="" />
                       </div>
                       <div className="text-point ">
                       <p className='mb-0 revamp-para-small'>You are Interested in evolution.</p>
                       </div>
                       
                     </div>
                     <div className="connect-pointer mb-4">
                       <div className="tick-point mr-4">
                        <img src="/images/check.svg" alt="" />
                       </div>
                       <div className="text-point">
                       <p className='mb-0 revamp-para-small'>You want to go on a journey of self-realization.</p>
                       </div>
                       
                     </div>
                     <div className="connect-pointer mb-4">
                       <div className="tick-point mr-4">
                        <img src="/images/check.svg" alt="" />
                       </div>
                       <div className="text-point">
                       <p className='mb-0 revamp-para-small'>You want to experience deeper meaning and purpose.</p>
                       </div>
                       
                     </div>
                     <div className="connect-pointer">
                       <div className="tick-point mr-4">
                        <img src="/images/check.svg" alt="" />
                       </div>
                       <div className="text-point">
                       <p className='mb-0 revamp-para-small'>You want to thrive instead of just survive.</p>
                       </div>
                       
                     </div>
                   </div>
                   <div className="connect-card">
                     <div className="connect-pointer mb-4">
                       <div className="tick-point mr-4">
                        <img src="/images/check.svg" alt="" />
                       </div>
                       <div className="text-point">
                        <p className='mb-0 revamp-para-small'>You want to radically shift your life.</p>
                       </div>
                       
                     </div>
                     <div className="connect-pointer mb-4">
                       <div className="tick-point mr-4">
                        <img src="/images/check.svg" alt="" />
                       </div>
                       <div className="text-point">
                       <p className='mb-0 revamp-para-small'>You want to discover joy, bliss, happiness.</p>
                       </div>
                       
                     </div>
                     <div className="connect-pointer mb-4">
                       <div className="tick-point mr-4">
                        <img src="/images/check.svg" alt="" />
                       </div>
                       <div className="text-point">
                       <p className='mb-0 revamp-para-small'>You want to radiate your light out into the world.</p>
                       </div>
                       
                     </div>
                     <div className="connect-pointer">
                       <div className="tick-point mr-4">
                        <img src="/images/check.svg" alt="" />
                       </div>
                       <div className="text-point">
                       <p className='mb-0 revamp-para-small'>You want to experience greater ease in your body and mind.</p>
                       </div>
                       
                     </div>
                   </div>
                  </div>  
                                    {/* <ul className="wow fadeInUp">
                          <li>You are interested in evolution</li> 
                          <li>You want to go on a journey of self-realization </li>
                          <li>You want to experience deeper meaning and purpose </li>
                          <li>You want to experience a deeper sense of connection and belonging </li>
                          <li>You want to thrive instead of just survive </li>
                          <li>You want to experience greater ease in your body and mind </li>
                          <li>You want to radically shift your life </li>
                          <li>You want to discover joy, bliss, happiness</li> 
                          <li>You want to radiate your light out into the world</li>
                      </ul> */}  
                  <Link href="/plans">
                      <button className="btn-list wow fadeInUp">
                          <a class="puprleHover_Golden">Start Your Free Trial</a>
                      </button>
                      </Link>
            </div>
        </div>
        </section>
      
          
          
          
          
          
        </main>
      </Layout>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = async ({ params }) => {
  let { index } = params;
  if (index == null) {
    index = 0;
    return {
      props: { index },
    };
  } else {
    return {
      props: { index },
    };
  }
};

export default Home;

