import axios from 'axios';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import AllSeries from '../../components/user/AllSeries';
import Header from '../../components/user/common/Header';
import { ContextSearch, SearchContext } from '../../components/user/ContextSearch';
import Layout from '../../components/user/Layout';
import constants from '../../constants';
import { apiRoute, getLocalStorageAuth } from '../../utils/helpers';

const SearchComponent = dynamic(
  () => import('../../components/user/SeriesSearch'),
  {
    ssr: false,
  }
);

const series = () => {

  const context = useContext(SearchContext);

  const [isloading, setIsLoading] = useState(true);

  const [series, setSeries] = useState([]);
  const [recent, setRecent] = useState([]);
  const [read, setRead] = useState([]);


  const searchSeries = (response) => {
    axios.post(apiRoute('search-series'), {
      data: response,
    })
      .then((response) => {
        setSeries(response.data);
        // context.setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {

    searchSeries(context.si);

    axios.get(apiRoute('recent-series-videos'))
      .then((response) => {
        setRecent(response.data);


      })
      .catch((error) => {
        console.log(error);
      })


    const getId = getLocalStorageAuth();
    let userId = getId.userDetails.id;

    axios.get(apiRoute('recent-read-series/' + userId))
      .then((response) => {
        setRead(response.data);
        console.log(response.data);
        setIsLoading(false);

      })
      .catch((error) => {
        console.log(error);
      })


  }, []);

  const handleCallback = (childdata) => {
    searchSeries(childdata);
  }



  let ids = '';

  return (
    <>
      <Header />
      <main className='admin-content light-purplebg'>
        <section
          className='inner-banner'
          style={{
            background: 'url(/../images/series-banner.jpeg)',
            backgroundSize: 'cover',
            minHeight: '500px',
          }}
        >
          <div className='container text-center text-white'>
            <h1 className='revamp-signature-heading mb-0'>Curated Series</h1>
            <p className='revamp-banner-para'>For Yogic Living</p>
          </div>
        </section>
        <section className='sec sec-inabout bg-white'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <p className='revamp-para'>Explore our curated content to find a wide variety of yogic lifestyle classes to bring balance, harmony and positivity into your life. Live life consciously!</p>
              </div>
            </div>
          </div>
        </section>
        {/* <SearchComponent parentcallback={handleCallback} /> */}

        <div className='sec sec-style secSeriesInner series_page'>
          <div className='container'>
            {/* <div className='class-block mt-0'>
              <div className="row">
                {series.map((element, index) => {
                  for (let i = 0; i < read.length; i++) {
                    if (element.id == read[i]) {
                      ids = read[i];
                    }
                  }
                  return (
                    <div className="col-lg-3 col-md-3 col-sm-12 seriseVideos">
                      <AllSeries data={element} recent={ids} />
                    </div>
                  );
                })}
              </div>
            </div> */}
            <div className='row'>
              <div className='col-md-12'>
                <div className='flex-live'>
                  <h4 className='revamp-subtitle mb-0'>Featured Series</h4>
                  <SearchComponent parentcallback={handleCallback} />
                </div>
              </div>
              <div className='class-block mt-0 col-md-12'>
                <div className="row flex-series">
                  {series.map((element, index) => {

                    for (let i = 0; i < read.length; i++) {
                      if (element.id == read[i]) {
                        ids = read[i];
                      }

                    }

                    return (
                      <div className="col-lg-3 col-md-3 col-sm-12 seriseVideos series-mobile">
                        <AllSeries data={element} recent={ids} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className=' sec-members text-center'>
          <div className="quote-container">
            <div className="quote-box">
              <div className="quote-text-box">
                {/* <img src="/images/right-quote.svg" className="right-quote"/> */}
                <p className='quote-text'><img className='pr-10' src="/images/quote-left.svg" />Refine the observer and the <br />observed will be refined<img className='pl-10' src="/images/quote-right.svg" /></p>
                {/* <img src="/images/left-quote.svg" className="left-quote"/> */}
              </div>
              <div className="quote-writer">
                <h5 className='quote-writer-text'>-Anand Mehrotra</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
      {isloading && (
        <div className='preloader-background'>
          <div className='big sattva_loader active'>
            <img src={constants.SITE_URL + '/images/loader.png'} />
          </div>
        </div>
      )}
    </>
  )
}

export default series;