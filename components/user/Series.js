import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import AllSeries from '../../components/user/AllSeries';
import Header from '../../components/user/common/Header';
import Layout from '../../components/user/Layout';
import constants from '../../constants';
import { apiRoute } from '../../utils/helpers';

const series=()=> {
  const[isloading,setIsLoading]=useState(true);

    const[series,setSeries]=useState([]);

    useEffect(()=>{

        axios.get(apiRoute('get-series-data'))
     .then( (response) => {
    // handle success
            setSeries(response.data);
            setIsLoading(false);
        })
        .catch( (error) => {
            // handle error
            console.log(error);
        })

        console.log(series);
    });

    return (
        <>
                <Header/>
                <main className='admin-content'>
            <div className='sec sec-style secSeriesInner'>
              <div className='container'>
                <div className='class-block mt-0'>
                  <div className='row'>
                    <div className='col-md-6 col'>
                      <h4>My Series</h4>
                    </div>
                    <div className='col-md-6 col text-right'>
                      <Link href='/user/me'>
                        <a className='btn btn-sm'>Back</a>
                      </Link>
                    </div>
                  </div>
            <div className="row">
            {series.map((element)=>{
                return(
                    <div className="col-lg-3 col-md-3 col-sm-12">
                    <AllSeries data ={element}/>
                    </div>
                );
            })}
            </div>
            </div>
            </div>
            </div>
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