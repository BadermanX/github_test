import React from 'react';
import { BannerInterface } from '../types';

export default ({ title, body }: BannerInterface) => {

    return (
        <div className='mainBanner'>
            <h1 className='bannerTitle'>{title}</h1>
            <p className='bannerBody' >{body}</p>
        </div>
    );
}