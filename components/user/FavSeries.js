import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { apiRoute,getLocalStorageAuth } from '../../utils/helpers';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';

const FavSeries=(series)=> {
    return (         

        <div> 
       { <div >
        <Link href={'/user/series-videos/' + series.data.id}>
          <a>
            <div className='hoverable card'>
              <img className='img-fluid' src={`https://www.sattvaconnect.com:8443/backendportal/public/admins/media/series/seriesthumbnail/${series.data.thumbnail}`} />
              <div className='card-content'>
                <span
                  className='card-title'
                  data-html={true}
                  data-for='custom-color-no-arrow'
                  data-tip={series.data.title}
                >
                  {series.data.title}
                </span>
                <ReactTooltip
                  id='custom-color-no-arrow'
                  className='react-tooltip card-title-tooltip'
                  delayHide={1000}
                  textColor='#FFF'
                  backgroundColor='#5c1b72'
                  effect='solid'
                />
                <p
                  className='pop'
                  dangerouslySetInnerHTML={{ __html: series.data.description }}
                ></p>
              </div>
            </div>
          </a>
        </Link>
      </div>}
        </div>
    )
}

export default FavSeries;
