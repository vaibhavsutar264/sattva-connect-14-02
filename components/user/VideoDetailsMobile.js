import React, { Component } from 'react';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import { getLocalStorageAuth } from '../../utils/helpers';

function VideoDetailsMobile({ item, index }) {
  const auth = getLocalStorageAuth();
  if (index == 1) {
    var classname = 'carousel-item classes-show active';
  } else {
    var classname = 'carousel-item classes-show';
  }
  if (auth.userDetails.has_subscription == '1') {
    return (
      <div className={classname}>
        <Link href={'/user/video-details/' + item.id}>
          <a>
            <div className='hoverable card' key={item.id}>
              <img className='img-fluid' src={item.thumbnail} />
              <div className='card-content'>
                <span
                  className='card-title'
                  data-html={true}
                  data-for='custom-color-no-arrow'
                  data-tip={item.title}
                >
                  {item.title}
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
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={classname}>
        <Link href={'/user/plans'}>
          <a>
            <div className='hoverable card' key={item.id}>
              <div className='overlay'>
                <a href='#' class='icon'>
                  <img src='/../images/courses/padlock.svg' />
                </a>
              </div>
              <img className='img-fluid' src={item.thumbnail} />
              <div className='card-content'>
                <span
                  className='card-title'
                  data-html={true}
                  data-for='custom-color-no-arrow'
                  data-tip={item.title}
                >
                  {item.title}
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
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}

export default VideoDetailsMobile;
